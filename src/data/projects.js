// Contenu basé sur des projets réels — ajuste les descriptions,
// dates et liens (GitHub / démo) selon tes propres dépôts.
export const categories = ['Tous', 'Cours LOG3500', 'Freelance', 'Jeu vidéo', 'Graphisme 3D'];

export const projets = [
  {
    id: 'meteo-dynamique',
    titre: 'Météo Dynamique',
    categorie: 'Cours LOG3500',
    resume: "Application web météo consommant l'API Open-Meteo en asynchrone, avec HTML5 sémantique et accessibilité soignée.",
    description:
      "Devoir 2 du cours LOG3500. Application affichant les prévisions météo en temps réel à partir de coordonnées géographiques, avec gestion des erreurs réseau, indicateurs de chargement et respect des standards d'accessibilité (labels, contrastes, structure sémantique).",
    stack: ['HTML5', 'CSS3', 'JavaScript (fetch/async-await)', 'Open-Meteo API'],
    lien: '#',
    depot: '#',
  },
  {
    id: 'portfolio-fullstack',
    titre: 'Portfolio Professionnel Full-Stack',
    categorie: 'Cours LOG3500',
    resume: 'Ce site même : SPA React/Vite avec routage, état global et backend Express.',
    description:
      "Projet de session du cours LOG3500 : une application monopage construite avec React, React Router v6 et Context API côté client, et un serveur Node.js/Express côté back-end pour la réception et la persistance du formulaire de contact. Déployée en continu sur Railway.",
    stack: ['React', 'Vite', 'React Router v6', 'Context API', 'Express'],
    lien: '#',
    depot: '#',
  },
  {
    id: 'operation-faucon',
    titre: 'Opération Faucon',
    categorie: 'Jeu vidéo',
    resume: 'Jeu de tir à la première personne dans le navigateur, propulsé par Three.js.',
    description:
      "Projet personnel : un FPS jouable directement dans le navigateur, avec assets 3D procéduraux, intelligence artificielle d'ennemis basique et contrôles adaptés au mobile. Exploration des limites du rendu 3D temps réel en environnement web.",
    stack: ['Three.js', 'JavaScript', 'WebGL'],
    lien: '#',
    depot: '#',
  },
  {
    id: 'scene-opengl',
    titre: 'Scène 3D Interactive (OpenGL)',
    categorie: 'Graphisme 3D',
    resume: 'Scène 3D animée avec éclairage de Phong, texture mapping et audio synchronisé.',
    description:
      "Travail réalisé dans le cadre du cours INF2300 (infographie). Implémentation d'une scène OpenGL avec VAO/VBO/IBO, shaders GLSL personnalisés, illumination de Phong, texture mapping et intégration sonore via pygame.",
    stack: ['Python', 'PyOpenGL', 'GLSL', 'pygame'],
    lien: '#',
    depot: '#',
  },
  {
    id: 'bien-en-soi',
    titre: 'Bien en Soi Massage',
    categorie: 'Freelance',
    resume: 'Site vitrine complet pour un centre de massothérapie québécois, avec catalogue produit géré par Supabase.',
    description:
      "Projet client réalisé sous la bannière Carl Web Studio. Site vitrine optimisé SEO avec données structurées, catalogue de produits administrable via Supabase, et hébergement sur GitHub Pages. Identité visuelle sur mesure (navy, corail, jaune, menthe, indigo).",
    stack: ['HTML/CSS', 'JavaScript', 'Supabase', 'SEO'],
    lien: '#',
    depot: '#',
  },
];
