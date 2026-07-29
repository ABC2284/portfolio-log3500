import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx';
import Accueil from './pages/Accueil.jsx';
import Equipe from './pages/Equipe.jsx';
import Projets from './pages/Projets.jsx';
import ProjetDetail from './pages/ProjetDetail.jsx';
import Contact from './pages/Contact.jsx';
import IntrouvablePage from './pages/IntrouvablePage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Accueil />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="projets" element={<Projets />} />
        <Route path="projets/:projetId" element={<ProjetDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<IntrouvablePage />} />
      </Route>
    </Routes>
  );
}
