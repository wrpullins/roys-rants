# Roy's Rants

A React, TypeScript, and Vite application.

## Getting started

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check and build the production app. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |
| `npm run generate:api` | Regenerate typed API code with Kubb. |

## API code generation

Vite uses `VITE_API_URL` from `.env.development` for `npm run dev` and `.env.production` for `npm run build`. These point to `http://localhost:8080/api` and `http://roys-rants-api.us-east-1.elasticbeanstalk.com/api`, respectively. Override settings locally with `.env.development.local` or `.env.production.local` (ignored by Git). `VITE_` values are public browser configuration; do not put secrets in them.

Kubb loads the development environment by default and reads `/v3/api-docs` from the configured API host. Run `npm run generate:api:prod` to read the production schema instead. It writes TypeScript models, Axios clients, and TanStack Query hooks to `src/api/generated`. The generated directory is cleaned before each generation, so keep handwritten code elsewhere.

Generated clients read the API host from Vite's environment at build time, so the same generated code works in both environments. OpenAPI paths already contain `/api`, so the generated client uses only the URL origin to avoid duplicating that prefix. The handwritten requests client uses the full API URL.

Hooks are exported from `src/api/generated/hooks`. They require a TanStack Query `QueryClientProvider` above the component using them.

Start the backend before running the generator:

```sh
npm run generate:api
```

The API docs UI is available at [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html). Kubb uses the raw OpenAPI document endpoint (`/v3/api-docs`), rather than the UI page. If the backend uses a custom OpenAPI docs path, update the `input` URL in `kubb.config.ts`.
