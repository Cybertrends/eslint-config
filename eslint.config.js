import js from '@eslint/js'
import ts from 'typescript-eslint'
import baseConfig from './src/base.js'

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  baseConfig,
]
