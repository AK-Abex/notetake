import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import VueRouter from "unplugin-vue-router/vite";

import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ion-icon"),
        },
      },
    }),
    AutoImport({
      dirs: [],
      imports: ["vue", "vue-router", "@vueuse/core"],
      vueTemplate: true,
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [
        (name) => {
          if (name.startsWith("Lucide")) {
            const iconName = name.slice(6); // Remove "Lucide" prefix
            return {
              importName: iconName,
              path: "lucide-vue-next",
            };
          }
        },
      ],
    }),
    VueRouter({}),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
