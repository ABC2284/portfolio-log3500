export default function TeamCard({ membre, stats }) {
  const initiales = membre.nom
    .split(' ')
    .map((mot) => mot[0])
    .slice(0, 2)
    .join('');

  return (
    <article className="carte carte-membre">
      {membre.photo ? (
        <img src={membre.photo} alt={`Photo de ${membre.nom}`} className="carte-membre__photo" />
      ) : (
        <div className="carte-membre__photo carte-membre__photo--initiales" aria-hidden="true">
          {initiales}
        </div>
      )}
      <h3>{membre.nom}</h3>
      <p className="carte-membre__role">{membre.role}</p>
      <p>{membre.bio}</p>

      <div>
        {membre.competences.map((competence) => (
          <span key={competence} className="badge">{competence}</span>
        ))}
      </div>

      {stats && (
        <dl className="stats-github">
          <div>
            <dt>Dépôts publics</dt>
            <dd>{stats.public_repos}</dd>
          </div>
          <div>
            <dt>Abonnés</dt>
            <dd>{stats.followers}</dd>
          </div>
        </dl>
      )}
    </article>
  );
}
