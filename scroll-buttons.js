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

const centralSlideIndex = () => {
    return Math.round(slideList.scrollLeft / averageProjectSlideWidth())
}


slideRightButton.onclick = function() {
    

    let nextSlideIndex = centralSlideIndex() + 1;
    if (nextSlideIndex >= projectSlides.length)
        nextSlideIndex = 0;

    slideList.scrollLeft = averageProjectSlideWidth() * nextSlideIndex;
    
}

slideLeftButton.onclick = function() {

    let nextSlideIndex = centralSlideIndex() - 1;
    if (nextSlideIndex < 0)
        nextSlideIndex = projectSlides.length - 1;

    slideList.scrollLeft = averageProjectSlideWidth() * nextSlideIndex;

}
});