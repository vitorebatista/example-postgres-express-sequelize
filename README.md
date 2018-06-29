# Postgres + Express + Sequelize Example

This repository demonstrates the usage of [Sequelize](http://docs.sequelizejs.com/) within an [Express](https://expressjs.com) and [PostgreSQL](https://www.postgresql.org/) application.
The implemented logic is a simple Todo.


## Starting App

**Without Migrations**

```
npm install
npm start:dev
```

**With Migrations**

```
npm install
node_modules/.bin/sequelize db:migrate
npm start:dev
```

Just open [http://localhost:8000](http://localhost:8000).