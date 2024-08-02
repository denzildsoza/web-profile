import { reactive } from "petite-vue";

const store = reactive({
  scroll: 0,

  setScroll(value) {
    this.scroll = value;
  },

  onScrollChange($el) {
    this.scroll = $el.scrollTop;
  },
});

export default store;
