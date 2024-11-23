# 📋 Loja Online - Shopyy - Loja Online

Este projeto é uma aplicação de loja online desenvolvida com uma stack moderna de tecnologias. O objetivo é proporcionar uma experiência completa de compra virtual, incluindo funcionalidades de gerenciamento de produtos, autenticação de usuários, carrinho de compras e integração com métodos de pagamento.

## 📌 Tecnologias Utilizadas

### Frontend:
- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Redux Toolkit**: Gerenciamento de estado simplificado e eficiente.
- **React Router DOM**: Para gerenciamento de rotas no cliente.
- **Axios**: Para realizar requisições ao backend.
- **Tailwind CSS** ou outra ferramenta de estilização (adapte conforme sua escolha).

### Backend:
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para Node.js, responsável pelo gerenciamento do servidor.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações dos produtos, usuários, pedidos, etc.
- **Mongoose**: ODM para facilitar a manipulação dos dados no MongoDB.
- **Stripe**: Plataforma de pagamento integrada ao projeto para processar transações de forma segura.

### Outras Ferramentas:
- **JWT (JSON Web Tokens)**: Para autenticação e gerenciamento de sessões de usuários.
- **BCrypt**: Para hashing de senhas no backend.

## 💡Funcionalidades Implementadas

1. **Frontend:**
   - Página inicial com produtos destacados.
   - Catálogo de produtos com filtros e paginação.
   - Página de detalhes de um produto.
   - Carrinho de compras com gerenciamento de estado via Redux Toolkit.
   - Cadastro e login de usuários.
   - Checkout integrado com Stripe para processamento de pagamentos.

2. **Backend:**
   - APIs RESTful para gerenciamento de produtos, usuários, pedidos e autenticação.
   - Validação de dados no servidor.
   - Segurança de rotas protegidas com JWT.
   - Integração com Stripe para processamento de pagamentos.

3. **Banco de Dados:**
   - Estruturação do banco para suportar usuários, produtos e pedidos.
   - Operações de CRUD com Mongoose.

## 🤔 Como Rodar o Projeto

### ❗Pré-requisitos:
- Node.js instalado na máquina.
- MongoDB em execução (localmente ou em um serviço como MongoDB Atlas).
- Conta no Stripe para obter suas chaves de API.

### 🎊 Passos:
1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
   
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Project-E-commerce
   ```
3. Instale as dependências do backend e frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
4. Configure as variáveis de ambiente:
   ```bash
   MONGO_URI=sua-string-de-conexao-do-mongodb
   JWT_SECRET=sua-chave-secreta
   PORT=5000
   STRIPE_SECRET_KEY=sua-chave-secreta-do-stripe
   ```
5. Inicie o servidor e o cliente:
   
   No backend:
   ```bash
   cd backend
   npm start
   ```
   No frontend:
   ``` bash
   cd frontend
   npm start
   ```
7. Acesse o projeto no navegador em http://localhost:3000

## 😎 Autor

- [@ArthurSStante](https://github.com/ArthurSStante)
