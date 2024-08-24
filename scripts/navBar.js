const navBar = {
  pageActive: "home",
  pages: [
    {
      id: "homepage-section",
      name: "home",
    },
    {
      id: "about-section",
      name: "profile",
    },
    {
      id: "skills-section",
      name: "skills",
    },
    {
      id: "experience-section",
      name: "experience",
    },
    {
      id: "contact-section",
      name: "contact",
    },
  ],


  scrollIntoView($el, id) {
    const pageToScroll = document.getElementById(id);
    pageToScroll.scrollIntoView({ behavior: "smooth" });
  },

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

export default navBar;
