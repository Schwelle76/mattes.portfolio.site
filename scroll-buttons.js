document.addEventListener("DOMContentLoaded", function(event) { 

const slideRightButton = document.getElementById('slideRight');
const slideLeftButton = document.getElementById('slideLeft');
const images = document.getElementsByClassName("images");


slideRightButton.onclick = function() {
    console.log('slideRightButton clicked');
    images[0].scrollLeft += 1500;
}

slideLeftButton.onclick = function() {
    images[0].scrollLeft -= 1500;
}

});