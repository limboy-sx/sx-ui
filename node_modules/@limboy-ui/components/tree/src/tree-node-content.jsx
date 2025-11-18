import { defineComponent, inject } from "vue";
import { treeNodeContentProps, treeInjectKey } from "./tree";
export default defineComponent({
  name: "STreeNodeContent",
  props: treeNodeContentProps,
  setup(props) {
    const treeContext = inject(treeInjectKey);
    return () => {
      return treeContext?.slots?.default
        ? treeContext.slots.default({ node: props.node })
        : props.node?.label;
    };
  },
});
