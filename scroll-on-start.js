let completed = false;

document.addEventListener("DOMContentLoaded", function () {
    if (document.hasFocus())
        HintDownScroll();


});

window.addEventListener("focus", function () {
    HintDownScroll();
});

function HintDownScroll() {


    if (completed == false) {
        setTimeout(function () {
            window.scrollTo({ top: 200, behavior: "smooth" });
            setTimeout(function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 400);
        }, 500);

        completed = true;
    }

}