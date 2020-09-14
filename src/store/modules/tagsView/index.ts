import { TagsViewStateType, TagsViewModule } from '@/types/store/modules/tagsView';
import mutations from './mutations';
import actions from './actions';

const state: TagsViewStateType = {
  visitedViews: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
} as TagsViewModule;
