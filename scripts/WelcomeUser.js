const welcomeUser = {
  welcomeText: "Namaste",
  userWelcome: false,
  delay: 100,
  setUserWelcome() {
    this.userWelcome = true;
  },
  welcomeClient($el, welcomeText, delay = this.delay) {
    for (let i in welcomeText) {
      setTimeout(() => ($el.textContent += welcomeText[i]), delay + i * delay);
    }
    const welcomeDiv = document.getElementById("welcome-page-content");
    setTimeout(() => {
      welcomeDiv.setAttribute("class", "transform-Out-Of-View");
    }, delay*2 + welcomeText.length * delay);
  },
};

export default welcomeUser;
