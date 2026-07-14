export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export const siteFaqCategories: FaqCategory[] = [
  {
    title: "About the company",
    items: [
      {
        question: "What is SIX-IN-ONE Group?",
        answer:
          "SIX-IN-ONE Group is a talent, image, and brand development company operating across entertainment and publishing. We work with artists, athletes, and rights holders to build careers with long-term commercial value — through development, strategic positioning, and disciplined execution.",
      },
      {
        question: "Why is the company called SIX-IN-ONE?",
        answer:
          "The name reflects our founding philosophy: one organization, multiple disciplines, singular excellence. Our founder operates across music, sports, film, media, the arts, and publishing — functioning as A&R, talent manager, executive producer, and rights strategist under one roof. Six disciplines. One engine.",
      },
      {
        question: "Where is SIX-IN-ONE Group based?",
        answer:
          "We operate out of two offices — Lagos, Nigeria (54B Adeniyi Jones, Ikeja) and Amsterdam, Netherlands. Our work spans Africa, Europe, and global markets.",
      },
      {
        question: "How long has SIX-IN-ONE Group been operating?",
        answer:
          "The group has over 12 years of strategy, rights management, and execution experience. SIX-IN-ONE Entertainment Limited was formally incorporated in Nigeria in August 2022 under the Companies and Allied Matters Act, 2020.",
      },
      {
        question: "Who founded SIX-IN-ONE Group?",
        answer:
          "SIX-IN-ONE Group was founded by Abayomi Noah Ogunmefun, a music and entertainment executive with over 12 years of industry experience across talent development, A&R, publishing, and sports management.",
      },
    ],
  },
  {
    title: "Our divisions",
    items: [
      {
        question: "What are the two main divisions of SIX-IN-ONE Group?",
        answer:
          "The group operates through two divisions:\n\nSIX-IN-ONE Entertainment — talent development, representation, and growth across music and sports.\n\nSIX-IN-ONE Publishing — co-publishing, rights administration, licensing strategy, and catalog development for songwriters, composers, and rights holders.",
      },
      {
        question: "What does SIX-IN-ONE Entertainment do specifically?",
        answer:
          "The Entertainment division develops and represents artists and athletes through three core service areas:\n\nIndependent Artists — A&R, development, and music career strategy.\n\nSports Management — athlete representation, image development, and commercial partnerships.\n\nLive Events — concert and tour planning, event production, and live experience management.",
      },
      {
        question: "What does SIX-IN-ONE Publishing do?",
        answer:
          "The Publishing division handles co-publishing arrangements, rights structure, sync licensing, and catalog strategy for creators. Our track record includes sync placements with EA Games (Apex Legends), the Basketball Africa League, and feature film productions. We work with rights administered through Sony Music Publishing, PRS, and ASCAP.",
      },
    ],
  },
  {
    title: "Talent development",
    items: [
      {
        question: "What is the SIX-IN-ONE talent development model?",
        answer:
          "We use a proprietary three-step development module applied to every artist and athlete we work with:\n\nArtistry & Skills Development — building genuine craft and physical capability.\n\nImage Creation — defining a distinct, authentic public identity.\n\nBrand Building — monetizing that identity through commercial partnerships, licensing, and long-term positioning.\n\nThis sequence is non-negotiable. We do not skip steps or rush talent to market before they are ready.",
      },
      {
        question: "What types of talent does SIX-IN-ONE develop?",
        answer:
          "We develop three categories of talent:\n\nCreative Artists — musicians, composers, songwriters.\n\nPerforming Artists — entertainers, on-air personalities, stage performers.\n\nAthletes — professional and emerging sports talent across disciplines.",
      },
      {
        question: 'What does "craft before commerce" mean in practice?',
        answer:
          "It means we do not commercialize talent prematurely. Development timelines are driven by creative and performance readiness — not market pressure. A talent must be genuinely ready before we move to brand-building and commercial deployment. This protects both the talent's career and the long-term integrity of what we build.",
      },
      {
        question: "Does SIX-IN-ONE sign artists to a record label?",
        answer:
          "SIX-IN-ONE is not a traditional record label. We function as a development and management company. We work with label partners — including major and independent labels — to place and support our artists, while ensuring those artists retain meaningful ownership of their rights and career trajectory.",
      },
    ],
  },
  {
    title: "Publishing & licensing",
    items: [
      {
        question: "What types of licensing does SIX-IN-ONE Publishing handle?",
        answer:
          "We handle a full range of licensing across:\n\nMaster Use licenses\n\nCo-publishing and sub-publishing deals\n\nFilm and TV synchronization\n\nVideo game sync placements\n\nCorporate sponsorships and brand collaborations\n\nDigital and streaming distribution",
      },
      {
        question: "Can I submit my music or catalog for publishing consideration?",
        answer:
          "Yes. If you are a songwriter, composer, or rights holder looking for publishing support, you can submit your work via the contact form at /contact. Our team reviews all submissions.",
      },
      {
        question: "Does SIX-IN-ONE Publishing help artists retain ownership of their work?",
        answer:
          "Ownership is a core value of this company. We structure co-publishing arrangements and licensing deals to ensure creators retain meaningful rights over their catalog. We do not build careers that create dependency — we build careers that create independence.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        question: "How do I get in touch with SIX-IN-ONE Group?",
        answer:
          "You can reach us at hello@sixinonegroup.com or via the contact form on our website at /contact.",
      },
      {
        question: "How does SIX-IN-ONE decide who to work with?",
        answer:
          "We are selective by design. We look for artists and athletes with genuine craft, clear identity potential, and the discipline to commit to a structured development process. We do not take on talent for short-term gain — every signing is evaluated on long-term career potential.",
      },
      {
        question: "Does SIX-IN-ONE work with international talent?",
        answer:
          "Yes. While we are rooted in the African entertainment industry, our operations, partnerships, and licensing reach are global. We have placed work in Europe, North America, and across international media platforms.",
      },
      {
        question: "What brands and platforms has SIX-IN-ONE worked with?",
        answer:
          "Our affiliations include Red Bull, Hennessy, Chivas Regal, Universal Music Group, The Orchard, Sony Music Publishing, EMPIRE, Sprite, Vita Foam, Tokyo James, Starstruck Management, Tailored Records Global, The Plug Talent Agency, Balmoral Promotions, and The Art Cartel.",
      },
      {
        question: "Does SIX-IN-ONE do consulting for other businesses in the entertainment industry?",
        answer:
          "Yes. Beyond direct talent representation, the group provides strategic consulting for entertainment and media businesses — covering organizational structure, rights strategy, market positioning, and business development.",
      },
    ],
  },
];
