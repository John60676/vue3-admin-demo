import { TagsViewDispatchAction } from '@/types/store/modules/tagsView';
import {
  TAGSVIEW_ADDVIEW,
  TAGSVIEW_DELALLVIEW,
  TAGSVIEW_DELOTHERVIEW,
  TAGSVIEW_DELVIEW,
  TAGSVIEW_SWITCHVIEW,
} from './actionsType';

export const addView: TagsViewDispatchAction['addView'] = view => {
  return {
    type: TAGSVIEW_ADDVIEW,
    view: view,
  };
};

export const delView: TagsViewDispatchAction['delView'] = view => {
  return {
    type: TAGSVIEW_DELVIEW,
    view: view,
  };
};

export const delAllView: TagsViewDispatchAction['delAllView'] = () => {
  return {
    type: TAGSVIEW_DELALLVIEW,
  };
};

export const delOtherView: TagsViewDispatchAction['delOtherView'] = currentView => {
  return {
    type: TAGSVIEW_DELOTHERVIEW,
    currentView,
  };
};

export const switchView: TagsViewDispatchAction['switchView'] = (oldIndex, newIndex) => {
  return {
    type: TAGSVIEW_SWITCHVIEW,
    oldIndex,
    newIndex,
  };
};
