# Gorilla Automat

PNPM workspace for all gorilla-automat packages.

## Run Locally

First, run the development server:

### From root directory

```bash
  pnpm dev
```

## Structure

The Workspace is split into packages and the app folder

### Packages

Packages are all parts of the monorepo which are used by other packages or apps

The follwoing packages are available

- [Designtokens](./packages/designtokens/README.md)
- [UI](./packages/ui/README.md)
- [DOMAIN](./packages/domain/README.md)

### App

This is where the actual application lives, find out more in the [README](app/README.md)

## PNPM

If you want to find out more about pnpm, go to the docs

- https://pnpm.io/
- https://pnpm.io/workspaces

## Env Vars

These are referenced in every package/app

MINTBASE_API_KEY for mintbase authentication
GORILLA_API_URL example: https://api.gorillashops.io (for local set to http://localhost:4000)
AWS_ACCESS_KEY_ID: Your AWS Users AccesKey
AWS_SECRET_ACCESS_KEY: The secret to the AWS Users Acces key
AWS_REGION: set to eu-central-1
