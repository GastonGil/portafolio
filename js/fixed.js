(function () {
  let navbar = document.querySelector("#nav-principal");
  let main = document.querySelector("main");
  let navbarHeight = navbar.getBoundingClientRect().height;
  let ventanapos;
  let breakpoint = main.offsetTop - navbarHeight;

  let esFixed = false;

  function actPos() {
    ventanapos = window.scrollY;
  }

  function enScroll() {
    actPos();

    if (ventanapos >= breakpoint && !esFixed) {
      //Cierra la barra automaticamente cuando cambia de posicion
      navbar.classList.remove("open");

      navbar.classList.add("nav-principal-fixed");

      esFixed = true;
    } else if (ventanapos < breakpoint && esFixed) {
      navbar.classList.remove("nav-principal-fixed");
      esFixed = false;
    }
  }

  document.addEventListener("scroll", enScroll);
})();
