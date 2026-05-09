import type { GithubUser, GithubRepo } from '../types/github';

const BASE = 'https://api.github.com';

export async function fetchUser(username: string): Promise<GithubUser> {
  const res = await fetch(`${BASE}/users/${username}`);
  if (res.status === 404) throw new Error('Пользователь не найден');
  if (res.status === 403) throw new Error('Превышен лимит запросов. Подожди минуту.');
  if (!res.ok) throw new Error('Ошибка загрузки пользователя');
  return res.json();
}

export async function fetchRepos(username: string): Promise<GithubRepo[]> {
  const res = await fetch(`${BASE}/users/${username}/repos?per_page=100`);
  if (!res.ok) throw new Error('Ошибка загрузки репозиториев');
  return res.json();
}
