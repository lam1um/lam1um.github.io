(function () {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");
  const header = document.getElementById("header");

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  const onScroll = () => {
    if (header) {
      header.style.borderBottomColor =
        window.scrollY > 20 ? "rgba(255,255,255,0.12)" : "";
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
