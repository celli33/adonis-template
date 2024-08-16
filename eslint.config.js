// @ts-check
import { nodecfdiConfig } from '@nodecfdi/eslint-config';
import { defineFlatConfig } from 'eslint-define-config';
// my other imports...

export default defineFlatConfig([
  ...nodecfdiConfig({
    adonisjs: true,
    ignores: {
      additional: ['ace.js', 'ecosystem.config.cjs'],
    },
  }),
  // my other configurations
  {
    files: ['**/tests/**/*.ts '],
    rules: {
      '@typescript-eslint/unbound-method': 'off',
    },
  },
]);
