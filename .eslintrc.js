module.exports = {
  // Extends ESLint configurations to apply a set of standard rules
  extends: [
    "eslint:recommended", // Basic ESLint rules
    "plugin:react/recommended", // React specific linting rules
    "plugin:@typescript-eslint/recommended", // TypeScript linting rules
    "prettier" // Integrates Prettier to enforce code formatting
  ],
  parser: "@typescript-eslint/parser", // Using TypeScript parser
  plugins: [
    "react", // React plugin
    "@typescript-eslint", // TypeScript plugin
    "prettier" // Prettier plugin to catch formatting issues
  ],
  parserOptions: {
    ecmaVersion: 2020, // Supports ECMAScript 2020 syntax
    sourceType: "module", // Enable ES module support
    ecmaFeatures: {
      jsx: true // Support JSX syntax
    }
  },
  rules: {
    // Custom ESLint rules
    "react/prop-types": "off", // Disable PropTypes validation for TypeScript projects
    "prettier/prettier": ["error", { "endOfLine": "auto" }], // Enforce Prettier formatting
    "@typescript-eslint/explicit-module-boundary-types": "off", // Optional rule, turns off enforcing return types for functions
    "@typescript-eslint/no-explicit-any": "warn", // Warn against usage of `any` type
    "@typescript-eslint/ban-ts-comment": "warn" // Warn against `@ts-ignore` usage
  },
  settings: {
    react: {
      version: "detect" // Automatically detect the version of React in use
    }
  },
  ignorePatterns: ["node_modules/"], // Exclude node_modules from linting
  env: {
    browser: true, // Browser global variables
    es2021: true, // Enable ES2021 features
    node: true // Node.js global variables
  }
};