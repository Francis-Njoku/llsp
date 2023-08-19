# fullstack-graphql-playarone-platform

A Fullstack GraphQL Playarone platform with React and React Native.

## Packages

This project is made up of 5 packages that share code using Yarn Workspaces.

- web (React.js website)
- app (React Native app)
- server (GraphQL Typescript server)
- common (Code shared between web, app, and server)
- controller (Components shared between web and app)

## Installation

1. Clone project

```
git clone https://github.com/abdulrazaq24/po.git
```

2. cd into folder

```
cd po
```

3. Download dependencies

```
yarn
```

4. Start PostgreSQL server
5. Create database called `graphql-ts-server-boilerplate`

```
createdb graphql-ts-server-boilerplate
```

6. [Add a user](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e) with the username `postgres` and and no password. (You can change what these values are in the [ormconfig.json](https://github.com/benawad/graphql-ts-server-boilerplate/blob/master/ormconfig.json))

7. Connect to the database with `psql` and add the uuid extension:

```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
``` 

8. Install and start Redis

9. In `packages/server` create a file called `.env` and add the following line inside: `FRONTEND_HOST=http://localhost:3000`

10. Run `yarn build` in `packages/common`

11. Run `yarn build` in `packages/controller`



## Usage

1. Start server `yarn start` in `packages/server`

2. Now you can run `yarn start` in `packages/web` or `packages/app` to start the website or app.

3. How to get credentials working in graphql playground: 

## Deploy

### Server

### Website

## Features

1. Website register/login
2. Deploy backend and frontend
3. App register/login
4. Website and App forgot password
7. logout

npx ts-node ./node_modules/.bin/typeorm migration:generate -n MatchTable -c development