let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slideInterval = 10000; // Change this value to adjust the slide interval (in milliseconds)

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  const offset = -slideIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
  moveSlide(1);
}

// Set interval to automatically slide
setInterval(autoSlide, slideInterval);

updateSlider();



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


