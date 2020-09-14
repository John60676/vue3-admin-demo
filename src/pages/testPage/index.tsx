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
        测试页面
        <input type='text' />
      </div>
    );
  },
});
