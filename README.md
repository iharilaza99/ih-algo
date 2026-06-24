# iH Algo — Professional refactor

Ce dépôt contient un site statique éducatif (iH Algo). Cette branche contient une réorganisation pour rendre le projet plus lisible et prêt à la maintenance.

Organisation principale (branche professional-refactor):
- src/ : fichiers sources (HTML/JS/CSS)
- src/css/styles.css : feuille de style consolidée
- src/js/ : scripts JavaScript
- src/badge.html : outil d'édition et export de carte
- Français_Malagasy.pdf, drapeau.png, men.jpg, photo.jpeg : ressources et images (restent à la racine pour compatibilité)

Comment tester localement

1. Cloner le dépôt et basculer sur la branche:

   git checkout -b professional-refactor origin/professional-refactor

2. Servir le dossier racine (exemple avec Python):

   python -m http.server 8000

3. Ouvrir un navigateur sur:

   http://localhost:8000/src/index.html
   http://localhost:8000/src/badge.html

Remarques
- Les images et le PDF restent à la racine pour éviter la manipulation de fichiers binaires dans cette première passe. On peut déplacer les assets ensuite si vous le souhaitez.
- J'ai ajouté des fichiers README et .gitignore et conservé des copies de sauvegarde des fichiers originaux dans backup/original_files/.

Si vous validez, je peux :
- déplacer aussi les images dans `assets/images/` et mettre à jour tous les chemins ;
- ajouter une licence (MIT par défaut) ;
- ouvrir une pull request depuis cette branche vers la branche principale.
