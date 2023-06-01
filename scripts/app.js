// window.onload = function() {
let form = document.querySelector("form");
form.onsubmit = function(event) {
  // then we print values to the story area;
    const person1Input = document.getElementById("person1Input").value;
    const person2Input = document.getElementById("person2Input").value;
    const animalInput= document.getElementById("animalInput").value;
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    const nounInput = document.getElementById("nounInput").value;

  // we're hardcoding these values for now
  document.querySelector("span#person1a").innerText = "person 1";
  document.querySelector("span#person1b").innerText = "person 1";
  document.querySelector("span#person1c").innerText = "person 1";
  document.querySelector("span#person2a").innerText = "person 2";
  document.querySelector("span#person2b").innerText = "person 2";
  document.querySelector("span#animal").innerText = "an animal";
  document.querySelector("span#verb").innerText = "verb";
  document.querySelector("span#noun").innerText = "noun";
  document.querySelector("span#exclamation").innerText = "exclamation";

  // then we show the story by removing the class attribute
  document.querySelector("div#story").removeAttribute("class");
  event.preventDefault();
};
// };