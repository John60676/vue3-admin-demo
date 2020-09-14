import { defineComponent, ref, KeepAlive } from 'vue';
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
    return () => (
      <Layout class={bem()}>
        <Layout.Sider class={bem('sider')} collapsible v-model={[isCollapsed.value, 'collapsed']}>
          <Logo />
          <Menu />
        </Layout.Sider>
        <Layout>
          <Layout.Header class={bem('header')}>
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
  },
});
