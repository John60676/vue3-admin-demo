import { TagsViewType } from '@/types/store/modules/tagsView';
import { computed, defineComponent, watch, onMounted } from 'vue';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';
import { omit } from 'lodash-es';
import { useStore } from 'vuex';
import { RootStoreType } from '@/types/store';
import { addView, delAllView, delOtherView, delView } from '@/store/modules/tagsView/dispatchAction';
import Scrollbar from '@/components/Scrollbar';
import TagItem from '@/components/TagBar/TagItem';
import createNamespace from '@/utils/bem';
import './index.scss';

const namespace = 'sx-tagbar';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    const store = useStore<RootStoreType>();
    const route = useRoute();
    const router = useRouter();
    const currentRoute = computed<TagsViewType>(() => omit(route, 'matched', 'redirectedFrom'));
    const visitedsViewList = computed(() => store.state.tagsView.visitedViews);
    const addTagView = () => {
      store.dispatch(addView(currentRoute.value));
    };

    const addFixedTagView = (routeMap: RouteRecordRaw[]) => {
      routeMap.map(i => {
        if (i.children) {
          addFixedTagView(i.children);
        } else {
          if (i.meta?.title && i.meta?.tagFixed) {
            store.dispatch(addView((i as unknown) as TagsViewType));
          }
        }
      });
    };

    const handleCloseTag = (item: TagsViewType) => {
      store.dispatch(delView(item));
    };
    const handleRouteDump = (item: TagsViewType) => {
      router.push(item);
    };

    const handleCloseOtherTag = (item: TagsViewType) => {
      store.dispatch(delOtherView(item));
    };

    const handleCloseAllTag = () => {
      store.dispatch(delAllView());
    };

    onMounted(() => {
      addFixedTagView(store.state.permission.routes);
      addTagView();
    });
    watch(() => route.name, addTagView);

    return () => (
      <div class={bem()}>
        <Scrollbar>
          {visitedsViewList.value.map(item => (
            <TagItem
              key={item.name as string}
              onClick={handleRouteDump}
              onClose={handleCloseTag}
              onCloseAll={handleCloseAllTag}
              onCloseOther={handleCloseOtherTag}
              tag={item}
            />
          ))}
        </Scrollbar>
      </div>
    );
  },
});
