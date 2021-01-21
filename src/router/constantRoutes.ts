import Layout from '@/components/Layout';
import { RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string; // 菜单标题
    icon?: string; // 菜单的icon
    noRedirect?: boolean; // 面包屑是否不跳转
    hidden?: boolean; // 菜单是否不显示
    tagFixed?: boolean; // 是否固定在tab
  }
}

export const ROUTE_HOME = 'home';
export const ROUTE_LOGIN = 'login';

const constantRoutes: RouteRecordRaw[] = [
  {
    name: ROUTE_LOGIN,
    path: '/login',
    component: () => import('@/pages/login'),
    meta: {
      title: '登录',
      icon: 'icon-xihuan',
    },
  },
  {
    name: ROUTE_HOME,
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        name: 'home/index',
        path: 'index',
        component: () => import('@/pages/home'),
        meta: {
          title: '首页',
          icon: 'icon-yongyao',
          tagFixed: true,
        },
      },
    ],
  },
  {
    path: '/testPage',
    component: Layout,
    redirect: '/testPage/input',
    name: 'testPage',
    meta: {
      title: '父级页面',
      icon: 'icon-xihuan',
    },
    children: [
      {
        name: 'testPage/input',
        path: 'input:lang(.*)',
        component: () => import('@/pages/testPage'),
        meta: {
          title: '测试滚动',
          icon: 'icon-xihuan',
        },
      },
      {
        name: 'testPage/input-number',
        path: 'input-number:lang(.*)',
        component: () => import('@/pages/testPage2'),
        meta: {
          title: '测试页面',
          icon: 'icon-xihuan',
        },
      },
    ],
  },
  {
    path: '/error',
    component: Layout,
    name: 'errorPage',
    redirect: '/error/404',
    children: [
      {
        path: '404',
        component: () => import('@/pages/error404'),
        name: 'errorPage/404',
        meta: { title: '404', hidden: true, noRedirect: true },
      },
    ],
  },
  {
    name: 'error',
    path: '/:catchAll(.*)',
    redirect: '/error/404',
    meta: {
      hidden: true,
    },
  },
];

export default constantRoutes;
