let Enter = document.getElementById("enter")
let TeamEl = document.getElementById("team-el")
let SubmitEl = document.getElementById("submit")
let Register = document.getElementById("register")
let start = []

SubmitEl.addEventListener("click", function(){
    Register.textContent = (Enter.value)
start.push(Register.textContent)
    //start.push([Enter.value])
    //Register=  start.push((Enter.value))
})

