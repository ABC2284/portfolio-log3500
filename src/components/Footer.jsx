export default function Footer() {
  const anneeCourante = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="conteneur site-footer__inner">
        <p>© {anneeCourante} — Portfolio Professionnel. Projet LOG3500, ISTEAH.</p>
        <p className="site-footer__stack">
          Construit avec React · Vite · Express · Déployé sur Railway
        </p>
      </div>
    </footer>
  );
}
