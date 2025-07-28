
let initialMarginTop = -20;

document.addEventListener("DOMContentLoaded", function() {
    hideLongDescription();
});

window.addEventListener("resize", function() {
    // Deine Funktion hier, z.B.:
    hideLongDescription();
});


function longDescription() {
    return document.getElementById("longDescription");
};

function showLongDescription(){
    setInitialMarginTop();
    longDescription().style.marginTop = initialMarginTop;//-20;
}

function hideLongDescription(){
    setInitialMarginTop();
    longDescription().style.marginTop = -longDescription().offsetHeight - 100;
}

function setInitialMarginTop(){
    if (initialMarginTop == null){
        initialMarginTop = longDescription().style.marginTop;
    }
}