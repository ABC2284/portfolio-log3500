import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const CHEMIN_MESSAGES = path.join(__dirname, 'messages.json');

app.use(express.json());

// Sert le build de production généré par `vite build` (dossier dist/)
app.use(express.static(path.join(__dirname, 'dist')));

function estEmailValide(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post('/api/contact', async (req, res) => {
  const { nom, email, message } = req.body || {};

  if (!nom || typeof nom !== 'string' || !nom.trim()) {
    return res.status(400).json({ success: false, error: "Le champ 'nom' est requis." });
  }
  if (!email || typeof email !== 'string' || !estEmailValide(email)) {
    return res.status(400).json({ success: false, error: "L'adresse email est invalide." });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    return res.status(400).json({ success: false, error: 'Le message doit contenir au moins 5 caractères.' });
  }

  const nouvelleEntree = {
    nom: nom.trim(),
    email: email.trim(),
    message: message.trim(),
    date: new Date().toISOString(),
  };

  try {
    let messagesExistants = [];
    try {
      const contenuBrut = await fs.readFile(CHEMIN_MESSAGES, 'utf-8');
      messagesExistants = JSON.parse(contenuBrut);
    } catch (erreurLecture) {
      // Le fichier n'existe pas encore au premier lancement : on part d'un tableau vide.
      messagesExistants = [];
    }

    messagesExistants.push(nouvelleEntree);
    await fs.writeFile(CHEMIN_MESSAGES, JSON.stringify(messagesExistants, null, 2));

    return res.status(201).json({ success: true, message: 'Message reçu, merci pour votre prise de contact !' });
  } catch (erreurEcriture) {
    console.error('Erreur lors de la persistance du message :', erreurEcriture);
    return res.status(500).json({ success: false, error: "Erreur serveur lors de l'enregistrement du message." });
  }
});

// Repli SPA : toute route non-API renvoie index.html pour laisser
// React Router gérer la navigation côté client (ex : /projets/xyz après un refresh).
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});
