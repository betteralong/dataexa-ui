<template>
  <div class="de-border-box-1">
    <svg class="de-box-svg" :width="width" :height="height">
      <path
        :fill="backgroundColor"
        :stroke="borderColor"
        :stroke-dasharray="strokeDashArray"
        :d="`
         ${path1} ${path2} ${path3} ${path4}
        `"
      />
    </svg>
    <div class="de-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import boxResize from "@/mixin/boxResize";
export default {
  name: "DeBorderBox1",
  mixins: [boxResize],
  props: {
    borderColor: {
      type: String,
      default: "rgba(84, 255, 255)",
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    collapse: {
      type: Number,
      default: 25,
    },
    strokeDashArray: {
      type: Number,
    },
    collapseArray: {
      type: Array,
      default: () => [1, 1, 1, 1],
    },
  },
  computed: {
    path1() {
      return this.collapseArray[0]
        ? `M 5 ${this.collapse} L ${this.collapse} 5`
        : "M 5 5";
    },
    path2() {
      return this.collapseArray[1]
        ? `L ${this.width - this.collapse} 5 L ${this.width - 5} ${
            this.collapse
          }`
        : `L ${this.width - 5} 5`;
    },
    path3() {
      return this.collapseArray[2]
        ? `L ${this.width - 5} ${this.height - this.collapse} L ${
            this.width - this.collapse
          }  ${this.height - 5}`
        : `L ${this.width - 5} ${this.height - 5}`;
    },
    path4() {
      return this.collapseArray[3]
        ? `L ${this.collapse} ${this.height - 5} L 5 ${
            this.height - this.collapse
          } L ${this.collapseArray[0] ? "5 " + this.collapse : "5 5"}`
        : `L 5 ${this.height - 5}` +
            (this.collapseArray[0] ? `L 5 ${this.collapse}` : "L 5 5");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>