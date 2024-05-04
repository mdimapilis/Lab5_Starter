// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO

  const hornSelect = document.getElementById("horn-select");
  const imgSelect = document.querySelector('#expose').childNodes[3];
  const audioSelect = document.querySelector('#expose').childNodes[11];

  hornSelect.addEventListener("change", (event) => {
    imgSelect.src = "assets/images/" + hornSelect.value + ".svg";
    audioSelect.src = "assets/audio/" + hornSelect.value + ".mp3";
  });

  const vol = document.getElementById("volume-controls");
  const volVal = vol.childNodes[1];
  const volImg = vol.childNodes[3];

  volVal.addEventListener("change", (event) => {
    const currVol = volVal.value;
    
    if(currVol == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
    }
    else if(currVol > 0 && currVol < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    }
    else if(currVol > 32 && currVol < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
    }
    else if(currVol > 66 && currVol <= 100) {
      volImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  const button = document.querySelector('#expose').childNodes[9];
  const jsConfetti = new JSConfetti();
  button.addEventListener("click", (event) => {
    audioSelect.play();
    if(hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });

}