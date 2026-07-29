// Équipe de 3 (section 2.A du PDF de consignes) : chaque membre correspond
// à un "Ensemble de tâches" précis, évalué individuellement à l'oral.
// ⚠️ Remplace chaque `githubLogin` par le vrai identifiant GitHub de la
// personne concernée — sinon la page Équipe affichera une erreur de fetch
// pour cette carte.
export const membresEquipe = [
  {
    id: 'julmice-carl-vert',
    nom: 'Julmice Carl Vert',
    role: 'Développement Serveur, API & DevOps',
    bio: "Responsable de l'Ensemble de tâches 3 : serveur Node.js/Express, route API POST /api/contact, persistance des messages en JSON, gestion du dépôt Git (revues, fusions) et déploiement continu sur Railway.",
    githubLogin: 'ABC2284',
    photo: null,
    competences: ['HTML5 sémantique', 'CSS Grid / Flexbox', 'Accessibilité (a11y)', 'Design de thème'],
  },
  {
    id: 'ulysse-eve-lordine',
    nom: 'Ulysse Eve Lordine',
    role: 'Architecture Client, Composants & Routage React',
    bio: "Responsable de l'Ensemble de tâches 2 : initialisation du projet avec Vite, développement des composants React réutilisables (cartes, menus, boutons), configuration de React Router v6, et validation dynamique côté client du formulaire de contact.",
    githubLogin: 'evelordineulysse-hue',
    photo: '/equipe/ulysse-eve.jpeg',
    competences: ['React', 'Vite', 'React Router v6', 'Validation de formulaires'],
  },
  {
    id: 'beneche-alendear-yves-ckerry',
    nom: 'Bénèche Alendear Yves-Ckerry',
    role: 'Intégration Sémantique, Charte Visuelle & Accessibilité',
    bio: "Responsable de l'Ensemble de tâches 1 : structure HTML5 sémantique de tous les composants, mise en page responsive en CSS pur (Flexbox/Grid, sans framework), règles d'accessibilité numérique (contrastes, ARIA, labels) et bascule des modes sombre/clair.",
    githubLogin: 'yvesckerry',
    photo: '/equipe/beneche-alendear.jpeg',
    competences: ['Node.js / Express', 'API REST', 'Git / GitHub', 'Déploiement Railway'],
  },
];
