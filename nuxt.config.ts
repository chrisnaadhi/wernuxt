import { defineNuxtConfig } from "nuxt";
import transformerDirective from "@unocss/transformer-directives";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  unocss: {
    uno: true,
    transformers: [transformerDirective()],
  },
});
