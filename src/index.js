import BorderBox1 from "../packages/borderBox1";
import BorderBox2 from "../packages/borderBox2";
import BorderBox3 from "../packages/borderBox3";
import BorderBox4 from "../packages/borderBox4";
const components = [BorderBox1, BorderBox2, BorderBox3, BorderBox4];

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
