import reactNativeEslintConfig from '@react-native/eslint-config';
import eslintRecommended from 'eslint/conf/eslint-recommended';
import eslintReactRecommended from 'eslint-plugin-react/configs/recommended.js';
import eslintReactHooksRecommended from 'eslint-plugin-react-hooks/configs/recommended.js';
import typescriptEslintRecommended from '@typescript-eslint/eslint-plugin/configs/recommended.js';
import typescriptEslintRules from '@typescript-eslint/eslint-plugin/configs/recommended-requiring-type-checking.js';
import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
    ],
  },
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      react: eslintReactRecommended,
       'react-hooks': eslintReactHooksRecommended,
       jest: jestPlugin,
       '@typescript-eslint': typescriptEslintRecommended,
    },
    rules: {
       ...eslintRecommended.rules,
       ...reactNativeEslintConfig.rules,
       ...eslintReactRecommended.rules,
       ...eslintReactHooksRecommended.rules,
       ...typescriptEslintRecommended.rules,
       ...typescriptEslintRules.rules,
      'no-unused-vars': 'warn',
      'no-extra-semi': 'warn',
      'no-undef': 'error',
    },
    environment: {
      'jest/globals': true,
      browser: true,
      es2021: true,
    },
  },
];
