document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("global-footer");

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
