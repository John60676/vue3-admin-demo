import { PermissionActionTree } from '@/types/store/modules/permission';
import { ADD_ROUTES } from './mutationType';

const actions: PermissionActionTree = {
  addRoutes({ commit }, payload) {
    commit(ADD_ROUTES, { asyncRoutes: payload.asyncRoutes });
  },
};

export default actions;
