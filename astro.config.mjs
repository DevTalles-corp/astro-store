import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db()],
  output: "server",
  adapter: netlify(),
  experimental: {
    actions: true
  }
});