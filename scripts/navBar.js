const navBar = {
  pageActive: "",

  activePageClass(item) {
    if (item !== this.pageActive) return "";
    return "pageActive";
  },

  setPageActive($el, page, scroll) {
    if (
      $el.offsetTop - 200 < scroll &&
      $el.clientHeight + $el.offsetTop > scroll
    ) {
      this.pageActive = page;
    }
  },
};

export default navBar