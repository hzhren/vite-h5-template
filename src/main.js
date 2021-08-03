/*
 * @Author: hzhren
 * @Date: 2021-08-02 19:48:26
 * @Description: 进入下一个阶段
 * @LastEditors: your name
 * @LastEditTime: 2021-08-03 17:30:11
 */
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import {
  NavBar,
  List,
  PullRefresh,
  Cell,
  DropdownMenu,
  DropdownItem,
} from "vant";
import { routes } from "./router/index";
import App from "./App.vue";
import "virtual:windi.css";
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App)
  .use(router)
  .use(NavBar)
  .use(Cell)
  .use(List)
  .use(PullRefresh)
  .use(DropdownMenu)
  .use(DropdownItem)
  .mount("#app");
