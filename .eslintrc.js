module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': ['error'],
  },
  plugins: ['prettier'],
};
