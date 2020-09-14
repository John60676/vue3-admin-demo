import { MutationTree, ActionTree, Module } from 'vuex';

import { PERMISSION_ADDROUTES } from '@/store/modules/permission/actionsType';
import { ADD_ROUTES } from '@/store/modules/permission/mutationType';
import { RootStoreType, CustomActionStore } from '@/types/store';
import { RouteRecordRaw } from 'vue-router';

type GetReturn<K extends keyof PermissionDispatchAction> = ReturnType<PermissionDispatchAction[K]>;

// 当前 module 的 state
export type PermissionStateType = {
  routes: RouteRecordRaw[];
};

// dispatch action 的类型
export type PermissionDispatchAction = {
  addRoutes: (asyncRoutes: RouteRecordRaw[]) => { asyncRoutes: RouteRecordRaw[]; type: typeof PERMISSION_ADDROUTES };
};

// mutations 的类型
export type PermissionMutations<S = PermissionStateType> = {
  [ADD_ROUTES](state: S, payload: { asyncRoutes: RouteRecordRaw[] }): void;
};

//  action 的类型
export type PermissionAction<
  S = CustomActionStore<PermissionMutations, PermissionDispatchAction, PermissionStateType>
> = {
  addRoutes(state: S, payload: GetReturn<'addRoutes'>): void;
};

export type PermissionMutationsTree = MutationTree<PermissionStateType> & PermissionMutations;
export type PermissionActionTree = ActionTree<PermissionStateType, RootStoreType> & PermissionAction;
export type PermissionModule = Module<PermissionStateType, RootStoreType>;
