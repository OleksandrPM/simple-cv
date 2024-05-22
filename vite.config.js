// vite.config.js
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  base: "/simple-cv",
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "./src/partials"),
        resolve(__dirname, "./src/partials/components"),
      ],
    }),
  ],
};
