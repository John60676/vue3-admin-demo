import { defineComponent } from 'vue';
import createNamespace from '@/utils/bem';

import './index.scss';

const namespace = 'sx-testpage';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    return () => (
      <div class={bem()}>
        {[...Array(100)].map((_, index) => (
          <div>test{index}</div>
        ))}
      </div>
    );
  },
});
