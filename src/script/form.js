document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact-form');
  
    function showError(input, message) {
      const error = document.querySelector('#error-' + input.name);
      error.textContent = message;
      error.classList.add('visible');
      input.setAttribute('aria-describedby', 'error-' + input.name);
      input.setAttribute('aria-invalid', 'true');
    }
  
    function hideError(input) {
      const error = document.querySelector('#error-' + input.name);
      error.textContent = '';
      error.classList.remove('visible');
      input.removeAttribute('aria-describedby');
      input.setAttribute('aria-invalid', 'false');
    }
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      let hasErrors = false;
  
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      inputs.forEach(input => {
        if (input.value.trim() === '') {
          showError(input, `${input.labels[0].textContent} est obligatoire.`);
          hasErrors = true;
        } else if (input.type === 'email' && !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(input.value)) {
          showError(input, `L'adresse email n'est pas valide.`);
          hasErrors = true;
        } else if (input.type === 'tel' && !/^\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(input.value)) {
          showError(input, `Le numéro de téléphone n'est pas valide.`);
          hasErrors = true;
        } else {
          hideError(input);
        }
      });
  
      if (!hasErrors) {
        // Envoyer les données du formulaire et afficher un message de remerciement
        // En remplaçant l'action du formulaire par l'URL de votre script d'envoi d'email (ex: envoyer_email.php)
        // fetch(form.action, {
        //   method: form.method,
        //   body: new FormData(form)
        // }).then(response => {
        //   if (response.ok) {
        //     window.location.href = 'merci.html';
        //   } else {
        //     alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
        //   }
        // }).catch(error => {
        //   console.error(error);
        //   alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
        // });
  
        // Dans cet exemple, nous affichons simplement un message de remerciement sans envoyer les données du formulaire
        alert("Merci pour votre message ! J'ai bien pris en compte votre demande et je vous recontacterai très prochainement.");
      }
    });
  });
  