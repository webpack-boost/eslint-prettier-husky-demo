module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    amd: true
  },
  extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    semi: [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true, // 允许在单引号字符串中插入双引号及反引号
        allowTemplateLiterals: true // 允许使用模板字符串
      }
    ],
    'space-before-function-paren': 'off' // 函数与括号之间加上空格
  }
}
