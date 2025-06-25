// Enregistrement du compte client
document.getElementById("form-creation")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = this.nom.value;
  const email = this.email.value;
  const motdepasse = this.motdepasse.value;

  const compte = { nom, email, motdepasse };
  localStorage.setItem("compteClient", JSON.stringify(compte));
  alert("Compte client créé avec succès !");
  this.reset();
});

// Mise à jour du profil
document.getElementById("form-update")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.email.value;
  const newName = this.newName.value;
  const newPassword = this.newPassword.value;

  let compte = JSON.parse(localStorage.getItem("compteClient"));
  if (compte && compte.email === email) {
    if (newName) compte.nom = newName;
    if (newPassword) compte.motdepasse = newPassword;
    localStorage.setItem("compteClient", JSON.stringify(compte));
    alert("Profil mis à jour !");
  } else {
    alert("Aucun compte trouvé avec cet email.");
  }
  this.reset();
});

// Enregistrement d'une demande de service
document.getElementById("form-service")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = this.nom.value;
  const email = this.email.value;
  const service = this.service.value;
  const message = this.message.value;

  const demande = { nom, email, service, message };
  const demandes = JSON.parse(localStorage.getItem("demandesService")) || [];
  demandes.push(demande);
  localStorage.setItem("demandesService", JSON.stringify(demandes));

  alert("Votre demande a été envoyée !");
  this.reset();
});
