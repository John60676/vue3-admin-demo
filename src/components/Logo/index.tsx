import { defineComponent } from 'vue';
import createNamespace from '@/utils/bem';
import './index.scss';
const namespace = 'sx-logo';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    return () => (
      <div class={bem()}>
        <span>Logo</span>
      </div>
    );
  },
});
