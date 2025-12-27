const menuBtn = document.querySelector(".navbar__menu-btn");
const navlist = document.querySelector(".navbar__nav-lists-wrapper");
const closeMenu = document.querySelector(".navbar__close-btn");
const overlay = document.querySelector(".overlay");

function showOverlay(overlay) {
  overlay.classList.add("open");
}

function hideOverlay(overlay) {
  overlay.classList.remove("open");
}

function showNavlist(navlist) {
  navlist.classList.add("active");
}

function hideNavlist(navlist) {
  navlist.classList.remove("active");
}

menuBtn.addEventListener("click", () => {
  showNavlist(navlist);
  showOverlay(overlay);
});

closeMenu.addEventListener("click", () => {
  hideNavlist(navlist);
  hideOverlay(overlay);
});

overlay.addEventListener("click", () => {
  hideNavlist(navlist);
  hideOverlay(overlay);
});
