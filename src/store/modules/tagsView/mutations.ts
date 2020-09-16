import { TagsViewMutationsTree } from '@/types/store/modules/tagsView';
import router from '@/router';
import { cloneDeep } from 'lodash-es';
import {
  ADD_VISITED_VIEW,
  DEL_ALL_VISITED_VIEW,
  DEL_OTHER_VISITED_VIEW,
  DEL_VISITED_VIEW,
  SWITCH_VISITED_VIEW,
} from './mutationType';

const mutations: TagsViewMutationsTree = {
  [ADD_VISITED_VIEW]: (state, { view }) => {
    if (state.visitedViews.find(i => i.name === view.name)) return;
    state.visitedViews.push(view);
  },
  [DEL_VISITED_VIEW]: (state, { view }) => {
    const index = state.visitedViews.findIndex(i => i.name === view.name);
    if (index === -1) return;
    if (view.meta.tagFixed) return;
    state.visitedViews.splice(index, 1);

    if (router.currentRoute.value.name === view.name) {
      const maxIndex = state.visitedViews.length - 1;
      const _index = index > maxIndex ? index - 1 : index;
      router.push(state.visitedViews[_index]);
    }
  },
  [DEL_ALL_VISITED_VIEW]: state => {
    const fixedTagsView = state.visitedViews.filter(i => i.meta.tagFixed);
    state.visitedViews = fixedTagsView;
    router.push(state.visitedViews[0]);
  },
  [DEL_OTHER_VISITED_VIEW]: (state, { currentView }) => {
    const keepTagsView = state.visitedViews.filter(i => i.meta.tagFixed || i.name === currentView.name);
    state.visitedViews = keepTagsView;
  },
  [SWITCH_VISITED_VIEW]: (state, { oldIndex, newIndex }) => {
    if (typeof oldIndex !== 'undefined' && typeof newIndex !== 'undefined') {
      const visitedViews = cloneDeep(state.visitedViews);
      [visitedViews[newIndex], visitedViews[oldIndex]] = [visitedViews[oldIndex], visitedViews[newIndex]];
      state.visitedViews = visitedViews;
    }
  },
};

export default mutations;
