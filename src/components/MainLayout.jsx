import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function MainLayout() {
  return (
    <div className="app-shell">
      {/* Lien d'évitement : premier élément focusable, permet de sauter
          directement au contenu principal au clavier ou au lecteur d'écran */}
      <a href="#contenu-principal" className="lien-evitement">
        Aller au contenu principal
      </a>
      <Header />
      <main id="contenu-principal" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
