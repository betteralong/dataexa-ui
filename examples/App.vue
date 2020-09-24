<template>
  <div id="app">
    <div class="demo-flex">
      <De-border-box1
        :collapse="25"
        :collapseArray="testArr"
        strokeDashArray="5,5"
        style="width: 200px; height: 200px"
      >
        <div class="center">
          <div>
            collapse = 25<br />
            strokeDashArray="5,5"<br />
            collapseArray=[1, 0, 1, 0]
          </div>
        </div>
      </De-border-box1>
      <De-border-box1
        :collapse="35"
        :collapseArray="[1, 1, 1, 1]"
        style="width: 200px; height: 200px"
      >
        <div class="center">
          <div>collapse = collapseArray=[1, 1, 1, 1]</div>
        </div></De-border-box1
      >
    </div>
    <div class="demo-flex">
      <De-border-box2
        class="border"
        borderColor="red"
        style="width: 300px; height: 200px"
      >
        <div class="center">
          De-border-box2 <br />
          borderColor="red"
        </div>
      </De-border-box2>
    </div>
    <div class="demo-flex">
      <De-border-box3
        borderColor="red"
        style="width: 300px; height: 200px"
        :decorationArray="testArr"
      >
        <div class="center">borderColor: red decorationArray: [1, 0, 1, 0]</div>
      </De-border-box3>
      <De-border-box3
        borderColor="yellow"
        :decorationStrokeWidth="6"
        :decorationArray="[1, 1, 1, 1]"
        style="width: 300px; height: 200px"
      >
        <div class="center">
          borderColor: yellow, decorationStrokeWidth: 6 decorationArray: [1, 1,
          1, 1]
        </div>
      </De-border-box3>
    </div>
    <De-border-box2></De-border-box2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      testArr: [1, 0, 1, 0],
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app,
html,
body {
  width: 100%;
  height: 100%;
}
.inner {
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.demo-flex {
  display: flex;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
}
// .border {
//   width: 500px;
//   height: 500px;
// }
</style>
