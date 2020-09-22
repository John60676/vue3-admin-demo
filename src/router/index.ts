import { createRouter, createWebHashHistory } from 'vue-router';
import constantRoutes from './constantRoutes';
import { beforeEach } from './navigationGuards';
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

// import beforeEach guards
router.beforeEach(beforeEach);

export default router;
