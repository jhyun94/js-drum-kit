document.getElementsByTagName("body")[0].addEventListener("keydown", function(){
  var key = event.keyCode;
  playSound(key);
});

function playSound(key){
  switch(key){
  case 65:
    document.getElementById("clap").currentTime=0;
    document.getElementById("clap").play();
    break;
  case 83:
    document.getElementById("hihat").currentTime=0
    document.getElementById("hihat").play();
    break;
  case 68:
    document.getElementById("kick").currentTime=0
    document.getElementById("kick").play();
    break;
  case 70:
    document.getElementById("openhat").currentTime=0
    document.getElementById("openhat").play();
    break;
  case 71:
    document.getElementById("boom").currentTime=0
    document.getElementById("boom").play();
    break;
  case 72:
    document.getElementById("ride").currentTime=0
    document.getElementById("ride").play();
    break;
  case 74:
    document.getElementById("snare").currentTime=0
    document.getElementById("snare").play();
    break;
  case 75:
    document.getElementById("tom").currentTime=0
    document.getElementById("tom").play();
    break;
  case 76:
    document.getElementById("tink").currentTime=0
    document.getElementById("tink").play();
    break;
  }
}
