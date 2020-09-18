import { defineComponent, ref, computed, watchEffect, inject } from 'vue';
import { Menu } from 'ant-design-vue';
import { useStore } from 'vuex';
import { RootStoreType } from '@/types/store';
import { RouteRecordRaw, useRoute } from 'vue-router';
import RenderMenuItem from './MenuItem';
import createNamespace from '@/utils/bem';
import { LayoutIsCollapsed } from '@/components/Layout';
import './index.scss';

const namespace = 'sx-menu';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    const store = useStore<RootStoreType>();
    const route = useRoute();

    const routersMap = computed(() =>
      store.state.permission.routes.filter((item: RouteRecordRaw) => item.children && item.children.length >= 1)
    );

    const selectedKeys = computed(() => [route.path]);
    const layoutIsCollapsed = inject(LayoutIsCollapsed, ref(false));
    const openRoute = ref<string[]>([]);
    watchEffect(() => {
      if (layoutIsCollapsed.value) {
        openRoute.value = [];
      } else {
        const _openRoute = route.matched.slice(0, route.matched.length - 1);
        openRoute.value = _openRoute.map(i => i.path);
      }
    });

    return () => (
      <div class={bem()}>
        <Menu theme='dark' mode='inline' v-model={[openRoute.value, 'openKeys']} selectedKeys={selectedKeys.value}>
          {routersMap.value.map((item: RouteRecordRaw) => RenderMenuItem({ route: item, parentPath: item.path }))}
        </Menu>
      </div>
    );
  },
});
