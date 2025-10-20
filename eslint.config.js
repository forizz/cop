// @ts-check
import eslintReact from "@eslint-react/eslint-plugin";
import eslintJs from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["node_modules/**", ".react-router/**", ".git/**", "build/**"],
  },
  eslintJs.configs.recommended,
  eslintReact.configs.recommended,
  reactHooks.configs.flat["recommended"],
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      // Use TypeScript ESLint parser for TypeScript files
      parser: tseslint.parser,
      parserOptions: {
        // Enable project service for better TypeScript integration
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    // Custom rule overrides (modify rule levels or disable rules)
    rules: {
      "@eslint-react/no-missing-key": "error",
    },
  },
]);
