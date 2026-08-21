// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://www.cosmomapeamento.com.br/',
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Funnel Display',
      cssVariable: '--font-funnel',
      weights: [300, 400, 500, 600, 700, 800],
    },
  ],
});
