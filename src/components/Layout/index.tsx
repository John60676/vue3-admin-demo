import { defineComponent, ref, KeepAlive, computed } from 'vue';
import { Layout } from 'ant-design-vue';
import Menu from '@/components/Menu';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import TagBar from '@/components/TagBar';
import createNamespace from '@/utils/bem';
import './index.scss';

const namespace = 'sx-layout';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    const isCollapsed = ref(false);
    const siderWidth = 200; // 菜单栏展开宽度
    const collapsedWidth = 80; // 菜单栏折叠宽度
    const siderWidthRef = computed(() => (isCollapsed.value ? collapsedWidth : siderWidth));

    return () => {
      const headerStyle = {
        width: `calc(100% - ${siderWidthRef.value}px)`,
      };
      const layoutRightStyle = {
        marginLeft: `${siderWidthRef.value}px`,
      };
      return (
        <Layout class={bem()}>
          <Layout.Sider
            class={[bem('sider'), bem('left-wrap')]}
            v-model={[isCollapsed.value, 'collapsed']}
            collapsedWidth={collapsedWidth}
            width={siderWidth}
            collapsible
          >
            <Logo />
            <Menu />
          </Layout.Sider>
          <Layout class={bem('right-wrap')} style={layoutRightStyle}>
            <Layout.Header class={bem('header')} style={headerStyle}>
              <NavBar />
              <TagBar />
            </Layout.Header>
            <Layout.Content class={bem('content')}>
              <router-view
                v-slots={{
                  default: ({ Component }) => (
                    <KeepAlive>
                      <Component />
                    </KeepAlive>
                  ),
                }}
              />
            </Layout.Content>
          </Layout>
        </Layout>
      );
    };
  },
});
