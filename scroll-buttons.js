document.addEventListener("DOMContentLoaded", function(event) { 

const slideRightButton = document.getElementById('slideRight');
const slideLeftButton = document.getElementById('slideLeft');
const slideList = document.getElementsByClassName("projectSlideList")[0];
const projectSlides = document.getElementsByTagName("li");

let centralSlide = 0;


slideRightButton.onclick = function() {
    console.log(projectSlides.length);
    centralSlide += 1;
    if (centralSlide >= projectSlides.length)
        centralSlide = 0;
    slideList.scrollLeft = 1500 * centralSlide + 50;
    
}

slideLeftButton.onclick = function() {
    centralSlide -= 1;
    if (centralSlide < 0)
    centralSlide = projectSlides.length;
    slideList.scrollLeft = 1500 * centralSlide + 50;
}
});