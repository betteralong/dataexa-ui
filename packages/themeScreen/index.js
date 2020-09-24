import DethemeScreen from "./src/index";

DethemeScreen.install = function(Vue) {
  Vue.component(DethemeScreen.name, DethemeScreen);
};

export default DethemeScreen;
