import { MutationTree, ActionTree, Module } from 'vuex';

import {
  TAGSVIEW_ADDVIEW,
  TAGSVIEW_DELVIEW,
  TAGSVIEW_DELOTHERVIEW,
  TAGSVIEW_DELALLVIEW,
  TAGSVIEW_SWITCHVIEW,
} from '@/store/modules/tagsView/actionsType';
import {
  ADD_VISITED_VIEW,
  DEL_VISITED_VIEW,
  DEL_ALL_VISITED_VIEW,
  DEL_OTHER_VISITED_VIEW,
  SWITCH_VISITED_VIEW,
} from '@/store/modules/tagsView/mutationType';
import { RootStoreType, CustomActionStore } from '@/types/store';
import { RouteLocationNormalizedLoaded } from 'vue-router';

type GetReturn<K extends keyof TagsViewDispatchAction> = ReturnType<TagsViewDispatchAction[K]>;

//
export type TagsViewType = {
  meta: RouteLocationNormalizedLoaded['meta'];
  name: RouteLocationNormalizedLoaded['name'];
  path: RouteLocationNormalizedLoaded['path'];
  fullPath: RouteLocationNormalizedLoaded['fullPath'];
  query: RouteLocationNormalizedLoaded['query'];
  params: RouteLocationNormalizedLoaded['params'];
};

// 当前 module 的 state
export type TagsViewStateType = {
  visitedViews: TagsViewType[];
};

// dispatch action 的类型
export type TagsViewDispatchAction = {
  addView: (view: TagsViewType) => { view: TagsViewType; type: typeof TAGSVIEW_ADDVIEW };
  delView: (view: TagsViewType) => { view: TagsViewType; type: typeof TAGSVIEW_DELVIEW };
  delAllView: () => { type: typeof TAGSVIEW_DELALLVIEW };
  delOtherView: (currentView: TagsViewType) => { currentView: TagsViewType; type: typeof TAGSVIEW_DELOTHERVIEW };
  switchView: (
    oldIndex: number | undefined,
    newIndex: number | undefined
  ) => { oldIndex: number | undefined; newIndex: number | undefined; type: typeof TAGSVIEW_SWITCHVIEW };
};

// mutations 的类型
export type TagsViewMutations<S = TagsViewStateType> = {
  [ADD_VISITED_VIEW](state: S, payload: { view: TagsViewType }): void;
  [DEL_VISITED_VIEW](state: S, payload: { view: TagsViewType }): void;
  [DEL_ALL_VISITED_VIEW](state: S): void;
  [DEL_OTHER_VISITED_VIEW](state: S, payload: { currentView: TagsViewType }): void;
  [SWITCH_VISITED_VIEW](state: S, payload: { oldIndex: number | undefined; newIndex: number | undefined }): void;
};

//  action 的类型
export type TagsViewAction<S = CustomActionStore<TagsViewMutations, TagsViewDispatchAction, TagsViewStateType>> = {
  addView(state: S, payload: GetReturn<'addView'>): void;
  delView(state: S, payload: GetReturn<'delView'>): void;
  delAllView(state: S, payload: GetReturn<'delAllView'>): void;
  delOtherView(state: S, payload: GetReturn<'delOtherView'>): void;
  switchView(state: S, payload: GetReturn<'switchView'>): void;
};

export type TagsViewMutationsTree = MutationTree<TagsViewStateType> & TagsViewMutations;
export type TagsViewActionTree = ActionTree<TagsViewStateType, RootStoreType> & TagsViewAction;
export type TagsViewModule = Module<TagsViewStateType, RootStoreType>;
