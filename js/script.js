const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysCheckBox = document.querySelector(".key-checkbox input");


let allKey = [];
let audio = new Audio("tunes/a.wav"); //by default , audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play(); // playing audio 
    console.log(allKey);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => {
        clickedKey.classList.remove("active"); // removinf active class 150ms from the clicked key element
    }, 150)
}

pianoKeys.forEach(key => {
    allKey.push(key.dataset.key); // adding data-key value to the allKey array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key))
});

const showHideKeys = () => {
    // toggle hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
    audio.volume = e.target.value;  // passing the range slider value as an audio volume
}

const pressedKey = (e) => {
    // if the pressed key is in the allkey array, only call the playTune function
    if (allKey.includes(e.key)) playTune(e.key);
}

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheckBox.addEventListener("click", showHideKeys);