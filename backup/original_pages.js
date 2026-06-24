function toggleMenu() { const menu = document.getElementById("menu"); menu.classList.toggle("show"); }

const sections = {
recu: 
  `<div class="container">
    <h2>Contôle Récu</h2>
    <input placeholder="Identifiant du recu" required type="code" pattern="[0-9]{12}" id="id">
    <input placeholder="Code de recu" required type="code" pattern="[0-9]{12}" id="code">
    <button class="btn" onclick="controle()">Valider</button>
  </div>`,
biblio: `<h2>Bibliothèque</h2><p>Ressources PDF, livres numériques.</p>
  <a href="Français_Malagasy.pdf">Français Malagasy<a>`,



info: "<h2>Informatique</h2><p>Programmation, web, algorithmique.</p>",
eco: 
      '<div class="container">'+
      "<h2>Économie</h2><p>Notions de base, micro/macroéconomie.</p>"+
      "<h1>Plan d'ammortismemt a taux fixe avec remboursement constant</h1>"+
      '<h1>Details du credit</h1>'+
      '<input placeholder="Montant du pret en ariary" required type="number" id="pretInput" value="5000000">'+
      '<input placeholder='+'"'+"Taux d'interet annuel en %"+'"'+'required type="number" id="taux_interet" value="15">'+
      '<input placeholder='+'"'+"Taux d'assurance en %"+'"'+' required type="number" id="taux_assurance" value="0.80">'+
      '<input placeholder="Periodicite durant remboursement" required type="text" id="" value="Mensuel">'+
      '<input placeholder="Date du prett" required type="date" id="date_pret" value="05-05-2025"/>'+
      '<input placeholder="Montant du remboursement en ariary" required type="text" id="rembInput" value="140988">'+
      '<button class="btn" onclick="amortissememt()">Afficher</button>'+
      '</div>',
gestion: 
      "<h2>Gestion</h2><p>Management, finances et comptabilité.</p>"+
      '<input type="text" name="username" placeholder="Nom d utilisateur" required>',
loisirs: "<h2>Loisirs</h2><p>Culture, jeux, musique, détente.</p>"
};

function showContent(section) { document.getElementById("content").innerHTML = sections[section]; }

document.addEventListener('keydown', function(event) {
    // Vérifie si Ctrl ou Cmd est enfoncé et que la touche 'P' est enfoncée
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault(); // Empêche l'action par défaut (impression)
        alert('L\'impression est désactivée sur cette page.'); // Affiche un message
    }
});
