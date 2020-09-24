<template>
  <div class="de-border-box-1">
    <svg class="de-box-svg" :width="width" :height="height">
      <path
        :fill="backgroundColor"
        :stroke="borderColor"
        :d="`
          M 5 ${collapse} L ${collapse} 5
          L ${width - collapse} 5 L ${width - 5} ${collapse}
          L ${width - 5} ${height - collapse} L ${width - collapse}  ${
          height - 5
        }
          L ${collapse} ${height - 5} L 5 ${height - collapse} L 5 ${collapse}
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
    collapseArray: {
      type: Array,
      default: () => [1, 1, 1, 1],
    },
  },
  mounted() {
    console.log("123", this.theme);
  },
};
</script>

<style>
.de-border-box-1 {
  position: relative;
  width: 100%;
  height: 100%;
}
.de-box-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.de-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>