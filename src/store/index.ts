import { createStore } from 'vuex';
import getters from './getters';
import tagsView from './modules/tagsView';
import permission from './modules/permission';
import { RootStoreType } from '@/types/store';

const store = createStore<RootStoreType>({
  getters,
  modules: {
    tagsView,
    permission,
  },
});

export default store;
