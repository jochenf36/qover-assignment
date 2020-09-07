# Build a Insurance app using Nest.js, TypeScript, React

Application repo for a simple application built with Nest.js, TypeScriptand React.

## Getting Started

This prototype is divided into two separate sections. Namely the Backend ( Built with Nest.js) and the frontend
( Built with React ).

Install TypeScript globally on your machine if you don't have it installed already:

```bash
npm install -g typescript
```

## Backend

### Change directory into the backend

```bash
cd qover-backend
```

### Install backend dependencies

```bash
npm install
```

### Run the application

Open another terminal and still within the `qover-backend` project directory run the application with:

```bash
npm run start
```

This will start the backend application on port `9000`. This was modified to avoid confliction with the frontend application which by default will run on port `3000`

## Frontend

Open another terminal and navigate to the `qover-frontend` folder to setup the frontend

### Frontend dependencies

```bash
cd qover-frontend
yarn install
```

### Run the frontend app

```bash
yarn start
```

### Test the application

Finally open your browser and view the application on http://localhost:3000

## Prerequisites

[Node.js](https://nodejs.org/en/), [Yarn package manager](https://yarnpkg.com/lang/en/docs/install/#mac-stable),[TypeScript](https://www.typescriptlang.org/)

## Built With

[Nest.js]()
[React.js]()
[TypeScript]()
