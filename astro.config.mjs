import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://kubeletto.com',
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    tailwind(),
    sitemap(),
  ],
  prefetch: true,
  vite: {
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
});
