const options = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base',
  'airbnb-typescript/base',
  'prettier',],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true
  },
  rules: {
    'prefer-destructuring': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'class-methods-use-this': 'off',
    'no-console': 0
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
}

module.exports = options
