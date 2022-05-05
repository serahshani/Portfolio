const homebtn = document.querySelector(".homebtn");
const aboutbtn = document.querySelector(".aboutbtn");
const portfoliobtn = document.querySelector(".portfoliobtn");
const contactbtn = document.querySelector(".contactbtn");
// nav buttons
const homepage = document.querySelector(".home");
const aboutpage = document.querySelector(".about");
const portfoliopage = document.querySelector(".portfolio");
const contactpage = document.querySelector(".contact");

// pages to set show or display none

homebtn.addEventListener("click", function () {
  homepage.style.display = "block";
  aboutpage.style.display = "none";
  portfoliopage.style.display = "none";
  contactpage.style.display = "none";
});
aboutbtn.addEventListener("click", function () {
  homepage.style.display = "none";
  aboutpage.style.display = "block";
  portfoliopage.style.display = "none";
  contactpage.style.display = "none";
});
portfoliobtn.addEventListener("click", function () {
  portfoliopage.style.display = "block";

  homepage.style.display = "none";
  aboutpage.style.display = "none";
  contactpage.style.display = "none";
});
contactbtn.addEventListener("click", function () {
  homepage.style.display = "none";
  aboutpage.style.display = "none";
  portfoliopage.style.display = "none";
  contactpage.style.display = "block";
});
