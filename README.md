
## Installation

```bash
$ yarn
```

## Database Initialization

It will execute init.sql file automatically and will create table "pairs"

```bash
docker-compose up -d
```

## .env configuration

There is .env.example in root directory, project needs .env file in the root directory, just create file .env and copy everything what is in .env.example

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
