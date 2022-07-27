document.addEventListener("DOMContentLoaded", function(event) {
    
    const text = document.getElementsByClassName("attentionText");
    const delayBetweenIterations = 10000;
    const delayBetweenLetters = 50;

    for(let i = 0; i < text.length; i++) {

        setInterval(function() {
                const letter = text[i];
                letter.classList.remove("attentionText");
                void letter.offsetWidth;
                letter.classList.add("attentionText");
   
        }, delayBetweenIterations + delayBetweenLetters * i);
    }

    /*
    setInterval(function() {
        
        let delayForNextLetter = 0;

        for(letter of text){

            letter.classList.remove("attentionText");
            void letter.offsetWidth;
            letter.classList.add("attentionText");

            letter.style.animationDelay = delayForNextLetter;
            delayForNextLetter += delayBetweenLetters; 
        };
    }, 2000);

    */

    
    
});