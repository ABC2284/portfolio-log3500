import { Link } from 'react-router-dom';

export default function ProjectCard({ projet }) {
  return (
    <article className="carte carte-projet">
      <span className="badge">{projet.categorie}</span>
      <h3>{projet.titre}</h3>
      <p>{projet.resume}</p>
      <div className="carte-projet__stack">
        {projet.stack.map((techno) => (
          <span key={techno} className="mini-tag">{techno}</span>
        ))}
      </div>
      <Link to={`/projets/${projet.id}`} className="lien-detail">
        Voir les détails →
      </Link>
    </article>
  );
}
