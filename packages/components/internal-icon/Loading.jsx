import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: {
    size: { type: [String, Number], default: "1em" }, // 支持 "24", 24, "1em"
    color: { type: String, default: "currentColor" },
    strokeWidth: { type: [String, Number], default: 3 },
    // arcRatio 控制弧段比例（0..1），默认 2/3
    arcRatio: { type: Number, default: 2 / 3 },
  },
  setup(props) {
    // 固定 viewBox 和 r，让视觉稳定（r=16 -> circumference ~100）
    const size = props.size;
    const strokeWidth = Number(props.strokeWidth);
    const r = 16;
    const circumference = 2 * Math.PI * r;
    const arc = circumference * (props.arcRatio ?? 2 / 3);
    const gap = Math.max(0, circumference - arc);

    // 返回渲染函数
    return () => (
      <svg
        class="loading"
        width={typeof size === "number" ? `${size}px` : size}
        height={typeof size === "number" ? `${size}px` : size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ color: props.color }}
      >
        <circle
          class="path"
          cx="25"
          cy="25"
          r={r}
          stroke="currentColor"
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-dasharray={`${arc.toFixed(2)} ${gap.toFixed(2)}`}
          stroke-dashoffset="0"
          fill="none"
        />
      </svg>
    );
  },
});
