// eslint.config.js
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["node_modules", "dist", "build", ".turbo", "coverage"],
  },
  js.configs.recommended, // replaces "eslint:recommended"

  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
    },

    rules: {
      ...tsPlugin.configs.recommended.rules, // base TS rules
    },
  },

  prettier, // replaces "extends: prettier"

  {
    files: ["**/*.ts"],
    plugins: {
      import: importPlugin,
    },
    rules: {
      // require .js extension for relative imports
      "import/extensions": [
        "error",
        "ignorePackages",
        { ts: "always", js: "always" },
      ],
      // optional: let eslint fix missing .js automatically
      "import/no-unresolved": "off",
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
];
