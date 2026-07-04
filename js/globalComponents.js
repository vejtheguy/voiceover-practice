document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("global-header");
  const footer = document.getElementById("global-footer");
  const prefix = document.body.getAttribute("data-path-prefix") || "";

  if (header) {
    fetch(`${prefix}components/header.html`)
      .then((response) => response.text())
      .then((data) => {
        header.innerHTML = data;

        const currentPath = window.location.pathname;
        const cleanPath = currentPath.slice(currentPath.lastIndexOf("/") + 1);

        const siteLogo = header.querySelector(".site-logo");
        siteLogo.setAttribute("href", `${prefix}index.html`);
        const headerLinks = header.querySelectorAll(".nav-links a");

        headerLinks.forEach((link) => {
          const currentHref = link.getAttribute("href");
          link.setAttribute("href", `${prefix}${currentHref}`);

          const cleanHref = currentHref.slice(currentHref.lastIndexOf("/") + 1);

          if (cleanHref === cleanPath) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
  }

  if (footer) {
    fetch(`${prefix}components/footer.html`)
      .then((response) => response.text())
      .then((data) => {
        footer.innerHTML = data;

        const footerLinks = footer.querySelectorAll(".footer-resources a");

        footerLinks.forEach((link) => {
          const currentHref = link.getAttribute("href");
          link.setAttribute("href", `${prefix}${currentHref}`);
        });

        const yearDate = footer.querySelector("#year");
        if (yearDate) {
          yearDate.textContent = new Date().getFullYear();
        }
      });
  }
});
