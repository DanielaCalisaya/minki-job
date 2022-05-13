let slideIndex = 1;
showSlides(slideIndex);

// Controles siguientes/anteriores
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de imagen en miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  /* let dots = document.getElementsByClassName("dot"); */ /* Comenté esto porque eran los puntitos debajo del carrousel */
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /* for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } */
  slides[slideIndex-1].style.display = "block";
  /* dots[slideIndex-1].className += " active"; */
} 