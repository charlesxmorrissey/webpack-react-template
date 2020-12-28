'use strict'

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'react-hooks', 'prettier', 'import'],

  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  globals: {
    expect: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
