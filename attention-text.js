document.addEventListener("DOMContentLoaded", function(event) {

    
    const text = document.getElementsByClassName("attentionText");
    const delayBetweenIterations = 5000;
    const delayBetweenLetters = 50;

    
    for(let i = 0; i < text.length; i++) {

        callAnimationWithDelay(i);
        setInterval(function() {
            callAnimationWithDelay(i);
        }, delayBetweenIterations);
    }

    function callAnimationWithDelay(elementIndex){
        const letter = text[elementIndex];
        letter.classList.remove("attentionText");
        void letter.offsetWidth;
        letter.classList.add("attentionText");
        letter.style.animationDelay = delayBetweenLetters * elementIndex +"ms";
    }

    
    
});