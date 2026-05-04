"use client";

import gsap from "gsap";
import { useLayoutEffect } from "react";

const SELECTOR_BLOCK = "[data-reveal]";
const SELECTOR_STAGGER = "[data-reveal-stagger]";
const SELECTOR_TEXT = "[data-reveal-text]";
const SELECTOR_ANY = `${SELECTOR_BLOCK}, ${SELECTOR_STAGGER}, ${SELECTOR_TEXT}`;

const IO_OPTIONS: IntersectionObserverInit = {
  threshold: 0.25,
  rootMargin: "0px 0px -10% 0px",
};

const DURATION_BLOCK = 1;
const DURATION_WORD = 0.9;
const DELAY = 0.15;
const STAGGER_CHILD = 0.12;
const STAGGER_WORD = 0.06;
const EASE = "power3.out";

function isRevealTextRoot(el: HTMLElement): boolean {
  if (!el.matches(SELECTOR_TEXT)) return false;
  const parentText = el.parentElement?.closest(SELECTOR_TEXT);
  if (parentText) return false;
  return true;
}

function isRevealBlockRoot(el: HTMLElement): boolean {
  if (!el.matches(SELECTOR_BLOCK)) return false;
  const ancestorBlock = el.parentElement?.closest(SELECTOR_BLOCK);
  return !ancestorBlock;
}

function isRevealStaggerRoot(el: HTMLElement): boolean {
  if (!el.matches(SELECTOR_STAGGER)) return false;
  const ancestorStagger = el.parentElement?.closest(SELECTOR_STAGGER);
  return !ancestorStagger;
}

function isRevealRoot(el: HTMLElement): boolean {
  return isRevealTextRoot(el) || isRevealBlockRoot(el) || isRevealStaggerRoot(el);
}

function splitTextIntoWords(element: HTMLElement): HTMLElement[] {
  if (element.dataset.rvSplit === "1") {
    return Array.from(element.querySelectorAll<HTMLElement>(".rv-word"));
  }

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const t = node.textContent ?? "";
      if (!t.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (parent?.closest(".rv-line")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) {
    textNodes.push(n as Text);
  }

  for (const textNode of textNodes) {
    const raw = textNode.textContent ?? "";
    const parent = textNode.parentNode;
    if (!parent) continue;

    const parts = raw.split(/(\s+)/);
    const frag = document.createDocumentFragment();

    for (const part of parts) {
      if (part === "") continue;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        continue;
      }

      const line = document.createElement("span");
      line.className = "rv-line";
      line.style.display = "inline-block";
      line.style.overflow = "hidden";
      line.style.verticalAlign = "baseline";

      const word = document.createElement("span");
      word.className = "rv-word";
      word.textContent = part;
      line.appendChild(word);
      frag.appendChild(line);
    }

    parent.replaceChild(frag, textNode);
  }

  element.dataset.rvSplit = "1";
  return Array.from(element.querySelectorAll<HTMLElement>(".rv-word"));
}

function getStaggerTargets(container: HTMLElement): HTMLElement[] {
  const scoped = Array.from(container.querySelectorAll<HTMLElement>(":scope > [data-reveal-item]"));
  if (scoped.length) return scoped;
  return Array.from(container.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
}

function setWillChange(targets: Element[], props: string) {
  targets.forEach((t) => {
    if (t instanceof HTMLElement) t.style.willChange = props;
  });
}

function clearWillChange(targets: Element[]) {
  targets.forEach((t) => {
    if (t instanceof HTMLElement) t.style.removeProperty("will-change");
  });
}

function revealBlock(el: HTMLElement) {
  const targets = [el];
  setWillChange(targets, "opacity, transform, filter");
  return gsap.to(el, {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: DURATION_BLOCK,
    delay: DELAY,
    ease: EASE,
    onComplete: () => clearWillChange(targets),
  });
}

function revealStagger(container: HTMLElement) {
  const children = getStaggerTargets(container);
  if (!children.length) return gsap.timeline();
  setWillChange(children, "opacity, transform, filter");
  gsap.set(children, { opacity: 0, y: 22, filter: "blur(6px)" });
  return gsap.to(children, {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: DURATION_BLOCK,
    delay: DELAY,
    ease: EASE,
    stagger: STAGGER_CHILD,
    onComplete: () => clearWillChange(children),
  });
}

function revealText(el: HTMLElement) {
  const words = splitTextIntoWords(el);
  if (!words.length) return gsap.timeline();
  setWillChange(words, "opacity, transform, filter");
  gsap.set(words, { opacity: 0, y: 18, filter: "blur(6px)" });
  return gsap.to(words, {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: DURATION_WORD,
    delay: DELAY,
    ease: EASE,
    stagger: STAGGER_WORD,
    onComplete: () => clearWillChange(words),
  });
}

function collectRevealRootsFromNode(node: Node): HTMLElement[] {
  if (!(node instanceof HTMLElement)) return [];
  const candidates: HTMLElement[] = [];
  if (node.matches(SELECTOR_ANY)) candidates.push(node);
  candidates.push(...Array.from(node.querySelectorAll<HTMLElement>(SELECTOR_ANY)));
  return candidates.filter(isRevealRoot);
}

export function PageReveal() {
  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    const prepared = new WeakSet<HTMLElement>();
    const played = new WeakSet<HTMLElement>();

    const ctx = gsap.context(() => {
      const runReveal = (el: HTMLElement) => {
        if (played.has(el)) return;
        played.add(el);
        if (el.matches(SELECTOR_TEXT)) {
          revealText(el);
        } else if (el.matches(SELECTOR_STAGGER)) {
          revealStagger(el);
        } else if (el.matches(SELECTOR_BLOCK)) {
          revealBlock(el);
        }
      };

      const prepareTarget = (el: HTMLElement) => {
        if (prepared.has(el)) return;
        prepared.add(el);

        if (reduced) {
          if (el.matches(SELECTOR_TEXT)) {
            splitTextIntoWords(el);
            gsap.set(el.querySelectorAll(".rv-word"), { opacity: 1, y: 0, filter: "none" });
          } else if (el.matches(SELECTOR_BLOCK)) {
            gsap.set(el, { opacity: 1, y: 0, filter: "none" });
          } else if (el.matches(SELECTOR_STAGGER)) {
            getStaggerTargets(el).forEach((child) => gsap.set(child, { opacity: 1, y: 0, filter: "none" }));
          }
          return;
        }

        if (el.matches(SELECTOR_TEXT)) {
          splitTextIntoWords(el);
          const words = el.querySelectorAll<HTMLElement>(".rv-word");
          gsap.set(words, { opacity: 0, y: 18, filter: "blur(6px)" });
        } else if (el.matches(SELECTOR_BLOCK)) {
          gsap.set(el, { opacity: 0, y: 24, filter: "blur(8px)" });
        } else if (el.matches(SELECTOR_STAGGER)) {
          const children = getStaggerTargets(el);
          gsap.set(children, { opacity: 0, y: 22, filter: "blur(6px)" });
        }

        observer?.observe(el);
      };

      const registerRoots = (nodes: HTMLElement[]) => {
        nodes.forEach((el) => prepareTarget(el));
      };

      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          runReveal(target);
          obs.unobserve(target);
        });
      }, IO_OPTIONS);

      registerRoots(collectRevealRootsFromNode(document.body));

      mutationObserver = new MutationObserver((mutations) => {
        const toAdd = new Set<HTMLElement>();
        mutations.forEach((m) => {
          m.addedNodes.forEach((node) => {
            collectRevealRootsFromNode(node).forEach((el) => toAdd.add(el));
          });
        });
        registerRoots(Array.from(toAdd));
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    });

    return () => {
      mutationObserver?.disconnect();
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  return null;
}
