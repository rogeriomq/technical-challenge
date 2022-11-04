# **Challenge - API**
> This API use Deno, Oak, PostgeSQL

## Instalation
**Requiriments**
 - Deno 1.27.x

## **Run**
1. Create a `.env` file, copy of the `env.example`.
2. Create a cache sources running: 
```bash
$ deno cache deps.ts dev_deps.ts
```
3. Initialize database with:
```bash
$ deno task init:db
```
_To see all deno task options, run: `deno task`._

4. Exceute task `dev`(dev to watch mode):
```bash
$ deno task dev
```
5. Tests - execute:
```bash
$ deno task test
```

## **Routes**

### Table of Routes:
| Method  | Path           | query | body(json)     |
|---------|----------------|-------|----------------|
| GET     | /api/status    |       |                |
| GET     | /api/cpf       |?like  |                |
| GET     | /api/cnpj      |?like  |                |
| POST    | /api/cpf       |       |{cpf: string}   |
| POST    | /api/cnpj      |       |{cnpj: string}  |
| PUT     | /api/cpf/:id   |       |{cpf: string}   |
| PUT     | /api/cnpj/:id  |       |{cnpj: string}  |
| DELETE  | /api/cpf/:id   |       |                |
| DELETE  | /api/cnpj/:id  |       |                |


Have fun!
