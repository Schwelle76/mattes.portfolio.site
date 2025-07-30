

document.addEventListener("DOMContentLoaded", function (event) {

    const slideRightButton = document.getElementById('slideRight');
    const slideLeftButton = document.getElementById('slideLeft');
    const slideList = document.getElementsByClassName("projectSlideList")[0];
    const projectSlides = document.getElementsByTagName("li");
    const projectDescription = document.getElementsByClassName("projectDescription");

    const maxSlidesImgsHeight = 500;
    const SlideDistanceToCenterForZeroHeight = () => window.innerWidth * .8;




    function slidesImg(slideIndex) {
        return projectSlides[slideIndex].getElementsByTagName("img")[0];
    }
    

    function projectSlideCenter(slideIndex) {
        return averageProjectSlideWidth() * slideIndex;
    }
    const centralSlideIndex = () => {
        return Math.round(slideList.scrollLeft / averageProjectSlideWidth())
    }

    const averageProjectSlideWidth = () => {
        let totalProjectSlideWidth = 0;
        for (let i = 0; i < projectSlides.length; i++) {
            const projectSlideStyle = getComputedStyle(projectSlides[i]);
            totalProjectSlideWidth += parseFloat(projectSlideStyle.width);
        }

        return totalProjectSlideWidth / projectSlides.length;
    }


    slideRightButton.onclick = function () {


        let nextSlideIndex = centralSlideIndex() + 1;
        if (nextSlideIndex >= projectSlides.length)
            nextSlideIndex = 0;

        slideList.scrollLeft = projectSlideCenter(nextSlideIndex);

    }

    slideLeftButton.onclick = function () {

        let nextSlideIndex = centralSlideIndex() - 1;
        if (nextSlideIndex < 0)
            nextSlideIndex = projectSlides.length - 1;

        slideList.scrollLeft = projectSlideCenter(nextSlideIndex);

    }

    function fadeAndGrowSlidesIntoCenter() {
        for (let i = 0; i < projectSlides.length; i++) {

            const slideLowerPositionForZeroHeight = projectSlideCenter(i) - SlideDistanceToCenterForZeroHeight();
            const slideUpperPositionForZeroHeight = projectSlideCenter(i) + SlideDistanceToCenterForZeroHeight();

            const unlerp = (min, max, value) => (value - min) / (max - min);

            const positionBetweenMaxAndMinHeightInPercent = unlerp(slideLowerPositionForZeroHeight, slideUpperPositionForZeroHeight, slideList.scrollLeft);
            const t = positionBetweenMaxAndMinHeightInPercent;
            const imgAwayFromItsCenterInPercent = 2 * Math.min(t, 1 - t);

            //slidesImg(i).style.height = maxSlidesImgsHeight * imgAwayFromItsCenterInPercent;
            slidesImg(i).style.transform = "scale(" + imgAwayFromItsCenterInPercent + ")";

            slidesImg(i).style.opacity = imgAwayFromItsCenterInPercent;

            projectDescription[i].style.opacity = imgAwayFromItsCenterInPercent * 4 - 2;
        }
    }

    setInterval(function () {
        fadeAndGrowSlidesIntoCenter();
    }, 10);
});