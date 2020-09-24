<template>
  <div class="de-border-box-1">
    <svg class="de-box-svg" :width="width" :height="height">
      <path
        :fill="backgroundColor"
        :stroke="borderColor"
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
        ? `${this.collapse} ${this.height - 5} L 5 ${
            this.height - this.collapse
          } L 5 ${this.collapse}`
        : `L 5 5`;
    },
  },
  mounted() {
    console.log(this.path1);
    console.log(this.path2);
    console.log(this.path3);
    console.log(this.path4);
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