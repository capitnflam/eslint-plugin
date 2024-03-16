import { type ESLint } from 'eslint'

import { name, version } from '../package.json'

import { node } from './configs/node'
import { react } from './configs/react'
import { recommended } from './configs/recommended'

const plugin: ESLint.Plugin = {
  configs: {
    node,
    react,
    recommended,
  },
  meta: {
    name,
    version,
  },
}

module.exports = plugin
