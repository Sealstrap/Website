// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    build: {
        format: "file",
    },
    site: "https://www.sealstrap.app",
    integrations: [solidJs(), sitemap(), compress()]
});