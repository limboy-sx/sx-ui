import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  computed,
  watch,
  nextTick,
} from "vue";
import { createNameSpacedBem } from "@limboy-ui/utils/create";

export default defineComponent({
  name: "SVirtualList",
  props: {
    size: { type: Number, default: 35 }, //每个item高度
    remain: { type: Number, default: 8 }, //可视区域显示多少item
    items: { type: Array, default: () => [] }, //数据源
  },
  setup(props, { slots }) {
    const bem = createNameSpacedBem("vl");
    //这个wrapperRef是撑开的容器实例
    const wrapperRef = ref();
    //滚动条元素实例
    const barRef = ref();
    //计算显示的区域
    const state = reactive({
      start: 0, //计算显示的区域
      end: props.remain,
    });
    //计算显示的区域
    const visibleData = computed(() => {
      return props.items.slice(state.start, state.end);
    });
    //计算偏移量
    const offset = ref(0);
    // 标志位：防止在更新 scrollTop 时触发 handleScroll
    const isUpdatingScroll = ref(false);

    const handleScroll = () => {
      if (!wrapperRef.value || isUpdatingScroll.value) return;

      //计算过去了几个数据
      const scrollTop = wrapperRef.value.scrollTop; //滚上去的距离
      const newStart = Math.floor(scrollTop / props.size); //滚上去的item数

      // 边界检查：确保 start 不会小于 0，end 不会超过数组长度
      const maxStart = Math.max(0, props.items.length - props.remain);
      const newStartValue = Math.max(0, Math.min(newStart, maxStart));

      // 只有当 start 真正改变时才更新
      if (newStartValue !== state.start) {
        state.start = newStartValue;
        state.end = Math.min(state.start + props.remain, props.items.length);
        // 计算偏移量，确保与 scrollTop 对齐
        offset.value = state.start * props.size;
      }
    };

    // 更新滚动条高度
    const updateBarHeight = () => {
      if (barRef.value) {
        barRef.value.style.height = props.items.length * props.size + "px";
      }
    };

    // 监听 items 变化，更新滚动条高度
    watch(
      () => props.items.length,
      (newLength, oldLength) => {
        if (oldLength === undefined || newLength === oldLength) return;

        const oldStart = state.start;
        updateBarHeight();

        // 如果列表是展开（增加），保持当前可见的第一个 item 不变
        if (newLength > oldLength && wrapperRef.value) {
          // 保持当前的 start 不变（如果还在有效范围内）
          const maxStart = Math.max(0, newLength - props.remain);
          const newStart = Math.min(oldStart, maxStart);

          // 只有当 start 需要改变时才更新
          if (newStart !== state.start) {
            state.start = newStart;
          }
          state.end = Math.min(state.start + props.remain, newLength);

          // 更新偏移量，保持视觉位置不变
          offset.value = state.start * props.size;

          // 设置标志位，防止触发 handleScroll
          isUpdatingScroll.value = true;
          // 更新 scrollTop 以匹配新的偏移量
          nextTick(() => {
            if (wrapperRef.value) {
              wrapperRef.value.scrollTop = state.start * props.size;
              // 延迟重置标志位，确保 scroll 事件处理完成
              setTimeout(() => {
                isUpdatingScroll.value = false;
              }, 0);
            } else {
              isUpdatingScroll.value = false;
            }
          });
        } else if (newLength < oldLength) {
          // 如果列表是收缩（减少），需要调整 start
          const maxStart = Math.max(0, newLength - props.remain);
          if (state.start > maxStart) {
            state.start = maxStart;
            state.end = Math.min(state.start + props.remain, newLength);
            offset.value = state.start * props.size;

            isUpdatingScroll.value = true;
            nextTick(() => {
              if (wrapperRef.value) {
                wrapperRef.value.scrollTop = state.start * props.size;
                setTimeout(() => {
                  isUpdatingScroll.value = false;
                }, 0);
              } else {
                isUpdatingScroll.value = false;
              }
            });
          } else {
            // 如果 start 还在有效范围内，只需要更新 end
            state.end = Math.min(state.start + props.remain, newLength);
          }
        }
      }
    );

    watch(
      () => state.start,
      () => {
        console.log(state);
      }
    );
    onMounted(() => {
      console.log(state);
      if (wrapperRef.value) {
        wrapperRef.value.style.height = props.remain * props.size + "px";
      }
      updateBarHeight();
    });

    return () => {
      return (
        <div class={bem.b()} ref={wrapperRef} onScroll={handleScroll}>
          <div class={bem.e("scroll-bar")} ref={barRef}></div>
          <div
            class={bem.e("scroll-list")}
            style={{ transform: `translate3d(0,${offset.value}px,0)` }}
          >
            {visibleData.value.map((node, index) => (
              <div key={state.start + index}>{slots.default?.({ node })}</div>
            ))}
          </div>
        </div>
      );
    };
  },
});
