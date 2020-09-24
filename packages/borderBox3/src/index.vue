<template>
  <div class="de-border-box-3">
    <svg class="de-box-svg" :width="width" :height="height">
      <path
        :fill="backgroundColor"
        :stroke="borderColor"
        :d="`
          M 5, 5 L ${width - 5} 5 L ${width - 5} ${height - 5} L 5 ${
          height - 5
        } L 5 5
        `"
      />
      <path
        v-if="decorationArray && decorationArray[0]"
        fill="transparent"
        :stroke="decorationColor"
        :stroke-width="decorationStrokeWidth"
        :d="`M 5 30 L 5 5 L 30 5`"
      />
      <path
        v-if="decorationArray && decorationArray[1]"
        fill="transparent"
        :stroke="decorationColor"
        :stroke-width="decorationStrokeWidth"
        :d="`M ${width - 30} 5 L ${width - 5}  5 L ${width - 5} 30`"
      />
      <path
        v-if="decorationArray && decorationArray[2]"
        fill="transparent"
        :stroke="decorationColor"
        :stroke-width="decorationStrokeWidth"
        :d="`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${
          width - 30
        } ${height - 5}`"
      />
      <path
        v-if="decorationArray && decorationArray[3]"
        fill="transparent"
        :stroke="decorationColor"
        :stroke-width="decorationStrokeWidth"
        :d="`M 30 ${height - 5} L 5 ${height - 5} L 5 ${height - 30}`"
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
  name: "DeBorderBox3",
  mixins: [boxResize],
  props: {
    borderColor: {
      type: String,
      default: "rgba(75, 255, 255)",
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    decorationColor: {
      type: String,
      default: "rgba(84, 255, 255)",
    },
    decorationStrokeWidth: {
      type: Number,
      default: 4,
    },
    decorationArray: {
      default: () => [1, 1, 1, 1],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>