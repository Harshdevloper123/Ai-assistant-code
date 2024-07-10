const btn = document.querySelector('.input');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Boss ");
    }
}

window.addEventListener('load', () => {
    wishMe();
    speak("Naukar apki seva me haizar haii");

});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('how are you') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes('who are you.')) {
        speak("I am a caht assistant made by HARSH. I CAN PERFORM TASKS LIKE OPEN SOMETHING OR SEARCH ANYTHING.")
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if(message.includes('whatsapp')){
        window.open('WhatsApp:///');
    } else if (message.includes('Command') || message.includes('cmd')){
        window.open('Command prompt:///')
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('sing')) {
        speak("Smooth like butter, like a criminal undercover Gon pop like trouble breaking into your heart like that ooh Cool shade, stunner, yeah, I owe it all to my mother, uh Hot like summer, yeah, I'm making you sweat like that (break it down) Ooh, when I look in the mirror I'll melt your heart into two I got that superstar glow, so  Oohdo the boogie, like A side step, right - left, to my beat High like the moon, rock with me, baby Know that I got that heat Let me show you 'cause talk is cheap Side step, right - left, to my beat Get it, let it roll Smooth like butter, pull you in like no other Don't need no Usher to remind me you got it bad Ain't no other that can sweep you up like a robber Straight up, Igot ya making you fall like thatbreak it down......... sorry if you don't like this ")
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }

    
}