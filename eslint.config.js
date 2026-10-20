import js from "@eslint/js";
import globals from "globals";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended, eslintReact.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      sourceType: "module",
    },
  },
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite(),
]);
