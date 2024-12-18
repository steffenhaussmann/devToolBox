const angularEslint = require('@angular-eslint/eslint-plugin');
const angularTemplateEslint = require('@angular-eslint/eslint-plugin-template');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier'); // <-- NEU
const prettierConfig = require('eslint-config-prettier'); // <-- NEU
module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@angular-eslint': angularEslint,
      '@typescript-eslint': typescriptEslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...angularEslint.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'warn',
    },
    ignores: ['coverage/**'],
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: require('@angular-eslint/template-parser'),
    },
    plugins: {
      '@angular-eslint/template': angularTemplateEslint,
    },
    rules: {
      ...angularTemplateEslint.configs.recommended.rules,
    },
  },
  {
    // Prettier deaktiviert überschreibende ESLint-Regeln
    files: ['**/*.ts', '**/*.js'], // <-- NEU: Gilt auch für JS-Dateien
    rules: {
      ...prettierConfig.rules, // <-- NEU: Konflikte mit Prettier deaktivieren
    },
  },
];
