import { useState } from 'react';
import { categories, projets } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projets() {
  const [categorieActive, setCategorieActive] = useState('Tous');

  const projetsFiltres =
    categorieActive === 'Tous'
      ? projets
      : projets.filter((projet) => projet.categorie === categorieActive);

  return (
    <section className="section">
      <div className="conteneur">
        <div className="section__entete">
          <p className="section__label">Réalisations</p>
          <h1>Galerie de projets</h1>
        </div>

        <div className="filtres" role="group" aria-label="Filtrer les projets par catégorie">
          {categories.map((categorie) => (
            <button
              key={categorie}
              type="button"
              className="filtre-bouton"
              aria-pressed={categorieActive === categorie}
              onClick={() => setCategorieActive(categorie)}
            >
              {categorie}
            </button>
          ))}
        </div>

        {projetsFiltres.length === 0 ? (
          <p>Aucun projet dans cette catégorie pour le moment.</p>
        ) : (
          <div className="grille-cartes">
            {projetsFiltres.map((projet) => (
              <ProjectCard key={projet.id} projet={projet} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
