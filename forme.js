const contenu = document.querySelector(".contenu")
const loginbtn = document.getElementById("loginbtn")
const Enregistrement = document.getElementById("enregistrebtn")

loginbtn.addEventListener("click", ()=>{
    contenu.classList.add("sign-in-mode");
})
Enregistrement.addEventListener("click", ()=>{
    contenu.classList.remove("sign-in-mode");
});