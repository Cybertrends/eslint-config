export default {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'brace-style': ['error', '1tbs', {allowSingleLine: false}],
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'always'],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'comma-spacing': ['error', {before: false, after: true}],
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'keyword-spacing': ['error', {before: true, after: true}],
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: '*', next: 'block-like'},
    ],
  },
}
