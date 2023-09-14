# prisma-mysql-unix-socket

- Run `docker compose up`
- Run `docker compose exec -it app bash`
  - Into the app container, run: `npx prisma migrate dev --name=init` to setup the database
- Test with a GET request on http://localhost:8765/users
  - This request will insert a new random user and return all created users.

  