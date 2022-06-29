import { defineNuxtConfig } from "nuxt";
import transformerDirective from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "nuxt-directus"],
  unocss: {
    uno: true,
    transformers: [transformerDirective(), transformerVariantGroup()],
  },
  directus: {
    url: "https://gubs0ke4.directus.app",
  },
});
