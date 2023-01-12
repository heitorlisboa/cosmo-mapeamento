/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAILJS_API_KEY: string;
  readonly PUBLIC_EMAILJS_TEMPLATE: string;
  readonly PUBLIC_EMAILJS_SERVICE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
