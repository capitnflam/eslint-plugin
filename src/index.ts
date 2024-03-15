import { type ESLint } from 'eslint'

import { name, version } from '../package.json'

import { react } from './configs/react'
import { recommended } from './configs/recommended'

const plugin: ESLint.Plugin = {
  configs: {
    react,
    recommended,
  },
  meta: {
    name,
    version,
  },
}

module.exports = plugin
