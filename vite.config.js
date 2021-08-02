/*
 * @Author: hzhren
 * @Date: 2021-08-02 19:48:26
 * @Description: 进入下一个阶段
 * @LastEditors: your name
 * @LastEditTime: 2021-08-02 19:51:25
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS()]
})
