const selectElement = function(element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});

window.sr=ScrollReveal();

sr.reveal('.animate-left',
{
    origin:'left',
    duration:800,
    distance:'20rem',
    delay:200
});
sr.reveal('.animate-right',
{
    origin:'right',
    duration:800,
    distance:'20rem',
    delay:400
});
sr.reveal('.animate-top',
{
    origin:'top',
    duration:800,
    distance:'20rem',
    delay:400
});
sr.reveal('.animate-bottom',
{
    origin:'bottom',
    duration:800,
    distance:'20rem',
    delay:400
});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myReviews");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-1", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-1";
}