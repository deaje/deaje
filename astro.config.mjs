// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in Vercel (Project → Settings → Environment Variables) once the
// domain is bought, e.g. https://daniahmad.com. It drives canonical URLs, the
// sitemap, RSS links and Open Graph tags.
const site = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'rose-pine-dawn' },
  },
  build: { inlineStylesheets: 'auto' },
});
