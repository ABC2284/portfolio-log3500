import { createContext, useContext, useEffect, useState } from 'react';

/**
 * PreferencesContext centralise deux préférences utilisateur partagées
 * par toute l'application : le thème (sombre/clair) et la langue (fr/en).
 *
 * Pourquoi Context API et pas des props ?
 * Ces deux valeurs sont utilisées par des composants très éloignés dans
 * l'arbre (Header, Footer, pages) : les faire descendre par props obligerait
 * à traverser des composants qui n'en ont pas besoin ("prop drilling").
 * Le Context API permet à n'importe quel composant de les lire directement
 * via le hook usePreferences().
 */
const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState('sombre');
  const [langue, setLangue] = useState('fr');

  // Le thème est appliqué comme attribut sur <html>, ce qui permet
  // au CSS (voir index.css : [data-theme='sombre'] / [data-theme='clair'])
  // de basculer toutes les couleurs sans dupliquer de classes partout.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((valeurActuelle) => (valeurActuelle === 'sombre' ? 'clair' : 'sombre'));
  }

  function toggleLangue() {
    setLangue((valeurActuelle) => (valeurActuelle === 'fr' ? 'en' : 'fr'));
  }

  const valeur = { theme, toggleTheme, langue, toggleLangue };

  return (
    <PreferencesContext.Provider value={valeur}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const contexte = useContext(PreferencesContext);
  if (!contexte) {
    throw new Error('usePreferences() doit être appelé à l\'intérieur de <PreferencesProvider>');
  }
  return contexte;
}
