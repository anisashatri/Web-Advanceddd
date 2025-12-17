var slideindex = 0;

function showslides(n) {
    var slides = document.getElementsByClassName("slide");

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }

    if(n < 1) {
        slideindex = slides.length;
    }
    slides[slideindex - 1].style.display = "block";
}
showslides(slideindex);

function plusSlides(n) {  
    slideindex += n;
    showslides(slideindex);
}
setInterval(plusSlides, 3000, 1);
