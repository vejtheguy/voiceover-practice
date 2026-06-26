const pageHeading = document.querySelector("h1");

if (pageHeading) {
  pageHeading.setAttribute("tabindex", "-1");
  pageHeading.style.outline = "none";

  setTimeout(() => {
    pageHeading.focus();
  }, 100);
}
