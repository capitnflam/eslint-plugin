import { type ESLintConfig } from '../types'

export const node: ESLintConfig = {
  plugins: ['@flaminc'],
  extends: ['plugin:n/recommended'],
}
