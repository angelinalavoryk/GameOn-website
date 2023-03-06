
// Fonction qui valide le champ "prénom"
function validateFirstName() {
    const errorFirstName = document.querySelector("#errorFirst");//message d'erreur si le champ 'prénom' n'est pas correctement rempli. Récupère l'élément du DOM avec id #errorFirst. Stock la valeur dans errorFirstName
    const firstName = document.querySelector("#first");//le champ input qui sera validé. récupère élément du DOM avec id #first et stock la valeur dans la variable firstName.
    if (firstName.value.trim().length >= 2) {//fonction vérifie s'il y a au moins 2 caractères et supprime les espaces avec methode trim(). 
        errorFirstName.style.display = 'none';//cache l'élément qui affiche le message d'erreur si la fonction retourne true.
        firstName.style.border = 'solid #279e7a 3px';//entoure l'élément d'une bordure verte.
        return true; //fonction retourne 'true' si la validation est réussi.

    } else {//si la validation échoue et le champ  ne comporte pas au moins 2 caractères afficher un message d'erreur.
        errorFirstName.style.display = "inline";
        errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";//affiche un message d'erreur si la fonction retourne 'false'.
        errorFirstName.style.color = 'red';
        errorFirstName.style.fontSize = '0.8rem';
        errorFirstName.style.marginTop = '10px';
        firstName.style.border = 'solid red 2px';//entoure la bordure en rouge pour signaler une erreur.
        return false; //la fonction retourne 'false' 
    };
  }
  
// Fonction qui valide le champ "nom de famille"
  function validateLastName() {
    const errorLastName = document.querySelector("#errorLast");
    const lastName = document.querySelector("#last");
    if (lastName.value.trim().length >= 2) {
        errorLastName.style.display = 'none';
        lastName.style.border = 'solid #279e7a 3px';
        return true;
    } else {
        errorLastName.style.display = 'inline';
        errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ nom.";
        errorLastName.style.color = 'red';
        errorLastName.style.fontSize = '0.8rem';
        errorLastName.style.marginTop = '10px';
        lastName.style.border = 'solid red 2px';
        return false;
    };
  }
  
// Fonction qui valide le champ "email"
  function validateEmail() {
    const errorEmail = document.querySelector("#errorEmail");
    const email = document.querySelector("#email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;                                                                        //expression régulière pour vérifier que l'email saisie est valide.

    if (emailRegex.test(email.value)) {                                                                                   //methode test() vérifie si email.value la valeur du champ email correspond à 'emailRegex';
        errorEmail.style.display = 'none';                                                                              //cache le message d'erreur en mettant la propriété 'display' de l'élément 'errorEmail' à 'none'.
        email.style.border = 'solid #279e7a 3px';                                                                       //ajoute bordure verte à l'élément 'email' en modifiant la propriété 'border'.
        return true;
    } else {
        errorEmail.style.display = "inline";
        errorEmail.innerText = "L'adresse email est incomplete. Veuillez entrer la bonne adresse.";
        errorEmail.style.color = 'red';
        errorEmail.style.fontSize = '0.8rem';
        errorEmail.style.marginTop = '10px';
        email.style.border = 'solid red 2px';
        return false;
    };
  }

  // Fonction qui valide le champ "date de naissance"
  function validateBirthdate() {
    const errorBirthDate = document.querySelector("#errorBirthdate");
    const birthdate = document.querySelector("#birthdate");
    const birthdateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;//fonction crée une expression régulière pour pour vérifier si la date est au bon format

    if (birthdateRegex.test(birthdate.value)) {//methode test permet de vérifier si la valeur saisie dans le champ respecte le format
        errorBirthDate.style.display = 'none';
        birthdate.style.border = 'solid #279e7a 3px';
        return true;
      } else {
        errorBirthDate.style.display = "inline";
        errorBirthDate.innerText = "Veuillez indiquer votre date de naissance.";
        errorBirthDate.style.color = 'red';
        errorBirthDate.style.fontSize = '0.8rem';
        errorBirthDate.style.marginTop = '10px';
        birthdate.style.border = 'solid red 2px';
        return false;
      };
  }

// Fonction qui valide le champ "nombre de concours"
function validateQuantity() {
    const errorQuantity = document.querySelector("#errorQuantity");
    const quantity = document.querySelector("#quantity");
    const value = parseInt(quantity.value);//récupère la valeur saisie dans le champ 'quantity' et stock la valeur dans la variable 'value'. La fonction parseInt() permet de convertir la valeur saisie en un nombre entier. 
    if (value <= 99){//vérifie si la valeur saisie de 'value' est inférieur ou égale à 99.
        errorQuantity.style.display = 'none';//masque le message d'erreurs (s'il était visible).
        quantity.style.border = 'solid #279e7a 3px';//si validation return true applique une bordure verte pour indiquer que la saisie est valide.
        return true;//renvoie 'true' si la validation est réussie
    }
    else{
        errorQuantity.style.display = "inline";//afficher le message d'erreur si la validation échoue
        errorQuantity.innerText = "Une valeur numérique entre 0 et 99 doit etre saisie.";
        errorQuantity.style.color = 'red';
        errorQuantity.style.fontSize = '0.8rem';
        errorQuantity.style.marginTop = '10px';
        quantity.style.border = 'solid red 2px';//applique une bordure rouge pour indiquer une erreur.
        return false;//si la validation echoue, renvoie 'false' pour indiquer que la saisie est invalide.
    };
}


// Fonction qui valide le champ du choix de "villes du tournoi"
function validateLocation() {
      const errorLocation = document.querySelector("#errorLocation");
      const locationInputs = document.querySelectorAll('input[name="location"]');//méthode querySelectorAll permet de récuperer tous les éléments de l'input qui ont un 'attribut' name et la valeur 'location'. Les élément sont stocké dans la varibale 'locationInputs'.
      let isChecked = false;//variable isChecked iniatialisé à 'false'
      
      for (const locationInput of locationInputs) {//boucle for-of permet de parcourir les éléments de la liste 'locationsInputs'. a chaque tour de boucle la variable 'locationInput' contient l'un des éléments de la liste
        if (locationInput.checked) {//propriété 'checked' permet de vérifier si l'une des villes est coché
          isChecked = true;//si une ville est coché la variable isChecked est mise à 'true'
          break;//et la boucle s'arrete
        }
      }
      if (isChecked) {//instruction if-else permet de vérifier la valeur de la variable isChecked. Si isChecked est 'true' alors une ville a été sélectionné
        errorLocation.style.display = 'none';//le message d'erreurLocation est caché
        return true;//renvoie true
      } else {//si isChecked est 'false' alors aucune ville n'a été sélectionné
        errorLocation.style.display = "inline";//afficher un message d'erreur en affectant du texte à errorLocation
        errorLocation.innerText = 'Vous devez choisir une option. Veuillez sélectionner une ville.';
        errorLocation.style.color = 'red';
        errorLocation.style.fontSize = '0.8rem';
        errorLocation.style.marginTop = '10px';
        locationInputs.style.border = 'solid red 2px';
        return false;//retourne 'false' pour indiquer une erreur de saisie
      };
    }



// Fonction qui valide le champ "conditions d'utilisations" checkbox
function validateConditions(){
    const errorConditions = document.querySelector("#errorConditions");//permet d'afficher un message d'erreur si l'utilisateur n'a pas coché la case. 
    const conditions = document.querySelector("#checkbox1");//une case à cocher qui permet à l'utilisateur d'accepter les conditions d'utilisation.
    if (conditions.checked == true){//instruction if-else vérifie si la case à cocher a été coché avec la propriété 'checked'
        errorConditions.style.display = 'none';//la case a été coché et donc le message d'erreur est masqué
        return true;//la fonction renvoie la valeur 'true' pour indiquer que le champ est valide. 
    }else {
        errorConditions.style.display = "inline";//message d'erreur
        errorConditions.innerText = "Vous devez vérifier que vous acceptez les conditions d'utilisations.";
        errorConditions.style.color = 'red';
        errorConditions.style.fontSize = '0.8rem';
        errorConditions.style.marginTop = '10px';
        return false;//la case n'a pas été coché et renvoie la valeur 'false'.
    }; 
}


// Fonction qui valide le formulaire et envoie le message de confirmation d'inscription
  function validate() {
      const confirmationValidation = document.querySelector("#confirm-modal");//récupère l'élément DOM qui contient le message de confirmation d'inscription. 
      const formValidate = [];//tableau vide permet de stocker des résultats de la validation des champs du formulaire. 
    
      formValidate.push(validateFirstName());//formValidate appelle validateFirstName et vérifie si le champs renvoie true ou false. validateFirstName renvoie le résulat de cette fonction. A l'aide de methode push la valeure est ajouté à la fin du tableau formValidate.
      formValidate.push(validateLastName());
      formValidate.push(validateEmail());
      formValidate.push(validateBirthdate());
      formValidate.push(validateQuantity());
      formValidate.push(validateConditions());
      formValidate.push(validateLocation());

      if (!formValidate.includes(false)) {//vérifier avec la methode includes si le tableau ne contient pas la valeur false. 
            form.style.display = 'none';//si pas de false, la fonction masque le formulaire
            confirmationValidation.style.display = 'block';//et affiche message de confirmation d'inscriptions "confirmationValidation".
      };
    }

// Validation des données du formulaire d'inscription avec le bouton "submit"
const form = document.querySelector('form[name="reserve"]'); //la méthode querySelector est appelé sur l'objet document qui représente le document HTML et récupère l'élément form avec attribut name et la valeur "réserve". L'élément de formulaire est stocké dans la variable "form".
form.addEventListener('submit', function (e) {  //le methode addEventListener ajoute un évenement à l'élément de forùulaire récupéré. L'évenement est décleché quand on click sur le bouton "submit" et donc la fonction anonyme est appelée. 
    e.preventDefault(); //empeche le comportement de l'évenement de soumission du formulaire et permet au reste du code de s'éxecuter.
    validate(); //appelle la fonction 'validate' qui effectue une validation des données du formulaire.
  });




const confirmationCloseBtn = document.querySelector("#btn-closed");                       //sélectionne élément du DOM avec son id #btn-closed. Bouton "fermer".
document.querySelector("#btn-closed").addEventListener("click", closeModal);              //ajout de l'évenement sur le bouton "fermer" qui permet de fermer le message de confirmation d'inscription. 


