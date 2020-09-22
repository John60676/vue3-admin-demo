import { defineComponent } from 'vue';
import LoginForm, { LoginFormType } from './components/loginForm';
import { Layout } from 'ant-design-vue';
import createNamespace from '@/utils/bem';
import './index.scss';
import { useRouter } from 'vue-router';
import { ROUTE_HOME } from '@/router/constantRoutes';

const namespace = 'sx-login';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    const router = useRouter();
    const handleLogin = (formData: LoginFormType) => {
      window.localStorage.setItem('login', String(new Date().getTime()));
      router.push({ name: ROUTE_HOME });
    };
    return () => (
      <Layout class={bem()}>
        <Layout.Header class={bem('header')}>
          <div>头部</div>
        </Layout.Header>
        <Layout.Content class={bem('main')}>
          <div class={bem('logo')}>Logo</div>
          <LoginForm class={bem('login-form')} onLogin={handleLogin} />
        </Layout.Content>
        <Layout.Footer class={bem('footer')}>Copyright© 2020 John60676</Layout.Footer>
      </Layout>
    );
  },
});
