import emailjs from "@emailjs/browser";

export const EMAILJS_PUBLIC_KEY = "badSkcwRaS2gFtmUL";
export const EMAILJS_SERVICE_ID = "service_rs21gvo";
export const EMAILJS_AUTO_REPLY_TEMPLATE_ID = "template_rszt5j3";

export const EMAILJS_BRAND = {
  footerLogo: "https://ik.imagekit.io/ttibelkqm/Portfolio/6in1/logoGroup.png",
  headerLogo: "https://ik.imagekit.io/ttibelkqm/Portfolio/6in1/iconG.png",
  siteUrl: "https://sixinonegroup.com",
  companyName: "SIX-IN-ONE Group",
  supportEmail: "hello@sixinonegroup.com",
} as const;

export type ContactAutoReplyParams = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

let emailjsInitialized = false;

function ensureEmailJsInit() {
  if (!emailjsInitialized) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    emailjsInitialized = true;
  }
}

export async function sendContactAutoReply(params: ContactAutoReplyParams) {
  ensureEmailJsInit();

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTO_REPLY_TEMPLATE_ID, {
    name: params.name,
    email: params.email,
    title: params.topic,
    message: params.message,
    company_name: EMAILJS_BRAND.companyName,
    support_email: EMAILJS_BRAND.supportEmail,
    website_url: EMAILJS_BRAND.siteUrl,
    header_logo: EMAILJS_BRAND.headerLogo,
    footer_logo: EMAILJS_BRAND.footerLogo,
  });
}
