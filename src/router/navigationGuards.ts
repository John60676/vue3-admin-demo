import { NavigationGuard } from 'vue-router';
import { ROUTE_LOGIN } from './constantRoutes';

export const beforeEach: NavigationGuard = (to, from, next) => {
  if (to.name !== ROUTE_LOGIN) {
    const loginStatus = window.localStorage.getItem(ROUTE_LOGIN);
    if (!loginStatus || Number(loginStatus) + 24 * 360000 <= new Date().getTime()) {
      next({ name: ROUTE_LOGIN });
      return;
    }
  }
  next();
};
