


// Get all the modal buttons
var modalBtns = document.querySelectorAll(".openModalBtn");

// Loop through the modal buttons and add click event listeners to each
modalBtns.forEach(function (btn, index) {
  var modal = document.getElementById("myModal" + (index + 1));
  var span = modal.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
});


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






