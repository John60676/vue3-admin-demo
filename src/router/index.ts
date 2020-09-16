import { createRouter, createWebHashHistory } from 'vue-router';
import constantRoutes from './constantRoutes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
