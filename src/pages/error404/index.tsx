import { defineComponent } from 'vue';
import createNamespace from '@/utils/bem';
import './index.scss';

const namespace = 'sx-error404';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  setup() {
    return () => <div class={bem()}>404页面</div>;
  },
});
