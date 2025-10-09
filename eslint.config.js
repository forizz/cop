// @ts-check
import eslintReact from "@eslint-react/eslint-plugin";
import eslintJs from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslintJs.configs.recommended,
  eslintReact.configs.recommended,
  reactHooks.configs.flat["recommended"],
  [
    ...tseslint.configs.recommended,
    {
      files: ["**/*.ts", "**/*.tsx"],
      ignores: ["node_modules/**", ".react-router/**", ".git/**", "build/**"],

      // Extend recommended rule sets from:
      // 1. ESLint JS's recommended rules
      // 2. TypeScript ESLint recommended rules
      // 3. ESLint React's recommended-typescript rules
      // extends: [
      //   eslintJs.configs.recommended,
      //   tseslint.configs.recommended,
      //   eslintReact.configs["recommended-typescript"],
      //   reactHooks.configs["recommended-latest"],
      // ],

      // Configure language/parsing options
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
  ],
);
