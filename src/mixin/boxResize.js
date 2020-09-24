import { debounce, observerDomResize } from "../utils";

export default {
  data() {
    return {
      width: 0,
      height: 0,
      domObserver: null,
      debounceResizeFunc: null,
    };
  },
  mounted() {
    this.initBoxResize();
  },
  beforeDestroy() {
    this.unbindBoxResizeFunc();
  },
  methods: {
    initWH() {
      this.width = this.$el.clientWidth;
      this.height = this.$el.clientHeight;
      if (!this.width || !this.height) {
        console.warn(
          "DataExa: Component width or height is 0px, rendering abnormality may occur!"
        );
      }
    },
    initBoxResize() {
      this.initWH();
      this.getDebounceResizeFunc();
      this.bindBoxResizeFunc();
    },
    getDebounceResizeFunc() {
      return (this.debounceResizeFunc = debounce(100, this.initWH));
    },
    bindBoxResizeFunc() {
      window.addEventListener("resize", this.debounceResizeFunc);
      this.domObserver = observerDomResize(this.$el, this.debounceResizeFunc);
    },
    unbindBoxResizeFunc() {
      if (this.domObserver) {
        this.domObserver.disconnect();
        this.domObserver.takeRecords();
        this.domObserver = null;
      }
      window.removeEventListener("resize", this.debounceResizeFunc);
    },
  },
};
