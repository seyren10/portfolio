// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

import lenis from "astro-lenis";

import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://seyren10.github.io',
  base: '/portfolio',
  integrations: [react(), lenis(), robotsTxt(), sitemap()],
})