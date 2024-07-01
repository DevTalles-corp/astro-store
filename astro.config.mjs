import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import db from "@astrojs/db";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db(), auth()],
  output: "server",
  adapter: netlify(),
  experimental: {
    actions: true
  }
});