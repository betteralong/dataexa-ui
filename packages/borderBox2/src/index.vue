<template>
  <div class="de-border-box-2">
    <svg class="de-box-svg" :width="width" :height="height">
      <path
        :fill="backgroundColor"
        :stroke="borderColor"
        :d="`
          ${path1} ${path2} ${path3} ${path4}
        `"
      ></path>
    </svg>
    <div class="de-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import boxResize from "@/mixin/boxResize";
export default {
  name: "DeBorderBox2",
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
  },
  computed: {
    path1() {
      const { width } = this;
      return `
          M 5 25 L 25 5 L ${width / 3} 5 L ${5 + width / 3} 15 L ${
        -5 + (width * 2) / 3
      } 15 L ${(width * 2) / 3} 5 L ${width - 25} 5 L ${width - 5} 25
        `;
    },
    path2() {
      const { width, height } = this;
      return `
        L ${width - 5} ${height / 5} L ${width - 5} ${height / 5} L ${
        width - 15
      } ${10 + height / 5}  L ${width - 15} ${-10 + (height * 4) / 5} L ${
        width - 5
      } ${(height * 4) / 5}
        L ${width - 5} ${height - 25} L ${width - 25} ${height - 5}
      `;
    },
    path3() {
      const { height } = this;
      return `
        L 25 ${height - 5} L 5 ${height - 30}
      `;
    },
    path4() {
      const { height } = this;
      return `
        L 5 ${(4 * height) / 5} L 15 ${-10 + (4 * height) / 5} L 15 ${
        10 + height / 5
      } L 5 ${height / 5} L 5 25
      `;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>