import { PermissionDispatchAction } from '@/types/store/modules/permission';
import { PERMISSION_ADDROUTES } from './actionsType';

export const addRoutes: PermissionDispatchAction['addRoutes'] = asyncRoutes => {
  return {
    type: PERMISSION_ADDROUTES,
    asyncRoutes: asyncRoutes,
  };
};
