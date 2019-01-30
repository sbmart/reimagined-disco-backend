# reimagined-disco-backend
social stuff using Express GraphQL DataLoader Knex Postgres

Steps to fire up the api:
1.  `git clone the repo && cd to it`
2.  ` npm i`
3.  `start PostgresApp on a local machine`
4.  ` psql# CREATE DATABASE rdisko;`
5.  `knex migrate:latest`
6.  `knex seed:run`
7.  `nodemon`


Quiery in Graphiql:
`{
  knights {
    id
    name
    email
  }
}`