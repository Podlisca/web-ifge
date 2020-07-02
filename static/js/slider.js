// alle slider mit 1 initialisieren
var slideIndex = 1;

var init = (function init() {
    var sliders = document.getElementsByClassName("slider");
    for (i = 0; i < sliders.length; i++) {
        showSlides(slideIndex, sliders[i].children[0].children[0]);
    }
})

init();

function plusSlides(n, obj) {
    showSlides(slideIndex += n, obj);
}

function currentSlide(n, obj) {
    showSlides(slideIndex = n, obj);
}

function showSlides(n, obj) {
var i;
var slides = obj.parentNode.parentNode.getElementsByClassName("blogSlides");
var dots = obj.parentNode.parentNode.parentNode.getElementsByClassName("blogSlider__dots--dot");
if (n > slides.length) {
    slideIndex = 1
}
if (n < 1) {
    slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}