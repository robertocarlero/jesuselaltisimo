// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import playformCompress from "@playform/compress";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://jesuselaltisimo.org",

  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap(),
    robotsTxt(),
    playformCompress(),
  ],

  adapter: netlify({
    edgeMiddleware: true,
    cacheOnDemandPages: true,
    imageCDN: true,
  }),
});
