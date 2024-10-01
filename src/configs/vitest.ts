import { type ESLintConfig } from '../types'

export const vitest: ESLintConfig = {
  plugins: ['@flaminc'],
  overrides: [
    {
      files: ['**/*.spec.ts'],
      plugins: ['vitest'],
      extends: ['plugin:vitest/legacy-recommended'],
      rules: {
        'vitest/consistent-test-it': [
          'error',
          { fn: 'it', withinDescribe: 'it' },
        ],
        'vitest/no-alias-methods': 'error',
        'vitest/no-conditional-expect': 'error',
        'vitest/no-conditional-in-test': 'error',
        'vitest/no-conditional-tests': 'error',
        'vitest/no-disabled-tests': 'warn',
        'vitest/no-focused-tests': 'error',
        'vitest/no-hooks': 'off',
        'vitest/no-standalone-expect': 'error',
        'vitest/prefer-each': 'error',
        'vitest/prefer-comparison-matcher': 'error',
        'vitest/prefer-equality-matcher': 'error',
        'vitest/prefer-expect-resolves': 'error',
        'vitest/prefer-hooks-in-order': 'error',
        'vitest/prefer-hooks-on-top': 'error',
        'vitest/prefer-lowercase-title': 'error',
        'vitest/prefer-mock-promise-shorthand': 'error',
        'vitest/prefer-spy-on': 'error',
        'vitest/prefer-strict-equal': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/prefer-todo': 'error',
        'vitest/require-hook': 'error',
        'vitest/require-top-level-describe': 'error',
      },
    },
  ],
}
