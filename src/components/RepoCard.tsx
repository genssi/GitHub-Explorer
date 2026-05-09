import type { GithubRepo } from '../types/github';

const COLORS: Record<string, string> = {
  TypeScript:'#3178c6', JavaScript:'#f1e05a', Python:'#3572A5',
  CSS:'#563d7c', HTML:'#e34c26', Vue:'#41b883', Go:'#00ADD8',
  Rust:'#dea584', SCSS:'#c6538c', Shell:'#89e051',
};

export function RepoCard({ repo }: { repo: GithubRepo }) {
  const date = new Date(repo.updated_at).toLocaleDateString('ru-RU', { day:'numeric', month:'short', year:'numeric' });
  const color = repo.language ? COLORS[repo.language] || '#8b949e' : null;

  return (
    <a className="repo-card" href={repo.html_url} target="_blank" rel="noreferrer">
      <div className="repo-name-row">
        <span className="repo-name">{repo.name}</span>
        {repo.fork && <span className="fork-tag">fork</span>}
      </div>
      {repo.description && <p className="repo-desc">{repo.description}</p>}
      {repo.topics.length > 0 && (
        <div className="topics">
          {repo.topics.slice(0, 4).map(t => <span key={t} className="topic">{t}</span>)}
        </div>
      )}
      <div className="repo-footer">
        {color && <span className="lang"><span className="lang-dot" style={{ background: color }} />{repo.language}</span>}
        <span className="repo-stat">⭐ {repo.stargazers_count}</span>
        <span className="repo-stat">🍴 {repo.forks_count}</span>
        <span className="repo-date">{date}</span>
      </div>
    </a>
  );
}
