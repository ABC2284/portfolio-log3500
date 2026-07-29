# Portfolio Professionnel Full-Stack — LOG3500

## 1. Installation locale

```bash
npm install          # installe React, Express, Vite, React Router
npm run dev           # lance le serveur de développement Vite (http://localhost:5173)
```

## 2. Build de production + lancement du serveur Express

```bash
npm run build         # génère le dossier dist/ (build optimisé Vite)
npm start             # lance server.js, qui sert dist/ et écoute sur process.env.PORT
```

## 3. Arborescence du projet

```
portfolio-session/
├── index.html                 # point d'entrée HTML (charge les polices + src/main.jsx)
├── server.js                  # serveur Express : sert dist/ + route POST /api/contact
├── package.json                # scripts start/build requis par la consigne
├── vite.config.js
├── messages.json               # généré automatiquement à la 1ère soumission de formulaire
└── src/
    ├── main.jsx                 # monte React, enveloppe App dans BrowserRouter + PreferencesProvider
    ├── App.jsx                  # déclaration des routes (React Router v6)
    ├── index.css                # tous les styles (variables de thème, grid/flexbox)
    ├── context/
    │   └── PreferencesContext.jsx   # Context API : thème sombre/clair + langue fr/en
    ├── components/
    │   ├── MainLayout.jsx        # Header + <Outlet/> + Footer (partagé par toutes les pages)
    │   ├── Header.jsx            # navigation + boutons thème/langue
    │   ├── Footer.jsx
    │   ├── TeamCard.jsx          # carte de présentation d'un membre + stats GitHub
    │   └── ProjectCard.jsx       # carte de projet (galerie + accueil)
    ├── pages/
    │   ├── Accueil.jsx
    │   ├── Equipe.jsx            # fetch asynchrone de l'API GitHub (useEffect)
    │   ├── Projets.jsx           # filtrage dynamique par catégorie (useState)
    │   ├── ProjetDetail.jsx      # route dynamique /projets/:projetId (useParams)
    │   ├── Contact.jsx           # validation client + POST /api/contact
    │   └── IntrouvablePage.jsx   # route "*" (404)
    └── data/
        ├── team.js               # à personnaliser : nom, bio, githubLogin
        └── projects.js            # à personnaliser : tes vrais projets/liens
```

## 4. Ce qu'il te reste à faire avant la remise

1. **Personnaliser `src/data/team.js`** : ton vrai nom, ta bio, et surtout ton **identifiant GitHub réel** (`githubLogin`) — sinon la page Équipe affichera une erreur de fetch.
2. **Personnaliser `src/data/projects.js`** : vérifier/adapter les descriptions, ajouter les vrais liens `depot` (GitHub) et `lien` (démo si disponible).
3. **Créer le dépôt GitHub public**, pousser ce code.
4. **Déployer sur Railway** en connectant le dépôt (build automatique via `npm run build`, démarrage via `npm start`).
5. **Rédiger le rapport PDF** (voir section 5).
6. **Préparer la soutenance orale** : sois capable d'expliquer chaque fichier ci-dessus dans tes mots — le prof va poser des questions précises.

## 5. Squelette pour le rapport technique (à compléter toi-même)

Le rapport doit démontrer *ta* compréhension — voici la structure attendue par la grille d'évaluation :

- **Architecture du code** : décris le rôle de chaque dossier (voir arborescence ci-dessus) dans tes mots.
- **Schéma des composants** : un diagramme simple montrant `App → MainLayout → (Header, Outlet, Footer)` puis les pages.
- **Choix techniques justifiés** : pourquoi Context API plutôt que prop drilling ? Pourquoi `textContent`/JSX plutôt que `innerHTML` (sécurité XSS) ?
- **Preuves de conformité W3C** : capture d'écran du validateur https://validator.w3.org/ sur ton URL Railway déployée.
- **Captures d'écran** : mode sombre, mode clair, formulaire rempli, message de confirmation.

## 6. Points d'attention pour la soutenance (12 minutes)

- Sois prêt à ouvrir `PreferencesContext.jsx` et expliquer pourquoi `useContext` lève une erreur si utilisé hors provider.
- Sois prêt à expliquer la différence entre le routage côté client (`React Router`) et pourquoi `server.js` a une route `app.get('*', ...)` de repli (sinon un rafraîchissement sur `/projets/xyz` renverrait une erreur 404 côté serveur).
- Sois prêt à expliquer la validation à deux niveaux : côté client (`Contact.jsx`, pour l'expérience utilisateur) ET côté serveur (`server.js`, indispensable car le client ne doit jamais être une source de confiance).
