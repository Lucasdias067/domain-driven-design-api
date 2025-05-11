import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import rocketseatEslintConfig from '@rocketseat/eslint-config/node.mjs'

export default [
  ...tseslint.configs.recommended,
  ...rocketseatEslintConfig,
  {
    files: ['**/*.{js,mjs,cjs,ts,spec.ts}'],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.vitest,
        ...globals.node,
      },
    },
    rules: {
      'no-useless-constructor': 'off',
      'no-unused-vars': 'off',
      'no-new': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@stylistic/max-len': 0,
      '@typescript-eslint/no-empty-object-type': 0,
    },
  },
]
