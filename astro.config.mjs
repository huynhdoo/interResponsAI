import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercelEdge from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  site: "https://inter-respons-ai.vercel.app",
  output: "server",
  adapter: vercelEdge(),
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});