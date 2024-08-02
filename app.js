import { createApp } from "petite-vue";
import store from "./scripts/globalStore.js";
import navBar from "./scripts/navBar.js";
import welcomeUser from "./scripts/WelcomeUser.js";

createApp({
  ...store,
  ...navBar,
  pages: ["profile", "skills", "experience", "education", "contact"],
  ...welcomeUser,
}).mount("#body");
