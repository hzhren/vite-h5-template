/*
 * @Author: hzhren
 * @Date: 2021-08-03 11:46:30
 * @Description: 路由信息
 * @LastEditors: your name
 * @LastEditTime: 2021-08-03 16:10:55
 */
export const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: "/dashboard",
    name:'dashboard',
    meta: { title: "dashboard" },
    component: () => import("../views/dashboard.vue"),
  },
//   { path: "/:path(.*)", component: () => import("./views/NotFound.vue") },
];
