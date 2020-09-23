import { defineComponent } from 'vue';
import createNamespace from '@/utils/bem';

import './index.scss';

const namespace = 'sx-testpage2';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    return () => <div class={bem()}>test2</div>;
  },
});
