import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  resolve: {
    alias: [
      { find: /^@\/lib\/waitlist-store$/, replacement: fileURLToPath(new URL("./src/lib/waitlist-store.d1.ts", import.meta.url)) },
      { find: /^@\/lib\/rate-limit$/, replacement: fileURLToPath(new URL("./src/lib/rate-limit.d1.ts", import.meta.url)) },
    ],
  },
  plugins: [
    vinext(),
    cloudflare({ viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] } }),
  ],
});
