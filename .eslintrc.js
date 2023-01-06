module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    amd: true
  },
  extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
  plugins: ['prettier', 'json', 'html', 'markdown'],
  overrides: [
    {
      // 2. Enable the Markdown processor for all .md files.
      files: ['**/*.md'],
      processor: 'markdown/markdown'
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-var': 2,
    'prefer-const': 0,
    semi: [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true, // 允许在单引号字符串中插入双引号及反引号
        allowTemplateLiterals: true // 允许使用模板字符串
      }
    ],
    'space-before-function-paren': ['off'], // 函数与括号之间加上空格
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }]
  }
}
