import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

interface Props {
  onSearch: (q: string) => void;
  loading: boolean;
}

export function SearchBar({ onSearch, loading }: Props) {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, 500);

  useEffect(() => {
    if (debounced.trim()) onSearch(debounced);
  }, [debounced]);

  return (
    <div className="search-wrap">
      <svg className="search-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        className="search-input"
        type="text"
        placeholder="Введи GitHub username..."
        value={value}
        onChange={e => setValue(e.target.value)}
        autoFocus
      />
      {loading && <div className="spinner" />}
    </div>
  );
}
