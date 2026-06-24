/**
 * Define the different parts of the layout.
 */
const menu = document.getElementById("js-menu");
const toggle = document.getElementById("js-menu-toggle");
const overlay = document.getElementById("js-layout-overlay");
const mq = window.matchMedia("(min-width: 48rem)");

/**
 * Toggle when the menu button is clicked.
 */
toggle?.addEventListener("click", () => {
	menu.classList.toggle("is-open");
	overlay.classList.toggle("is-open");
});

/**
 * Toggle when the overlay is clicked.
 */
overlay?.addEventListener("click", () => {
	menu.classList.remove("is-open");
	overlay.classList.remove("is-open");
});

/**
 * Toggle when the browser is resized.
 */
mq.addEventListener("change", (e) => {
	if (e.matches) {
		 menu.classList.remove("is-open");
		 overlay.classList.remove("is-open");
	}
});

/**
 * Retain scroll position in menu.
 */
if (menu) {
  const saved = sessionStorage.getItem('navScroll');
  if (saved) menu.scrollTop = parseInt(saved, 10);
  menu.addEventListener('scroll', () => {
    sessionStorage.setItem('navScroll', menu.scrollTop);
  });
}
