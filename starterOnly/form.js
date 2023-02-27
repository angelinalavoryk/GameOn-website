// element correspondant au bouton 
const formValid = document.querySelector("#btn-submit");
// element pour l'envoi du formulaire 
const form = document.querySelector('form[name="reserve"]');
// Envoi du formulaire d'inscription
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validate();
  });

// Fonction qui valide le champ "prénom"
function validateFirstName() {
    const errorFirstName = document.querySelector("#errorFirst");
    const firstName = document.querySelector("#first");
    if (firstName.value.toString().trim().length >= 2) {
        errorFirstName.style.display = 'none';
        firstName.style.border = 'solid #279e7a 3px';
        return true; 
    } else {
        errorFirstName.style.display = "inline";
        errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
        errorFirstName.style.color = 'red';
        errorFirstName.style.fontSize = '0.8rem';
        errorFirstName.style.marginTop = '10px';
        firstName.style.border = 'solid red 2px';
        return false;
    };
  }
  
// Fonction qui valide le champ "nom de famille"
  function validateLastName() {
    const errorLastName = document.querySelector("#errorLast");
    const lastName = document.querySelector("#last");
    if (lastName.value.toString().trim().length >= 2) {
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
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (emailRegex.test(email.value)) {
        errorEmail.style.display = 'none';
        email.style.border = 'solid #279e7a 3px';
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
    const birthdateRegex = /^(19|20)\d{2}-(0\d|1[0-2])-([0-2]\d|3[0-1])$/;

    if (birthdateRegex.test(birthdate.value)) {
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
    const value = parseInt(quantity.value);
    if (value <= 99){
        errorQuantity.style.display = 'none';
        quantity.style.border = 'solid #279e7a 3px';
        return true;
    }
    else{
        errorQuantity.style.display = "inline";
        errorQuantity.innerText = "Une valeur numérique entre 0 et 99 doit etre saisie.";
        errorQuantity.style.color = 'red';
        errorQuantity.style.fontSize = '0.8rem';
        errorQuantity.style.marginTop = '10px';
        quantity.style.border = 'solid red 2px';
        return false;
    };
}


// Fonction qui valide le champ "villes de tournoi"
function validateLocation() {
      const errorLocation = document.querySelector("#errorLocation");
      const locationInputs = document.querySelectorAll('input[name="location"]');
      let isChecked = false;
      
      for (const locationInput of locationInputs) {
        if (locationInput.checked) {
          isChecked = true;
          break;
        }
      }
      if (isChecked) {
        errorLocation.innerText = '';
        return true;
      } else {
        errorLocation.style.display = "inline";
        errorLocation.innerText = 'Vous devez choisir une option. Veuillez sélectionner une ville.';
        errorLocation.style.color = 'red';
        errorLocation.style.fontSize = '0.8rem';
        errorLocation.style.marginTop = '10px';
        locationInputs.style.border = 'solid red 2px';
        return false;
      };
    }



// Fonction qui valide le champ "conditions d'utilisations"
function validateConditions(){
    const errorConditions = document.querySelector("#errorConditions");
    const conditions = document.querySelector("#checkbox1");
    if (conditions.checked == true){
        errorConditions.style.display = 'none';
        return true;
    }else {
        errorConditions.style.display = "inline";
        errorConditions.innerText = "Vous devez vérifier que vous acceptez les conditions d'utilisations.";
        errorConditions.style.color = 'red';
        errorConditions.style.fontSize = '0.8rem';
        errorConditions.style.marginTop = '10px';
        return false;
    }; 
}


// Fonction qui valide le formulaire et envoie le message de confirmation d'inscription
  function validate() {
      const confirmationValidation = document.querySelector("#confirm-modal");
      const formValidate = [];
    
      formValidate.push(validateFirstName());
      formValidate.push(validateLastName());
      formValidate.push(validateEmail());
      formValidate.push(validateBirthdate());
      formValidate.push(validateQuantity());
      formValidate.push(validateConditions());
      formValidate.push(validateLocation());

      if (formValidate.includes(true)) {
            form.style.display = 'none';
            confirmationValidation.style.display = 'block';
      };
    }




const confirmationCloseBtn = document.querySelector("#btn-closed"); // bouton "fermer"
document.querySelector("#btn-closed").addEventListener("click", closeModal);// Fermer le formulaire avec le message de validation 


