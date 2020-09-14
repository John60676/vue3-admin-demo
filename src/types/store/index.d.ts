import { TagsViewStateType } from './modules/tagsView';
import { CommitOptions, DispatchOptions, ActionContext } from 'vuex';
import { PermissionStateType } from './modules/permission';

export type RootStoreType = {
  tagsView: TagsViewStateType;
  permission: PermissionStateType;
};

// 自定义  ActionStore
// 用来补充 Actions 里面的 commit 和 dispatch 类型缺失的问题
/**
 * @param M 传入当前modules的 mutations 类型
 * @param A 传入当前modules的 actions 类型
 * @param S 传入当前modules的 state 类型
 */
export type CustomActionStore<M, A, S> = Omit<ActionContext<S, RootStoreType>, 'commit' | 'dispatch'> & {
  commit<K extends keyof M, P extends Parameters<M[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<M[K]>;
} & {
  dispatch<K extends keyof A>(
    key: K,
    payload: Omit<ReturnType<A[K]>, 'type'>,
    options?: DispatchOptions
  ): ReturnType<A[K]>;
};
