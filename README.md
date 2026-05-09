# GitHub Explorer

Приложение для поиска GitHub-пользователей и просмотра их репозиториев.

## Возможности

- Поиск с **debounce** — запросы не отправляются при каждом нажатии клавиши
- Карточка профиля: аватар, bio, локация, статистика
- Список репозиториев с сортировкой по звёздам, дате обновления и имени
- Фильтрация по языку программирования и скрытие форков
- Скелетон-лоадеры во время загрузки
- Обработка ошибок: пользователь не найден, превышен rate limit
- Адаптивная вёрстка

## Стек

- React
- TypeScript
- Vite
- GitHub REST API

## Запуск

```bash
git clone https://github.com/genssi/github-explorer
cd github-explorer
npm install
npm run dev
```

## Структура проекта

```
src/
├── components/
│   ├── SearchBar.tsx     # Поиск с debounce
│   ├── UserCard.tsx      # Карточка пользователя
│   ├── RepoCard.tsx      # Карточка репозитория
│   ├── RepoList.tsx      # Список с фильтрами и сортировкой
│   └── Skeleton.tsx      # Лоадеры
├── hooks/
│   ├── useGithub.ts      # Логика запросов к API
│   └── useDebounce.ts    # Хук для debounce
├── types/
│   └── github.ts         # TypeScript интерфейсы
└── utils/
    └── api.ts            # Функции для работы с GitHub API
```