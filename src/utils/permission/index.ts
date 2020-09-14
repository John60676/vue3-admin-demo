import store from '@/store';
import { addRoutes } from '@/store/modules/permission/dispatchAction';

export default () => {
  store.dispatch(addRoutes([]));
};
