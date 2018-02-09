var words = ["treasure", "iPad", "password", "music", "tutor", "exercise", "macaroni", "school", "cake", "html", "dancing", "running", "sleeping", "eating", "progamming", "singing", "laptop", "party", "metal", "hunter", "mouse", "hockey", "football", "superman", "batman", "clown", "nokia", "pancake", "bread", "chocolate", "ice cream", "cheese"]
function randomWords() {
  var randomWord = Math.floor(Math.random() * (words.length));
  document.getElementById("word").innerHTML = words[randomWord];
  var audio = new Audio("ting.mp3");
  audio.play();
}
