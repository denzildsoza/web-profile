import { createApp } from "./node_modules/petite-vue/dist/petite-vue.es.js";
import store from "./scripts/globalStore.js";
import navBar from "./scripts/navBar.js";
import welcomeUser from "./scripts/WelcomeUser.js";

createApp({
  ...store,
  ...navBar,
  ...welcomeUser,
}).mount("#body");
