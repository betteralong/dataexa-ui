<template>
  <div class="de-border-box-3">
    <svg class="de-box-svg" :width="width" :height="height">
      <path :fill="backgroundColor" :stroke="borderColor"></path>
    </svg>
    <div class="de-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import boxResize from "@/mixin/boxResize";
export default {
  name: "DeBorderBox4",
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
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>