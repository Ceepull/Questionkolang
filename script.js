
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Sure? D:",
    "Really sure??",
    "Please...😟",
    "Iiyak ak😿😿",
    "Siguro may nag ask na and u said yes☹️☹️☹️",
    "AKO NA LANGG🤩🤩",
    "ayw mue talaga😿",
    "sige wag na lang💔💔",
    "joke, I wanna be with u frfr😁",
    "JUST PRESS ITTT😾😾",
    "I'm running out of things to say...",
    "PRESS MUE NA BABYY🥰🥰"
];

let messageIndex = 0;

const gifList = [
    "valentine1.gif", 
    "valentine2.gif", 
    "valentine3.gif",
    "valentine4.gif",
    "valentine5.gif",
    "valentine6.gif",
    "valentine7.gif",
    "valentine8.gif",
    "valentine9.gif",
    "valentine10.gif",
    "valentine11.gif",
    "valentine12.gif",

];

let currentGifIndex = 0;


function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;   
    
    const gif = document.getElementById('gif');
            gif.src = gifList[currentGifIndex];
            currentGifIndex = (currentGifIndex + 1) % gifList.length;
}

function handleYesClick() {
    window.location.href = "DONT OPEN (hehe).html";
}