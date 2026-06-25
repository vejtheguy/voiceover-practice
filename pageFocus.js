const pageHeading = document.querySelector("h1");

if (pageHeading) {
  pageHeading.setAttribute("tabindex", "-1");
  pageHeading.focus();
  pageHeading.style.outline = "none";
}
