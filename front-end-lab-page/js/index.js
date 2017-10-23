var input = document.querySelector("input");
var button = document.querySelector("#someButton");
var p = document.querySelector(".bigHead");
var inputFirstP = document.querySelector("#inputFirstP")

input.addEventListener("change", function(event){
  p.textContent = "Hey " + event.target.value + ", welcome to my front-end experiments page";
  button.style.display = "none";
  console.log(button);
  input.style.display = "none";
  inputFirstP.style.display = "none";
});