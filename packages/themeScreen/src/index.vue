<template>
  <div class="de-theme-screen"></div>
</template>

<script>
export default {
  name: "de-theme-screen",
  props: {
    color: {
      type: String,
      default: "rgb(82, 255,255)",
    },
  },
  provide() {
    return {
      theme: this,
    };
  },
};
</script>

<style lang="scss" src="./index.scss">
</style>