# Adonisjs example backend

This is an [`Adonisjs v6`](https://docs.adonisjs.com/guides/preface/introduction) project to manage backend.

## Dependencies

This project runs with node version specified in [`.nvmrc`](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) version.

```bash
nvm use
```

This project uses only [`pnpm`](https://pnpm.io/es/installation) for its dependencies:

## Installation

For the installation of this proyect run:

```bash
pnpm i
```

Copy env file:

```bash
cp .env.example .env
```

Generate key:

```bash
node ace generate:key
```

Additionally you can use specific test env:

```bash
cp .env .env.test
```

then set your DB credentials and variables

Now you can run migrations and seeders:

```bash
node ace migration:run
node ace db:seed
```

In development and testing, a user with email `admin@example.com` is created using seeders. In the production, this user is NOT created.

To tests run:

```bash
node ace test
```

To serve de app locally run:

```bash
node ace serve
```

## Code standar

This project use eslint:

```bash
pnpm run lint
```

Also this project use prettier to format code

```bash
pnpm run format
```

## Recommended extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
- [AdonisJS Extension](https://marketplace.visualstudio.com/items?itemName=jripouteau.adonis-vscode-extension)
- [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- [Japa Extension](https://marketplace.visualstudio.com/items?itemName=jripouteau.japa-vscode)

## VSCODE configuration

you can configure vscode in tghis way in file `.vscode/settings.json`.

```json
{
  //...
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": ["source.fixAll.eslint"],
  "eslint.validate": ["javascript", "typescript"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.tsdk": "node_modules/typescript/lib",
  "eslint.experimental.useFlatConfig": true
}
```
