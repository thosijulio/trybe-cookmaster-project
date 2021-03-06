# trybe-cookmaster-project

---

## Sumário

- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Instruções para rodar o projeto](#instruções-para-rodar-o-projeto)
- [Desenvolvimento](#desenvolvimento)
- [Habilidades](#habilidades)
- [Principais endpoints](#principais-endpoints)
- [Contato](#contato)

## O que foi desenvolvido

Criação de uma API CRUD utilizando a arquitetura MSC!

Projeto feito em NodeJS e Express, em que é possível fazer o cadastro e login de pessoas usuárias, onde apenas essas pessoas poderão acessar, modificar e deletar as receitas que cadastrou.

---

## Instruções para rodar o projeto

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

## Desenvolvimento

Desenvolvi todas as camadas da aplicação (Models, Service e Controllers).

Através dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (CRUD).

---

## Habilidades

Neste projeto, desenvolvi as seguintes habilidades:

- Compreensão do funcionamento de um token de autenticação;

- Autenticação de rotas do Express usando o token JWT;

- Fazer upload/download de arquivos em APIs REST;

- Realização de testes de integração 

---

## Principais endpoints

### Criação de usuário (POST /users)

- Criação de um usuário USER dentro do banco. Para inserir, coloque no corpo da requisição POST um JSON contendo as chaves user, password e email.
- Exemplo: {
    "name": "thosijulio",
    "password": "teste123@",
    "email": "thosijulio@gmail.com"
}

- Retorno da requisição: Um objeto com a chave user, que é um objeto que contém as informações do usuário registradas no banco (_id, name, email e role)

### Login de usuário (GET /users)

- Login de um usuário USER dentro do banco. Para inserir, coloque no corpo da requisição GET um JSON contendo as chaves user, password e email.
- Exemplo: {
    "name": "thosijulio",
    "password": "teste123@",
    "email": "thosijulio@gmail.com"
}

- Retorno da requisição: Um objeto com a chave token contendo o token necessário para utilizar a api.

### Criação de receitas (POST /recipes)

- Criação de uma receita dentro do banco. Para inserir, coloque no corpo da requisição POST um JSON contendo as chaves name, ingredients e preparation. Apenas um usuário já logado pode inserir uma receita. No header da requisição, crie uma chave "Authorization" contendo o token recebido no endpoint de login.
- Exemplo: {
    "name": "Torta de Banana",
    "ingredients": "Banana",
    "preparation": "colocar no forno"
}

- Retorno da requisição: Um objeto com a chave recipe, que é um objeto que contém as informações da receita criada no banco (userID, name, ingredients, preparation, _id)

### Busca de receitas (GET /recipes)

- Pesquisa de todas as receitas dentro do banco de dados. Para pesquisar, coloque no header da requisição uma chave "Authorization" contendo o token recebido no endpoint de login.

- Retorno da requisição: Um array contendo todas as receitas dentro do banco.

### Busca de receitas por ID (GET /recipes/(id))

- Pesquisa de uma receita no banco que contém o id passado por parametro. Para pesquisar, coloque no header da requisição GET uma chave "Authorization" contendo o token recebido no endpoint de login.

- Retorno da requisição: Um objeto contendo todas as informações da receita pesquisada.

### Atualização de receita (PUT /recipes/(id))

- Atualiza uma receita no banco que contém o id passado por parametro. Para atualizar, coloque no corpo da requisição PUT um JSON contendo as chaves name, ingredients e preparation. Coloque também no header da requisição uma chave "Authorization" contendo o token recebido no endpoint de login.
- Exemplo: {
    "name": "Torta de Banana",
    "ingredients": "Banana",
    "preparation": "colocar no forno"
}

- Retorno da requisição: Um objeto contendo todas as informações da receita atualizada.

### Exclusão de receita (DELETE /recipes/(id))

- Remove uma receita no banco que contém o id passado por parametro. Para remover, coloque no header da requisição DELETE uma chave "Authorization" contendo o token recebido no endpoint de login.

- Retorno da requisição: retorna apenas um status 404(No Content).

---

## Contato
Caso surga alguma dúvida, comentário ou sugestão sobre o projeto, não hesite em me contactar:
<p align=center>
Linkedin:<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
Github:<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
Instagram:<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
</p>
