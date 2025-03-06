import { type ESLintConfig } from '../types'

export const react: ESLintConfig = {
  plugins: ['@flaminc'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:xss/recommended',
    'plugin:no-unsanitized/recommended-legacy',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prefer-stateless-function': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prefer-read-only-props': 'error',
  },
}
