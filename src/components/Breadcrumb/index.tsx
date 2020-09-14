import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { Breadcrumb } from 'ant-design-vue';
import { RouteLocationMatched, RouteMeta, RouteRecordRaw, useRoute, useRouter } from 'vue-router';

import { RootStoreType } from '@/types/store';
import { ROUTE_HOME } from '@/router/constantRoutes';
import createNamespace from '@/utils/bem';
import './index.scss';

type MatchRouteType = {
  meta: RouteMeta;
  path: string;
  name: RouteLocationMatched['name'];
  redirect: RouteLocationMatched['redirect'];
};

const namespace = 'sx-breadcrumb';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore<RootStoreType>();
    const homeRoute = store.state.permission.routes.find(i => i.name === ROUTE_HOME);
    if (!homeRoute || !homeRoute.children || homeRoute.children?.length === 0) {
      throw `请为路由添加一个 name 为 ${ROUTE_HOME} 的主页，并至少设置一个 children 路由`;
    }

    const breadCrumbList = computed(() => {
      const matchedRoute: MatchRouteType[] = route.matched.map(i => ({
        meta: i.meta,
        path: i.path,
        name: i.name,
        redirect: i.redirect,
      }));
      if (matchedRoute[0].name !== ROUTE_HOME) {
        const homePage = (homeRoute.children as RouteRecordRaw[])[0];
        matchedRoute.unshift({
          meta: homePage.meta,
          path: `${homeRoute.path}${homePage.path}`,
          name: homePage.name,
          redirect: homePage.redirect,
        } as MatchRouteType);
      }
      return matchedRoute.filter(i => i.meta.title);
    });

    const handleRoutePush = (routeItem: MatchRouteType) => {
      if (routeItem.redirect) {
        router.push(routeItem.redirect);
      } else {
        router.push(routeItem.path);
      }
    };
    return () => (
      <Breadcrumb class={bem()}>
        {breadCrumbList.value.map(item => (
          <Breadcrumb.Item key={item.redirect + item.path}>
            {item.meta.noRedirect ? (
              <div class={bem('links', 'disabled')}>{item.meta.title}</div>
            ) : (
              <div class={bem('links')} onClick={() => handleRoutePush(item)}>
                {item.meta.title}
              </div>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  },
});
