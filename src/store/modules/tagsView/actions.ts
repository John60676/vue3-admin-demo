import { TagsViewActionTree } from '@/types/store/modules/tagsView';
import { ADD_VISITED_VIEW, DEL_ALL_VISITED_VIEW, DEL_OTHER_VISITED_VIEW, DEL_VISITED_VIEW } from './mutationType';

const actions: TagsViewActionTree = {
  addView({ commit }, { view }) {
    commit(ADD_VISITED_VIEW, { view });
  },
  delView({ commit }, { view }) {
    commit(DEL_VISITED_VIEW, { view });
  },
  delAllView({ commit }) {
    commit(DEL_ALL_VISITED_VIEW);
  },
  delOtherView({ commit }, { currentView }) {
    commit(DEL_OTHER_VISITED_VIEW, { currentView });
  },
};

export default actions;
