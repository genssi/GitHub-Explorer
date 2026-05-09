import { useState, useMemo } from 'react';
import type { GithubRepo, SortOption } from '../types/github';
import { RepoCard } from './RepoCard';

export function RepoList({ repos }: { repos: GithubRepo[] }) {
  const [sort, setSort] = useState<SortOption>('stars');
  const [hideForks, setHideForks] = useState(false);
  const [lang, setLang] = useState('');

  const languages = useMemo(() => {
    const set = new Set(repos.map(r => r.language).filter(Boolean) as string[]);
    return Array.from(set).sort();
  }, [repos]);

  const list = useMemo(() => {
    let r = hideForks ? repos.filter(r => !r.fork) : repos;
    if (lang) r = r.filter(r => r.language === lang);
    return [...r].sort((a, b) => {
      if (sort === 'stars') return b.stargazers_count - a.stargazers_count;
      if (sort === 'updated') return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      return a.name.localeCompare(b.name);
    });
  }, [repos, sort, hideForks, lang]);

  return (
    <div className="repo-section">
      <div className="filters">
        <span className="repo-count">{list.length} репозиториев</span>
        <div className="filter-controls">
          <select className="select" value={lang} onChange={e => setLang(e.target.value)}>
            <option value="">Все языки</option>
            {languages.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <select className="select" value={sort} onChange={e => setSort(e.target.value as SortOption)}>
            <option value="stars">По звёздам</option>
            <option value="updated">По дате</option>
            <option value="name">По названию</option>
          </select>
          <label className="checkbox-label">
            <input type="checkbox" checked={hideForks} onChange={e => setHideForks(e.target.checked)} />
            Скрыть форки
          </label>
        </div>
      </div>
      <div className="repos-grid">
        {list.map(r => <RepoCard key={r.id} repo={r} />)}
      </div>
    </div>
  );
}
