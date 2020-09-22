import { defineComponent, PropType, reactive, ref } from 'vue';
import { Input, Form, Button, Checkbox } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

import createNamespace from '@/utils/bem';
import './index.scss';

const namespace = 'sx-login-form';
const bem = createNamespace(namespace);

export type LoginFormType = {
  userName: string;
  password: string;
};
export default defineComponent({
  name: namespace,
  props: {
    onLogin: {
      type: Function as PropType<(formData: LoginFormType) => void>,
      required: true,
    },
  },
  setup(props) {
    const formRef = ref<Form>();
    const formData = reactive<LoginFormType>({ userName: '', password: '' });
    const handleLogin = async () => {
      const validate = await formRef.value?.validateFields().catch(() => {});
      if (!validate) {
        return;
      }
      props.onLogin(formData);
    };

    return () => (
      <div class={bem()}>
        <Form layout='horizontal' model={formData} ref={formRef}>
          <Form.Item name='userName' rules={{ required: true, message: '请输入用户账号' }}>
            <Input
              v-model={[formData.userName, 'value']}
              size='large'
              placeholder='用户账号'
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item name='password' rules={{ required: true, message: '请输入用户密码' }}>
            <Input.Password
              v-model={[formData.password, 'value']}
              size='large'
              placeholder='用户密码'
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <div>
            <Checkbox>自动登录</Checkbox>
            <Button size='small' type='link' class='float-right'>
              忘记密码
            </Button>
          </div>
          <Form.Item>
            <Button size='large' class='mt-24' type='primary' block onClick={handleLogin}>
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  },
});
