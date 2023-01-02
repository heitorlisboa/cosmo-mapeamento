const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      primary: ['Gotham Rounded', ...defaultTheme.fontFamily.sans],
      secondary: ['Helvetica', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          400: 'hsl(244, 92%, 75%)',
          700: 'hsl(258, 100%, 41%)',
          800: 'hsl(259, 89%, 21%)',
          900: 'hsl(259, 90%, 15%)',
        },
      },
      fontSize: {
        'title-sm': ['1.3rem', { lineHeight: '1.2', letterSpacing: '-0.05em' }],
        'title-md': [
          'clamp(2rem, 6vw + 1rem, 4rem)',
          { lineHeight: '1', letterSpacing: '-0.05em' },
        ],
        'title-lg': [
          'clamp(2.25rem, 8vw + 1rem, 5.5rem)',
          { lineHeight: '1', letterSpacing: '-0.05em' },
        ],
      },
      keyframes: {
        /** @type {Record<string, Partial<CSSStyleDeclaration>>} */
        'fade-in-to-left': {
          from: {
            opacity: '0',
            transform: 'translateX(150px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-to-right': {
          from: {
            opacity: '0',
            transform: 'translateX(-150px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('where', ':where(&)');
      addVariant('hocus', ['&:hover', '&:focus-visible']);
      addVariant('group-hocus', ['.group:hover &', '.group:focus-visible &']);
    }),
  ],
};
