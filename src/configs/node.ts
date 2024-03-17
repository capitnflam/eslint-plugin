import { type ESLintConfig } from '../types'

export const node: ESLintConfig = {
  plugins: ['@flaminc'],
  extends: ['plugin:n/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'n/no-missing-import': 'off',
      },
    },
  ],
}
