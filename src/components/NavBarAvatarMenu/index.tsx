import { defineComponent, PropType } from 'vue';
import { Dropdown, Menu, Avatar } from 'ant-design-vue';
import classNames from 'classnames';
import createNamespace from '@/utils/bem';

import './index.scss';

const namespace = 'sx-navbar-avatar-menu';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  props: {
    onLogout: {
      type: Function as PropType<() => void>,
    },
  },
  setup(props) {
    const menuSlot = () => (
      <Menu class={bem('menu')}>
        <Menu.Item key='1' title='个人中心'>
          个人中心
        </Menu.Item>
        <Menu.Item key='2' title='修改密码'>
          修改密码
        </Menu.Item>
        <Menu.Item key='3' title='退出登录' onClick={props.onLogout}>
          退出登录
        </Menu.Item>
      </Menu>
    );
    const userName = 'John';
    const userAvatar = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';
    return () => (
      <Dropdown
        class={bem()}
        v-slots={{
          overlay: menuSlot,
        }}
      >
        <a class={classNames([bem('avatar'), 'ant-dropdown-link'])}>
          <Avatar class='mr-10' alt={userName} src={userAvatar} />
          <span>{userName}</span>
        </a>
      </Dropdown>
    );
  },
});
