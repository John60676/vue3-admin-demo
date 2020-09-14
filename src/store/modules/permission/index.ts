import { PermissionStateType, PermissionModule } from '@/types/store/modules/permission';
import mutations from './mutations';
import actions from './actions';

const state: PermissionStateType = {
  routes: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
} as PermissionModule;
