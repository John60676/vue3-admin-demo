import { PermissionMutationsTree } from '@/types/store/modules/permission';
import { ADD_ROUTES } from './mutationType';
import constantRoutes from '@/router/constantRoutes';

const mutations: PermissionMutationsTree = {
  [ADD_ROUTES]: (state, payload) => {
    state.routes = [...constantRoutes, ...payload.asyncRoutes];
  },
};

export default mutations;
