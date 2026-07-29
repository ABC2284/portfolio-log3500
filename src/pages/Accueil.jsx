import { Link } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext.jsx';
import { projets } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

const contenuTraduit = {
  fr: {
    eyebrow: "Portfolio d'équipe — LOG3500",
    titre: 'Nous construisons des applications web, du prototype au déploiement.',
    texte:
      "Une seule page, une navigation fluide, un état partagé et un serveur qui écoute. Ce portfolio est lui-même la démonstration de ce que nous savons faire.",
    voirProjets: 'Voir les projets',
    voirEquipe: "Rencontrer l'équipe",
    sectionLabel: 'Aperçu',
    sectionTitre: 'Projets récents',
  },
  en: {
    eyebrow: 'Team portfolio — LOG3500',
    titre: 'We build web applications, from prototype to deployment.',
    texte:
      "One single page, fluid navigation, shared state and a listening server. This portfolio is itself the demonstration of what we can do.",
    voirProjets: 'View projects',
    voirEquipe: 'Meet the team',
    sectionLabel: 'Preview',
    sectionTitre: 'Recent projects',
  },
};

export default function Accueil() {
  const { langue } = usePreferences();
  const contenu = contenuTraduit[langue];
  const projetsAperçu = projets.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="conteneur hero__grille">
          <div>
            <p className="hero__eyebrow">{contenu.eyebrow}</p>
            <h1 className="hero__titre">{contenu.titre}</h1>
            <p className="hero__texte">{contenu.texte}</p>
            <div className="hero__actions">
              <Link to="/projets" className="bouton bouton--principal">{contenu.voirProjets}</Link>
              <Link to="/equipe" className="bouton bouton--secondaire">{contenu.voirEquipe}</Link>
            </div>
          </div>

          {/* Signature visuelle : une fenêtre de navigateur stylisée qui
              affiche un extrait de code représentatif de l'architecture réelle */}
          <div className="fenetre-navigateur" role="img" aria-label="Aperçu du code source du serveur Express">
            <div className="fenetre-navigateur__barre">
              <span className="fenetre-navigateur__pastille" />
              <span className="fenetre-navigateur__pastille" />
              <span className="fenetre-navigateur__pastille" />
              <span className="fenetre-navigateur__url">server.js</span>
            </div>
            <pre className="fenetre-navigateur__contenu extrait-code">
{`app.post('/api/contact', async (req, res) => {
  const { nom, email, message } = req.body;

  if (!estValide(email)) {
    return res.status(400).json({
      success: false
    });
  }

  await enregistrer(messages);
  res.status(201).json({ success: true });
});`}
            </pre>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="conteneur">
          <div className="section__entete">
            <p className="section__label">{contenu.sectionLabel}</p>
            <h2>{contenu.sectionTitre}</h2>
          </div>
          <div className="grille-cartes">
            {projetsAperçu.map((projet) => (
              <ProjectCard key={projet.id} projet={projet} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
