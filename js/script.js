const header = document.getElementsByTagName("header")[0];
const menu = document.querySelector(".menu");
const menuButton = document.getElementById("menu-button");
const menuButtonIcon = menuButton.children[0].classList;
const backToTopButton = document.querySelector(".back-to-top-button");

menuButton.addEventListener("click", OpenMenu);

function OpenMenu() {
  let isActive =
    menu.classList.value === "menu flex ai-center hide-menu" ? false : true;

  if (isActive) {
    menu.classList.value = "menu flex ai-center hide-menu";
    menuButtonIcon.value = "fa fa-bars fa-2x";
  } else {
    menu.classList.value = "menu flex ai-center show-menu";
    menuButtonIcon.value = "fa fa-close fa-2x";
  }
}

window.onscroll = () => {
  ChangeHeader();
  ControlBackToTop();
};

function ChangeHeader() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    header.style.backgroundColor = "rgba(1, 58, 99, 0.95)";
  } else {
    header.style.backgroundColor = "rgba(1, 58, 99, 1)";
  }
}

function ControlBackToTop() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    backToTopButton.style.visibility = "visible";
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.visibility = "hidden";
    backToTopButton.style.opacity = "0";
  }
}

function GoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
