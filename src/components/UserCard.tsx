import type { GithubUser } from '../types/github';

export function UserCard({ user }: { user: GithubUser }) {
  const year = new Date(user.created_at).getFullYear();
  return (
    <div className="user-card">
      <img className="avatar" src={user.avatar_url} alt={user.login} />
      <div className="user-info">
        <div className="user-top">
          <div>
            <h2 className="user-name">{user.name || user.login}</h2>
            <a className="user-login" href={user.html_url} target="_blank" rel="noreferrer">@{user.login}</a>
          </div>
          <span className="badge">с {year}</span>
        </div>
        {user.bio && <p className="user-bio">{user.bio}</p>}
        <div className="user-meta">
          {user.location && <span className="meta-item">📍 {user.location}</span>}
          {user.blog && (
            <a className="meta-item meta-link"
              href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
              target="_blank" rel="noreferrer">🔗 {user.blog}</a>
          )}
        </div>
        <div className="stats">
          <div className="stat"><span className="stat-val">{user.public_repos}</span><span className="stat-lbl">репозиториев</span></div>
          <div className="stat"><span className="stat-val">{user.followers.toLocaleString()}</span><span className="stat-lbl">подписчиков</span></div>
          <div className="stat"><span className="stat-val">{user.following}</span><span className="stat-lbl">подписок</span></div>
        </div>
      </div>
    </div>
  );
}
