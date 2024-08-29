import { createApp } from "./node_modules/petite-vue/dist/petite-vue.es.js";
import store from "./scripts/globalStore.js";
import navBar from "./scripts/navBar.js";
import welcomeUser from "./scripts/WelcomeUser.js";
import formComponents from "./scripts/contactForm.js";

createApp({
  ...store,
  ...navBar,
  ...welcomeUser,
  ...formComponents,
}).mount("#body");
