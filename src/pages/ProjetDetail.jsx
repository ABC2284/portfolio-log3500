import { Link, useParams } from 'react-router-dom';
import { projets } from '../data/projects.js';

export default function ProjetDetail() {
  const { projetId } = useParams();
  const projet = projets.find((p) => p.id === projetId);

  if (!projet) {
    return (
      <section className="section">
        <div className="conteneur">
          <h1>Projet introuvable</h1>
          <p>Aucun projet ne correspond à « {projetId} ».</p>
          <Link to="/projets" className="bouton bouton--secondaire">← Retour à la galerie</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="conteneur conteneur--etroit">
        <Link to="/projets" className="lien-retour">← Retour à la galerie</Link>
        <p className="section__label">{projet.categorie}</p>
        <h1>{projet.titre}</h1>
        <p className="projet-detail__description">{projet.description}</p>

        <h2 className="projet-detail__sous-titre">Technologies utilisées</h2>
        <div>
          {projet.stack.map((techno) => (
            <span key={techno} className="badge">{techno}</span>
          ))}
        </div>

        <div className="hero__actions projet-detail__actions">
          {projet.lien && projet.lien !== '#' && (
            <a href={projet.lien} className="bouton bouton--principal" target="_blank" rel="noreferrer">
              Voir la démo
            </a>
          )}
          {projet.depot && projet.depot !== '#' && (
            <a href={projet.depot} className="bouton bouton--secondaire" target="_blank" rel="noreferrer">
              Dépôt GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
