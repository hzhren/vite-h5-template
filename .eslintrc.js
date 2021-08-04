/*
 * @Author: hzhren
 * @Date: 2021-08-04 11:14:40
 * @Description: 进入下一个阶段
 * @LastEditors: your name
 * @LastEditTime: 2021-08-04 14:55:02
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'space-before-function-paren': 0
  }
}
