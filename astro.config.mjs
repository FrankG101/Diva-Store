import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  server: {
    allowedHosts: ["486c-151-77-113-59.ngrok-free.app"],
  },
});
