import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images and sitemap
  site: process.env.GITHUB_ACTIONS
      ? 'https://kreazyme.github.io'
      : 'http://localhost:4321/',
  base: process.env.GITHUB_ACTIONS ? '/portfolio-astro' : '/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
