// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const voiceSelect = document.getElementById("voice-select");
  const button = document.getElementById("explore").childNodes[9];
  const currImg = document.getElementById("explore").childNodes[3];

  const inputTxt = document.getElementById("text-to-speak");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for(let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if(voices[i].default) {
        option.textContent += " - DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);

    utterThis.addEventListener("start", (event) => {
      currImg.src = "assets/images/smiling-open.png";
    });
  
    utterThis.addEventListener("end", (event) => {
      currImg.src = "assets/images/smiling.png";
    });

    inputTxt.blur();
  });
  
}