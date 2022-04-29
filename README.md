# trybe-cookmaster-project

---

## O que foi desenvolvido

Criação de uma API CRUD utilizando a arquitetura MSC!

Projeto feito em NodeJS e Exprexx, em que é possível fazer o cadastro e login de pessoas usuárias, onde apenas essas pessoas poderão acessar, modificar e deletar as receitas que cadastrou.

---

## Habilidades

Neste projeto, desenvolvi as seguintes habilidades:

- Compreensão do funcionamento de um token de autenticação;

- Autenticação de rotas do Express usando o token JWT;

- Fazer upload/download de arquivos em APIs REST;

- Realização testes de integração 

---

## Desenvolvimento

Desenvolvi todas as camadas da aplicação (Models, Service e Controllers).

Através dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (CRUD).

---

# Instruções para rodar o projeto

1. Clone o repositório

- `git clone git@github.com:thosijulio/trybe-cookmaster-project.git`.

- Entre na pasta do repositório que você acabou de clonar:
  - `cd trybe-cookmaster-project`

2. Instale as dependências

- `npm install`

3. Realize a conexão com o banco de dados

- No arquivo .env, altere os valores das variáveis "MONGO_DB_URL" e "DB_NAME" para realizar a conexão com o banco (valores default: "mongodb://127.0.0.1:27017" e "Cookmaster")
- inicie o banco de dados (MongoDB)

4. Rode o projeto:

- `npm start`

---

## Utilização da API (Principais endpoints)

### Criação de usuário (POST /users)

- Criação de um usuário USER dentro do banco. Para inserir, coloque no corpo da requisição POST um JSON contendo as chaves user, password e email.
- Exemplo: {
    "name": "thosijulio",
    "password": "teste123@",
    "email": "thosijulio@gmail.com"
}

---

## Contato
Caso surga alguma dúvida, comentário ou sugestão sobre o projeto, não hesite em me contactar:
<p align=center>
Linkedin:<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
Github:<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
Instagram:<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
</p>
