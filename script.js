const onNavbarItemClick = (event) => {
  Array.from(navbarItems).forEach((item) => {
    item.classList.remove("selected");
  });

  event.target.classList.add("selected");
};

const navbarItems = document.querySelectorAll(".navbar-item");

Array.from(navbarItems).forEach((item) => {
  item.addEventListener("click", onNavbarItemClick);
});
