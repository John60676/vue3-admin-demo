import { defineComponent } from 'vue';

import Breadcrumb from '@/components/Breadcrumb';
import NavBarAvatarMenu from '@/components/NavBarAvatarMenu';
import createNamespace from '@/utils/bem';

import './index.scss';

const namespace = 'sx-navbar';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    return () => (
      <div class={bem()}>
        <Breadcrumb />
        <div class={bem('nav-tools')}>
          <NavBarAvatarMenu />
        </div>
      </div>
    );
  },
});
