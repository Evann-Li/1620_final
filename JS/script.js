//when toggled, use modeSwap function
toggleMode = document.querySelector(".toggle").addEventListener("click", modeSwap)
//dark mode function
function modeSwap(event){
    document.body.classList.toggle("dark-theme")
}

submit = document.querySelector("#frm-btn")
submit.addEventListener("click", displayInput)
const Name = document.getElementById("name").value;
var Email = document.getElementById("email").value;
var Msg = document.getElementById("msg").value;
function displayInput(event){
    console.log('\n', "email:", document.getElementById("email").value + ",", '\n', "name:", document.getElementById("name").value + ",", '\n', "message:", document.getElementById("msg").value)
}