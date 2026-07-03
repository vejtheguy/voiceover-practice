document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("global-header");
  const footer = document.getElementById("global-footer");

  if (header) {
    fetch("/components/header.html")
      .then((response) => response.text())
      .then((data) => {
        header.innerHTML = data;

        const currentPath = window.location.pathname;
        const headerLinks = header.querySelectorAll(".nav-links a");

        headerLinks.forEach((link) => {
          const currentHref = link.getAttribute("href");

          if (currentHref === currentPath) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
  }

  if (footer) {
    fetch("/components/footer.html")
      .then((response) => response.text())
      .then((data) => {
        footer.innerHTML = data;

        const yearDate = footer.querySelector("#year");
        if (yearDate) {
          yearDate.textContent = new Date().getFullYear();
        }
      });
  }
});
