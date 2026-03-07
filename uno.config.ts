import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      primary: '#0d59f2',
      'background-light': '#f5f6f8',
      'background-dark': '#101622',
      'brutal-black': '#111111',
      'brutal-white': '#ffffff',
    },
    fontFamily: {
      display: ['Space Grotesk', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
    },
    boxShadow: {
      brutal: '4px 4px 0px 0px #111111',
      'brutal-lg': '8px 8px 0px 0px #111111',
      'brutal-dark': '4px 4px 0px 0px #ffffff',
      'brutal-lg-dark': '8px 8px 0px 0px #ffffff',
    },
  },
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
});
