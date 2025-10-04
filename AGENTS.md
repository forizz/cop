# Agent Guidelines for Trivia Quiz App

## Commands

- **Build**: `pnpm build` (or `npm run build`)
- **Dev server**: `pnpm dev` (or `npm run dev`)
- **Typecheck**: `pnpm typecheck` (or `npm run typecheck`)
- **Lint**: `npx eslint .` (ESLint configured with TypeScript + React rules)
- **Format**: `npx prettier --write .`
- **Test**: No test framework configured yet

## Code Style

- **Language**: TypeScript with strict mode enabled
- **Framework**: React Router v7 with React 19
- **Styling**: Tailwind CSS v4
- **Imports**: React first, then react-router, then local with `~/*` alias
- **Naming**: PascalCase for components, camelCase for functions/types
- **Formatting**: Prettier (2 spaces, single attr per line, 80 char width)
- **Types**: Explicit typing required, interfaces for complex objects
- **Error handling**: Use try/catch for async operations
- **Path aliases**: `~/*` → `./src/*`
