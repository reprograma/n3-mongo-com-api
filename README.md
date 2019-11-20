# N3 | Semana 10 | Backend | MongoDB com API
Essa semana vamos integrar uma API que já tem GET e POST, trocando o model estático por um banco de dados (MongoDB) utilizando a lib [mongoose](https://mongoosejs.com/).
Também vamos entender e usar strings de conexão, e criar um usuário para nosso banco de dados.

# Recaptulando
## Segunda-feira
O que fizemos?

cd servidor-contato
npm install
npm install mongoose 
Criar o arquivo database.js na pasta model, que serve pra integrar a API ao banco de dados, ele usava o monoose, e tinha  um metodo chamado connect().
Chamar o metodo connect do database no arquivo app.js
Criamos nosso primeiro Schema pra nossa collection de Contatos, usamos a propriedade unique pra nao deixar mais de um contato com o mesmo nome, usamos o required pra dizer qual campo é obrigatório.
Usamos o new pra construir um novo Schema (scpoiler de orientação objeto)
Usamos os metodos save() e find() da collection dentro do controller.

Desafio 01: criar um arquivo chamado contatoSchema.js dentro da pasta /model com o Schema dos nossos contatos
Desafio 02: incluir campo opcional fotoPerfil
Desafio 03: incluir campo obrigatório dataNascimento do tipo Date
Desafio 04: no metodo add, fazer o banco (schema) retornar um erro caso o usuário com o mesmo nome já exista

## Quarta
Fizemos nosso primeiro pull request
