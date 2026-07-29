import { useEffect, useState } from 'react';
import { membresEquipe } from '../data/team.js';
import TeamCard from '../components/TeamCard.jsx';

export default function Equipe() {
  // statsParMembre associe chaque githubLogin à ses statistiques réelles.
  const [statsParMembre, setStatsParMembre] = useState({});
  const [enChargement, setEnChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    let annule = false;

    async function chargerStatsGitHub() {
      setEnChargement(true);
      setErreur(null);
      try {
        // Une requête par membre — l'API publique de GitHub ne nécessite
        // aucune clé pour ces informations de profil.
        const resultats = await Promise.all(
          membresEquipe.map(async (membre) => {
            const reponse = await fetch(`https://api.github.com/users/${membre.githubLogin}`);
            if (!reponse.ok) {
              throw new Error(`GitHub a répondu ${reponse.status} pour ${membre.githubLogin}`);
            }
            const donnees = await reponse.json();
            return [membre.githubLogin, donnees];
          })
        );

        if (!annule) {
          setStatsParMembre(Object.fromEntries(resultats));
        }
      } catch (err) {
        if (!annule) {
          setErreur("Impossible de récupérer les statistiques GitHub pour le moment.");
        }
      } finally {
        if (!annule) {
          setEnChargement(false);
        }
      }
    }

    chargerStatsGitHub();

    // Nettoyage : si le composant est démonté avant la fin du fetch,
    // on évite de mettre à jour un état qui n'existe plus.
    return () => {
      annule = true;
    };
  }, []);

  return (
    <section className="section">
      <div className="conteneur">
        <div className="section__entete">
          <p className="section__label">L'équipe</p>
          <h1>Qui construit ce portfolio</h1>
        </div>

        {enChargement && <p className="indicateur-chargement">Chargement des statistiques GitHub…</p>}
        {erreur && <p className="message-etat message-etat--erreur">{erreur}</p>}

        <div className="grille-cartes">
          {membresEquipe.map((membre) => (
            <TeamCard
              key={membre.id}
              membre={membre}
              stats={statsParMembre[membre.githubLogin]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
