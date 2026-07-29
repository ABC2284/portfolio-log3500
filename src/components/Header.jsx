import { NavLink, useLocation } from 'react-router-dom';
import { usePreferences } from '../context/PreferencesContext.jsx';

const libellesTraduction = {
  fr: { accueil: 'Accueil', equipe: 'Équipe', projets: 'Projets', contact: 'Contact' },
  en: { accueil: 'Home', equipe: 'Team', projets: 'Projects', contact: 'Contact' },
};

export default function Header() {
  const { theme, toggleTheme, langue, toggleLangue } = usePreferences();
  const location = useLocation();
  const libelles = libellesTraduction[langue];

  const classeNav = ({ isActive }) => (isActive ? 'nav-lien nav-lien--actif' : 'nav-lien');

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="header-identite">
          <NavLink to="/" className="logo" aria-label="Retour à l'accueil">
            Portfolio<span>.</span>
          </NavLink>
          {/* Repère façon barre d'adresse : renforce visuellement le fait
              que la navigation change réellement l'URL (React Router v6) */}
          <code className="repere-url" aria-hidden="true">
            {location.pathname === '/' ? '/' : location.pathname}
          </code>
        </div>

        <nav aria-label="Navigation principale">
          <ul className="nav-liste">
            <li><NavLink to="/" end className={classeNav}>{libelles.accueil}</NavLink></li>
            <li><NavLink to="/equipe" className={classeNav}>{libelles.equipe}</NavLink></li>
            <li><NavLink to="/projets" className={classeNav}>{libelles.projets}</NavLink></li>
            <li><NavLink to="/contact" className={classeNav}>{libelles.contact}</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="bouton-icone"
            onClick={toggleLangue}
            aria-label="Changer la langue d'affichage"
          >
            {langue === 'fr' ? 'FR' : 'EN'}
          </button>
          <button
            type="button"
            className="bouton-icone"
            onClick={toggleTheme}
            aria-pressed={theme === 'sombre'}
            aria-label="Basculer entre le mode sombre et le mode clair"
          >
            {theme === 'sombre' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
