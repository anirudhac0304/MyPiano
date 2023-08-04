const pianoKeys = document.querySelectorAll(".piano-keys .key"),
keysCheckbox = document.querySelector(".keys-checkbox input"),
volumeSlider = document.querySelector(".volume-slider input");

let allKeys = [];
let audio = new Audio("Tunes/a.wav");

const playTune = (key) => {
    audio.src = `Tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    clickedKey.classList.add("active");
    setTimeout(() =>{
        clickedKey.classList.remove("active");
    },150);
}
pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
})

const handleVolume = (e) =>{
    audio.volume = e.target.value;
}

const pressedKey = (e) =>{
    if(allKeys.includes(e.key)){
        playTune(e.key);
    }
}

const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keypress", pressedKey);