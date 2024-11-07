import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import auth from "auth-astro";

import react from "@astrojs/react";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig( {
  integrations: [ tailwind(), auth(), react(), db() ],
  output: "server",
  adapter: netlify(),
} );