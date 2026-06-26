document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("global-footer");
  const isHomePage =
    window.location.pathname.endsWith("/") ||
    window.location.pathname.endsWith("index.html");
  const prefix = isHomePage ? "../" : "./";

  if (footer) {
    fetch(`${prefix}components/footer.html`)
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
