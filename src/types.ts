import { type ESLint } from 'eslint'

import { RecordValueType } from './types-utils'

export type ESLintConfig = RecordValueType<ESLint.Plugin['configs']>
