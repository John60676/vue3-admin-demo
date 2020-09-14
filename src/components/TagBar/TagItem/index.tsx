import { computed, defineComponent, PropType, toRefs, withModifiers } from 'vue';
import { TagsViewType } from '@/types/store/modules/tagsView';
import { CloseOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router';
import classNames from 'classnames';
import createNamespace from '@/utils/bem';
import { Dropdown, Menu } from 'ant-design-vue';

import './index.scss';

const namespace = 'sx-tag-item';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  props: {
    tag: {
      type: Object as PropType<TagsViewType>,
      required: true,
    },
    onClose: {
      type: Function as PropType<(tag: TagsViewType) => void>,
      required: true,
    },
    onClick: {
      type: Function as PropType<(tag: TagsViewType) => void>,
      required: true,
    },
    onCloseAll: {
      type: Function as PropType<() => void>,
      required: true,
    },
    onCloseOther: {
      type: Function as PropType<(tag: TagsViewType) => void>,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    const { tag } = toRefs(props);
    const IsActive = computed(() => tag.value.name === route.name);

    const dotClass = computed(() => classNames([bem('dot', { active: IsActive.value }), `mr-6`]));

    const itemClass = computed(() => classNames([bem({ active: IsActive.value }), 'mr-10']));

    const enabledClose = computed(() => !tag.value.meta.tagFixed);

    const dropdownMenuSlots = {
      overlay: () => (
        <Menu>
          <Menu.Item key='closeOther' onClick={() => props.onCloseOther(tag.value)}>
            关闭其他
          </Menu.Item>
          <Menu.Item key='closeAll' onClick={() => props.onCloseAll()}>
            关闭所有
          </Menu.Item>
        </Menu>
      ),
    };
    return () => (
      <Dropdown trigger={['contextmenu']} v-slots={dropdownMenuSlots}>
        <span
          class={itemClass.value}
          key={String(tag.value.name)}
          onAuxclick={() => enabledClose.value && props.onClose(tag.value)}
          onClick={() => props.onClick(tag.value)}
        >
          <div class={dotClass.value} />
          {tag.value.meta.title}
          {enabledClose.value && (
            <div
              class={classNames([bem('close'), 'ml-10'])}
              onClick={withModifiers(() => props.onClose(tag.value), ['stop'])}
            >
              <CloseOutlined />
            </div>
          )}
        </span>
      </Dropdown>
    );
  },
});
