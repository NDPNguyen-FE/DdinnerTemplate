// swipper carousel
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 10,
  slidesPerView: 1,
  autoplay: true,
  loop: true,
  speed: 1000,
});

// menu hide

const showMenu = (toggle, menuNav) => {
  const toggleBtn = document.getElementById(toggle);
  const menu = document.getElementById(menuNav);
  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("showMenu");
    });
  }
};

showMenu("toggle", "menu");

/**==================================== */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("menu");
  navMenu.classList.remove("showMenu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));
/**================Dark light mode=================== */
const themeButton = document.getElementById("night");
const darkTheme = "dark";
const iconTheme = "fa-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};
const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";
};

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selectedTheme", getCurrentTheme());
  localStorage.setItem("selectedIcon", getCurrentIcon());
});
