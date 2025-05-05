import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import rocketseatEslintConfig from '@rocketseat/eslint-config/node.mjs'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,spec.ts}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-useless-constructor': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@stylistic/max-len:': 'error',
    },
    languageOptions: { globals: globals.vitest },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,spec.ts}'],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  ...rocketseatEslintConfig,
])
