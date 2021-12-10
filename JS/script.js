//when toggled, use modeSwap function
toggleMode = document.querySelector(".toggle").addEventListener("click", modeSwap)
//dark mode function
function modeSwap(event){
    document.body.classList.toggle("dark-theme")
}