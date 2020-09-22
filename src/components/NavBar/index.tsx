import { defineComponent } from 'vue';

import Breadcrumb from '@/components/Breadcrumb';
import NavBarAvatarMenu from '@/components/NavBarAvatarMenu';
import createNamespace from '@/utils/bem';

import './index.scss';
import { useRouter } from 'vue-router';
import { ROUTE_LOGIN } from '@/router/constantRoutes';

const namespace = 'sx-navbar';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    const router = useRouter();
    const handleLogout = () => {
      window.localStorage.setItem(ROUTE_LOGIN, '0');
      router.replace({ name: ROUTE_LOGIN });
    };

    return () => (
      <div class={bem()}>
        <Breadcrumb />
        <div class={bem('nav-tools')}>
          <NavBarAvatarMenu onLogout={handleLogout} />
        </div>
      </div>
    );
  },
});
