function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
//faire apparaitre le formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); 
const formData = document.querySelectorAll(".formData");
//fermer le formulaire
const closeBtn = document.querySelector(".close"); 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal event
closeBtn.addEventListener('click', closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal form
function closeModal(){
  modalbg.style.display = "none";
}


























