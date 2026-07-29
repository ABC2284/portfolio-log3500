import { Link } from 'react-router-dom';

export default function IntrouvablePage() {
  return (
    <section className="section">
      <div className="conteneur" style={{ textAlign: 'center' }}>
        <p className="section__label">Erreur 404</p>
        <h1>Cette page n'existe pas.</h1>
        <p>L'adresse demandée ne correspond à aucune route de l'application.</p>
        <Link to="/" className="bouton bouton--principal">Retour à l'accueil</Link>
      </div>
    </section>
  );
}
