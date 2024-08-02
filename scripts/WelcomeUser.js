const welcomeUser = {
  welcomeText: "Namaste",
  delay:100,
  welcomeClient($el, welcomeText,delay=this.delay) {
    for (let i in welcomeText) {
      setTimeout(() => ($el.textContent += welcomeText[i]), delay + i * delay);
    }
  },
};

export default welcomeUser;
