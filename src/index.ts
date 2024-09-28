import { type ESLint } from 'eslint'

import { name, version } from '../package.json'

import { node } from './configs/node'
import { react } from './configs/react'
import { recommended } from './configs/recommended'
import { vitest } from './configs/vitest'

const plugin: ESLint.Plugin = {
  configs: {
    node,
    react,
    recommended,
    vitest,
  },
  meta: {
    name,
    version,
  },
  rules: {},
}

module.exports = plugin
