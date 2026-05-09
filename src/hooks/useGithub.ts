import { useState, useCallback } from 'react';
import type { GithubUser, GithubRepo } from '../types/github';
import { fetchUser, fetchRepos } from '../utils/api';

interface State {
  user: GithubUser | null;
  repos: GithubRepo[];
  loading: boolean;
  error: string | null;
}

export function useGithub() {
  const [state, setState] = useState<State>({
    user: null,
    repos: [],
    loading: false,
    error: null,
  });

  const search = useCallback(async (username: string) => {
    if (!username.trim()) return;
    setState(s => ({ ...s, loading: true, error: null }));
    try {
      const [user, repos] = await Promise.all([fetchUser(username), fetchRepos(username)]);
      setState({ user, repos, loading: false, error: null });
    } catch (e) {
      setState(s => ({
        ...s, user: null, repos: [], loading: false,
        error: e instanceof Error ? e.message : 'Неизвестная ошибка',
      }));
    }
  }, []);

  return { ...state, search };
}
