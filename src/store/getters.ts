import { GetterTree } from 'vuex';
import { RootStoreType } from '@/types/store';
import { GetterTreeOptionType } from '@/types/store/getters';

const getters: GetterTree<GetterTreeOptionType, RootStoreType> = {
  visitedViews: state => state.tagsView.visitedViews,
  routes: state => state.permission.routes,
};

export default getters;
