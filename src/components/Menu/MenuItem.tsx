import { toRef, computed, unref } from 'vue';
import { RouteRecordRaw, useRouter } from 'vue-router';
import { Menu } from 'ant-design-vue';
import path from 'path';

type MenuItemProps = {
  route: RouteRecordRaw;
  parentPath: string;
};

const RenderMenuItem = (props: MenuItemProps) => {
  const route = toRef(props, 'route');
  const router = useRouter();
  const hasChildren = Array.isArray(route.value.children);
  const oneChildren = route.value.children?.length === 1;
  const currentRoute = computed(() => {
    const _route = unref(route);
    if (!hasChildren) {
      return [_route];
    } else if (oneChildren) {
      if (_route.meta?.title) {
        return _route;
      } else {
        return _route.children as RouteRecordRaw[];
      }
    } else {
      return _route;
    }
  });
  const handleMenuClick = (pathUrl: string) => {
    router.push(resolvePath(pathUrl));
  };

  const resolvePath = (pathUrl: string): string => {
    return path.resolve(props.parentPath, pathUrl);
  };

  const filterHiddenPage = (item: RouteRecordRaw) => {
    return !item.meta?.hidden;
  };

  let data: unknown;
  if (Array.isArray(currentRoute.value)) {
    data = currentRoute.value.filter(filterHiddenPage).map(item => (
      <Menu.Item key={resolvePath(item.path)} title={item.meta?.title} onClick={e => handleMenuClick(item.path)}>
        <sx-icon type={item.meta?.icon} />
        <span>{item.meta?.title}</span>
      </Menu.Item>
    ));
  } else {
    const titleSlot = (
      <>
        <sx-icon type={currentRoute.value.meta?.icon} />
        <span>{currentRoute.value.meta?.title}</span>
      </>
    );
    const parentPath = computed(() => resolvePath((currentRoute.value as RouteRecordRaw).path));
    data = (
      <Menu.SubMenu key={parentPath.value} v-slots={{ title: () => titleSlot }}>
        {currentRoute.value.children?.map(item => RenderMenuItem({ route: item, parentPath: parentPath.value }))}
      </Menu.SubMenu>
    );
  }

  return data;
};

export default RenderMenuItem;
