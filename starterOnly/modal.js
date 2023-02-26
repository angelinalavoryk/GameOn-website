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
const modalBtn = document.querySelectorAll(".modal-btn"); //faire apparaitre le formulaire
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close"); //fermer le formulaire

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


























