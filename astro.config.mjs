// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL pública: la usan las URLs canónicas, las de Open Graph y el sitemap.
  site: 'https://aldorodriguez.com.ar',
  // Una sola forma por página (/proyectos/kivo/) para que Google no vea duplicados.
  trailingSlash: 'always',
  // CSS dentro del HTML: el navegador pinta apenas llega la página, sin pedir otro archivo.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  vite: {
    plugins: [tailwindcss()]
  }
});
