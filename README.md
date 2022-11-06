# Neoway Challenge

### This repository contains two projects:
 1. API with Deno + Oak, [here](./api) for more details.
 2. SPA with Vite + TS + Reactjs, [here](./spa) for more details.
 
### For run all with doker, first:
Create a `.env` file in each project. There is an **env-example** file as a template.

On API project, in `.env`, use _neoway_db_ has a **DB_HOST** when run with docker.

## **Run**

```bash
$ docker compose up
````

And initalize database with command:
```
$ docker exec -it neoway_api sh -c "deno task init:db"
```

### Address:
API: http://127.0.0.1:4444
> To test api, access http://127.0.0.1:4444/api/status

SPA: http://127.0.0.1:8080


Have Fun!

Att: Rogério Milhomens de Queiroz

[Linkedin] (https://www.linkedin.com/in/rogeriomq/) |
[Github] (https://github.com/rogeriomq) |
[Email] (mail://rogerio.mq@gmail.com) |
