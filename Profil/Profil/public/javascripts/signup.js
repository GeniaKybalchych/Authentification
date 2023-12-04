function handleSignUp() {
  event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérification de la longueur du mot de passe
    if (password.length < 6) {
        alert('Le mot de passe doit contenir au moins 6 caractères.');
        return; // Arrête la fonction si la condition n'est pas remplie
    }
  
    fetch('http://localhost:3000/signup', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), 
    })
    .then(response => {
      if (!response.ok) {

        return response.json().then(errorData => {
          throw new Error(errorData.message || 'Problème lors de l’inscription');
        });
      }
      return response.json();
    })
    .then(data => {
      // Redirection vers la page d'accueil après une inscription réussie
      window.location.href = '/'; 
    })
    .catch(error => {
      console.error('Erreur d’inscription:', error);
      // Affichez le message d'erreur dans un élément dédié à l'inscription
      const signupMessage = document.getElementById('signup-message');
      signupMessage.textContent = 'Erreur d’inscription : ' + error.message;
      signupMessage.style.display = 'block';
      signupMessage.style.color = 'red';
    });
  }