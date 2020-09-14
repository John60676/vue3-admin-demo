import { computed, CSSProperties, defineComponent, nextTick, onMounted, ref, toRefs, watchEffect } from 'vue';
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import classNames from 'classnames';
import createNamespace from '@/utils/bem';
import './index.scss';

const namespace = 'sx-scrollbar';
const bem = createNamespace(namespace);

export default defineComponent({
  name: namespace,
  props: {
    class: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    const { class: customClass } = toRefs(props);
    const scrollValue = ref(0);
    const leftStyle = computed<CSSProperties>(() => ({
      left: `${scrollValue.value}px`,
    }));
    const fixedScrollValue = 200; // 固定滚动值
    const scrollInner = ref<HTMLDivElement>();
    const scrollWrap = ref<HTMLDivElement>();
    const maxScrollLength = () => {
      const innerElement = scrollInner.value as HTMLDivElement;
      const wrapElement = scrollWrap.value as HTMLDivElement;
      if (innerElement.clientWidth <= wrapElement.clientWidth) return 0;
      return wrapElement.clientWidth - innerElement.clientWidth;
    };

    const handleScroll = (e: WheelEvent) => {
      const num = -e.deltaY * 10;
      const max = maxScrollLength();
      let nextScrollDistance = scrollValue.value + num;
      if (e.deltaY >= 0) {
        // 向右滑动
        nextScrollDistance = nextScrollDistance <= max ? max : nextScrollDistance;
      } else {
        // 向左滑动
        nextScrollDistance = nextScrollDistance >= 0 ? 0 : nextScrollDistance;
      }
      scrollValue.value = nextScrollDistance;
    };

    // 向左滑动
    const handleFixedScollToLeft = () => {
      let nextScrollDistance = scrollValue.value + fixedScrollValue;
      scrollValue.value = nextScrollDistance >= 0 ? 0 : nextScrollDistance;
    };

    // 向右滑动
    const handleFixedScollToRight = () => {
      const max = maxScrollLength();
      let nextScrollDistance = scrollValue.value - fixedScrollValue;
      scrollValue.value = nextScrollDistance <= max ? max : nextScrollDistance;
    };

    return () => (
      <div class={classNames([bem(), customClass.value])}>
        <div class={classNames([bem('btn'), bem('btn-left')])} onClick={handleFixedScollToLeft}>
          <LeftOutlined />
        </div>
        <div class={bem('scroll-wrap')} ref={scrollWrap}>
          <div class={bem('scroll-inner')} style={leftStyle.value} onWheel={handleScroll} ref={scrollInner}>
            {slots.default && slots.default()}
          </div>
        </div>
        <div class={classNames([bem('btn'), bem('btn-right')])} onClick={handleFixedScollToRight}>
          <RightOutlined />
        </div>
      </div>
    );
  },
});
