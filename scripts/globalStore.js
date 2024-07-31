import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const store = reactive({
  scroll: 0,
  pageActive: 'profile',

  activePageClass(item) {
    if (item !== this.pageActive) return "";
    return 'pageActive'
  },

  setScroll(value) {
    this.scroll = value;
  },
  setScrollPerPage(value) {
    this.pageActive = value;
  },
});
createApp({
  store,
}).mount();
