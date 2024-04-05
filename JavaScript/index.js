


const btn = document.querySelector(".nav-btns");
const menu = document.querySelector(".dropdown-nav");
const links = document.querySelectorAll(".dropdown-nav-links");
console.log(links);

btn.addEventListener("click", (e) => {
  menu.classList.toggle("active-dropdown");
})

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    menu.classList.toggle("active-dropdown");
})
});







const loader = document.querySelector("#preloader");
window.addEventListener('load', () =>{ 
      loader.style.display = "none";

})    





