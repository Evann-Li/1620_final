//when toggled, use modeSwap function
toggleMode = document.querySelector(".toggle").addEventListener("click", modeSwap)
//dark mode function
function modeSwap(event){
    document.body.classList.toggle("dark-theme")
}
//submit button with event listener waiting for click
submit = document.querySelector("#frm-btn")
submit.addEventListener("click", displayInput)
//when submit is clicked, console will display input in the 3 input boxes
function displayInput(event){
    console.log('\n', "email:", document.getElementById("email").value + ",", '\n', "name:", document.getElementById("name").value + ",", '\n', "message:", document.getElementById("msg").value)
}