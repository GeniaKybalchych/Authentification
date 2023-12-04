function handleLogout() {
  // Supposons que 'isLoggedIn' est une fonction qui vérifie si l'utilisateur est connecté.
  if (!isLoggedIn()) {
      alert("Vous n'êtes pas connecté.");
      return;
  }

  console.log('Déconnexion en cours:');

  fetch('http://localhost:3000/signout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Problème lors de la déconnexion');
    }
    return response.json();
  })
  .then(data => {
    console.log('Déconnexion réussie:', data);
    alert('Déconnexion réussie!'); // Affiche un popup de confirmation de déconnexion.
    // Supprimez les informations de l'utilisateur connecté du stockage.
    clearUserSession(); 
    // Redirection vers la page de connexion ou la page d'accueil publique après la déconnexion réussie
    window.location.href = '/'; 
  })
  .catch(error => {
    console.error('Erreur de déconnexion:', error);
    alert('Erreur de déconnexion: ' + error.message); // Affiche un popup d'erreur.
  });
}

function isLoggedIn() {
 
  const userToken = localStorage.getItem('userToken');
  return userToken !== null;
  
}

function clearUserSession() {
  // Effacer le token de session du LocalStorage
  localStorage.removeItem('userToken');
  
}