/*
 * @Author: hzhren
 * @Date: 2021-08-03 11:46:30
 * @Description: 路由信息
 * @LastEditors: your name
 * @LastEditTime: 2021-08-09 15:45:08
 */
export const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { title: '资料审批' },
    component: () => import('../views/dashboard.vue')
  },
  {
    path: '/customerAudit',
    name: 'customerAudit',
    meta: { title: '资料修改审批' },
    component: () => import('../views/customerAudit.vue')
  }
//   { path: "/:path(.*)", component: () => import("./views/NotFound.vue") },
]
