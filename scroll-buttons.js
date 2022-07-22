document.addEventListener("DOMContentLoaded", function(event) { 

const slideRightButton = document.getElementById('slideRight');
const slideLeftButton = document.getElementById('slideLeft');
const slideList = document.getElementsByClassName("projectSlideList")[0];
const projectSlides = document.getElementsByTagName("li");

const averageProjectSlideWidth = () =>{
    let totalProjectSlideWidth = 0;
    for(let i = 0; i < projectSlides.length; i++){
        const projectSlideStyle = getComputedStyle(projectSlides[i]);
        totalProjectSlideWidth += parseFloat(projectSlideStyle.width);
    }

    return totalProjectSlideWidth / projectSlides.length;
}



let centralSlideIndex = 0;


slideRightButton.onclick = function() {

    centralSlideIndex += 1;
    if (centralSlideIndex >= projectSlides.length)
        centralSlideIndex = 0;


    slideList.scrollLeft = averageProjectSlideWidth() * centralSlideIndex;
    
}

slideLeftButton.onclick = function() {
    centralSlideIndex -= 1;
    if (centralSlideIndex < 0)
    centralSlideIndex = projectSlides.length - 1;


    slideList.scrollLeft = averageProjectSlideWidth() * centralSlideIndex;

}
});