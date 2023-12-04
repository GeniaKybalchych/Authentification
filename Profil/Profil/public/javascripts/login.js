function handleLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:3000/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => {
    if (response.ok) {
      return response.json(); // Si la connexion est réussie, continuez normalement.
    } else {
      return response.json().then(errorData => {
        // Si la connexion échoue, utilisez les données d'erreur pour afficher un popup.
        alert(errorData.message || 'L’utilisateur n’existe pas ou le mot de passe est incorrect.');
        // Ici, vous pourriez retourner 'null' ou gérer différemment si nécessaire.
        return null;
      });
    }
  })
  .then(data => {
    if (data) {
      // Si 'data' n'est pas 'null', cela signifie que la connexion a été réussie.
      window.location.href = '/'; // Remplacez '/home' par l'URL de votre page d'accueil.
    }
  })
  .catch(error => {
    // Gérer les erreurs non liées à la connexion, telles que les problèmes de réseau.
    console.error('Erreur:', error);
  });
}