function showLongDescription(){
    const longDescription = document.getElementById("longDescription");
    longDescription.style.animationDirection = "normal";
    longDescription.style.animationFillMode = "forwards";
    longDescription.style.animationPlayState = "running";
}

function hideLongDescription(){
    const longDescription = document.getElementById("longDescription");
    longDescription.style.animationDirection = "reverse";
    longDescription.style.animationFillMode = "forwards";
    longDescription.style.animationPlayState = "running";
    

}