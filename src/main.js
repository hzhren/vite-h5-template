/*
 * @Author: hzhren
 * @Date: 2021-08-02 19:48:26
 * @Description: mian.js
 * @LastEditors: your name
 * @LastEditTime: 2021-08-27 01:58:07
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import {
  NavBar,
  List,
  PullRefresh,
  Cell,
  DropdownMenu,
  DropdownItem,
  Toast,
  Search,
  Uploader,
  Dialog
} from 'vant'
import { routes } from './router/index'
import App from './App.vue'
import 'virtual:windi.css'
import './assets/style/root.less'
const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App)
  .use(router)
  .use(NavBar)
  .use(Cell)
  .use(List)
  .use(PullRefresh)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Toast)
  .use(Search)
  .use(Uploader)
  .use(Dialog)
  .mount('#app')
