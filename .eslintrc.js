module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint"],

  extends: ["eslint:recommended", "prettier"],

  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
