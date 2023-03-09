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
const closeBtn = document.querySelector(".close"); //récupère élément du DOM avec la methode "query selector" par la classe de l'élément

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal event
closeBtn.addEventListener('click', closeModal);//la methode "addEventListener" attache un évenement du 'click' sur closeBtn. Quand l'utilisateur click sur la croix pour fermer, la fonction "closeModal" est appelé.
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal form
function closeModal(){
  modalbg.style.display = "none";//la fonction modifie la propriété display de l'élément 'modalBg' en none, et fait disparaitre le contenu du formulaire.
}
































