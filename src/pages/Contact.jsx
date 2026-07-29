import { useState } from 'react';

const valeursInitiales = { nom: '', email: '', message: '' };

function validerFormulaire(valeurs) {
  const erreurs = {};

  if (!valeurs.nom.trim()) {
    erreurs.nom = 'Le nom est requis.';
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!valeurs.email.trim()) {
    erreurs.email = "L'adresse email est requise.";
  } else if (!regexEmail.test(valeurs.email)) {
    erreurs.email = "Le format de l'adresse email est invalide.";
  }

  if (!valeurs.message.trim()) {
    erreurs.message = 'Le message ne peut pas être vide.';
  } else if (valeurs.message.trim().length < 5) {
    erreurs.message = 'Le message doit contenir au moins 5 caractères.';
  }

  return erreurs;
}

export default function Contact() {
  const [valeurs, setValeurs] = useState(valeursInitiales);
  const [erreurs, setErreurs] = useState({});
  const [statutEnvoi, setStatutEnvoi] = useState('repos'); // 'repos' | 'envoi' | 'succes' | 'echec'
  const [messageServeur, setMessageServeur] = useState('');

  function gererChangement(evenement) {
    const { name, value } = evenement.target;
    setValeurs((precedent) => ({ ...precedent, [name]: value }));
  }

  async function gererSoumission(evenement) {
    evenement.preventDefault();

    const erreursTrouvees = validerFormulaire(valeurs);
    setErreurs(erreursTrouvees);
    if (Object.keys(erreursTrouvees).length > 0) {
      return;
    }

    setStatutEnvoi('envoi');
    setMessageServeur('');

    try {
      const reponse = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valeurs),
      });

      const donnees = await reponse.json();

      if (!reponse.ok || !donnees.success) {
        setStatutEnvoi('echec');
        setMessageServeur(donnees.error || "Une erreur est survenue lors de l'envoi.");
        return;
      }

      setStatutEnvoi('succes');
      setMessageServeur(donnees.message || 'Message envoyé avec succès.');
      setValeurs(valeursInitiales);
    } catch (err) {
      setStatutEnvoi('echec');
      setMessageServeur('Impossible de joindre le serveur. Réessaie plus tard.');
    }
  }

  return (
    <section className="section">
      <div className="conteneur conteneur--etroit">
        <div className="section__entete">
          <p className="section__label">Contact</p>
          <h1>Discutons de votre projet</h1>
        </div>

        <form className="formulaire" onSubmit={gererSoumission} noValidate>
          <div className="champ">
            <label htmlFor="champ-nom">Nom</label>
            <input
              id="champ-nom"
              name="nom"
              type="text"
              value={valeurs.nom}
              onChange={gererChangement}
              aria-invalid={Boolean(erreurs.nom)}
              aria-describedby={erreurs.nom ? 'erreur-nom' : undefined}
            />
            {erreurs.nom && <span id="erreur-nom" className="erreur-champ">{erreurs.nom}</span>}
          </div>

          <div className="champ">
            <label htmlFor="champ-email">Adresse email</label>
            <input
              id="champ-email"
              name="email"
              type="email"
              value={valeurs.email}
              onChange={gererChangement}
              aria-invalid={Boolean(erreurs.email)}
              aria-describedby={erreurs.email ? 'erreur-email' : undefined}
            />
            {erreurs.email && <span id="erreur-email" className="erreur-champ">{erreurs.email}</span>}
          </div>

          <div className="champ">
            <label htmlFor="champ-message">Message</label>
            <textarea
              id="champ-message"
              name="message"
              value={valeurs.message}
              onChange={gererChangement}
              aria-invalid={Boolean(erreurs.message)}
              aria-describedby={erreurs.message ? 'erreur-message' : undefined}
            />
            {erreurs.message && <span id="erreur-message" className="erreur-champ">{erreurs.message}</span>}
          </div>

          <button type="submit" className="bouton bouton--principal" disabled={statutEnvoi === 'envoi'}>
            {statutEnvoi === 'envoi' ? 'Envoi en cours…' : 'Envoyer le message'}
          </button>

          {/* aria-live annonce le résultat aux lecteurs d'écran sans
              qu'un focus manuel soit nécessaire, et sans recharger la page */}
          <div aria-live="polite">
            {statutEnvoi === 'succes' && (
              <p className="message-etat message-etat--succes">{messageServeur}</p>
            )}
            {statutEnvoi === 'echec' && (
              <p className="message-etat message-etat--erreur">{messageServeur}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
