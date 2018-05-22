module.exports = {
  extends: 'standard',
  env: {
    node: true
  },
  rules: {
    'camelcase': 0,
    'no-var': 2,
    'no-trailing-spaces': 0,
    'no-multi-str': 0
  },
  globals: {
    '_require': true,
    '_config': true,
    '_isDev': true,
    'isDev': true,
  },
  parserOptions: {
    'ecmaVersion': 2017
  },
}
