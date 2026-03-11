// eslint.config.js
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["node_modules", "dist", "build", ".turbo", "coverage", "docs"],
  },

  js.configs.recommended,

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
      import: importPlugin,
    },

    rules: {
      ...tsPlugin.configs.recommended.rules,

      "import/extensions": [
        "error",
        "ignorePackages",
        { ts: "always", js: "always" },
      ],

      "import/no-unresolved": "off",
    },

    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".ts"],
        },
      },
    },
  },
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    plugins: {
      import: importPlugin,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "import/extensions": "off",
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".ts", ".js"],
        },
      },
    },
  },
  prettier,
];
