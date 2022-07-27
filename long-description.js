
let initialMarginTop = null;

function longDescription() {
    return document.getElementById("longDescription");
};

function showLongDescription(){
    setInitialMarginTop();
    longDescription().style.marginTop = -20;
}

function hideLongDescription(){
    setInitialMarginTop();
    longDescription().style.marginTop = initialMarginTop;
}

function setInitialMarginTop(){
    if (initialMarginTop == null){
        initialMarginTop = longDescription().style.marginTop;
    }
}