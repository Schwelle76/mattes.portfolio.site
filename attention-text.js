document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementsByClassName("attentionTextCharacter");
    const delayBetweenIterations = 2500;
    const delayBetweenLetters = 50;

    function triggerWave() {
        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            letter.classList.remove("attentionTextCharacter");
            // Force reflow
            void letter.offsetWidth;
            letter.classList.add("attentionTextCharacter");
            letter.style.animationDelay = (delayBetweenLetters * i) + "ms";
        }
    }

    setInterval(triggerWave, delayBetweenIterations);
});