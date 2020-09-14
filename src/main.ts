import { createApp } from 'vue';
import store from '@/store';
import router from '@/router';
import App from './App.vue';
import initPermission from '@/utils/permission';
import { createFromIconfontCN } from '@ant-design/icons-vue';
import './index.scss';

const app = createApp(App);
// add vuex
app.use(store);

// add router
app.use(router);

// init permission
initPermission();

// TODO: 优化图标组件
app.component(
  'sx-icon',
  createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1948824_n8uww7gc6g.js', // 在 iconfont.cn 上生成
  }) as any,
);

app.mount('#app');
