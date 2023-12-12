module.exports = {
  plugins: ["@stylexjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@stylexjs/valid-styles": ["error"],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
};
