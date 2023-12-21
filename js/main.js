(function () {
  let navbar = document.querySelector("#nav-principal");
  let hamb = document.querySelector("#hamburger");
  hamb.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
})();
