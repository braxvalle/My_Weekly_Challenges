function controMobileMenu() {
	const menuLinksContainer = document.querySelector(".nav_links");
	const menuBars = document.querySelector(".bars");
	const menuClose = document.querySelector(".close");

	if (menuLinksContainer.style.display === "block") {
		menuLinksContainer.style.display = "none";
		menuClose.style.display = "none";
		menuBars.style.display = "block";
	} else {
		menuLinksContainer.style.display = "block";
		menuClose.style.display = "block";
		menuBars.style.display = "none";
	}
}
