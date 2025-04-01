# 📌 Projeto de Testes com Cypress

Este repositório contém testes automatizados para uma aplicação web (https://www.saucedemo.com/) utilizando o [Cypress](https://www.cypress.io/). O projeto está configurado para rodar testes tanto em modo **headless** (sem interface gráfica) quanto com o navegador aberto.  

---

## 🛠 Requisitos
Antes de executar os testes, verifique se você tem as seguintes ferramentas instaladas:

- 📌 [Node.js](https://nodejs.org/) (versão recomendada: **14.x ou superior**)
- 🌿 [Git](https://git-scm.com/) (para clonar o repositório)
- ⚡ [Cypress](https://www.cypress.io/) (gerenciado via npm)

---

## 📥 Instalação

1. **Clone o repositório** para sua máquina local:

   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

   Esse comando irá instalar o Cypress e outras dependências definidas no arquivo `package.json`.

3. **Configure as variáveis de ambiente:**

   O Cypress usa variáveis de ambiente para armazenar credenciais e outras informações necessárias para os testes. No arquivo `.env`, defina os valores conforme o exemplo abaixo:

   ```plaintext
   username=<seu-usuario>
   password=<sua-senha>
   textFirstName=<seu-primeiro-nome>
   textLastName=<seu-ultimo-nome>
   textPostalCode=<seu-codigo-postal>
   ```

---

## 🚀 Executando os Testes

### 1️⃣ Executar em **Modo Headless** (Sem Interface Gráfica)
Para rodar os testes em modo headless (sem abrir o navegador), utilize:

```bash
npx cypress run
```

Esse comando executa os testes no navegador padrão (Chrome) e exibe os resultados no terminal.

---

### 2️⃣ Executar em **Modo Interativo** (Navegador Aberto)
Para abrir o Cypress e visualizar os testes em tempo real, use:

```bash
npx cypress open
```

Isso abrirá a interface do Cypress, permitindo selecionar testes e acompanhar logs durante a execução.

---

### 3️⃣ Escolher o **Navegador**
No modo interativo (`npx cypress open`), você pode escolher entre os navegadores suportados:

- 🌐 **Chrome**
- ⚡ **Chromium**
- 🏢 **Edge**

Basta selecionar o navegador desejado na interface do Cypress.

---

### 4️⃣ Executar um **Teste Específico**
Para rodar um arquivo de teste específico, use:

```bash
npx cypress run --spec "cypress/e2e/<caminho-do-arquivo-de-teste>.cy.ts"
```

---

### 5️⃣ Rodar Testes em **Diferentes Ambientes**
Caso tenha configurações de ambiente, especifique com:

```bash
npx cypress run --env <variavel-ambiente>=<valor>
```

---

## 📂 Estrutura do Projeto
A estrutura do projeto é organizada da seguinte maneira:

```plaintext
/cypress
  /fixtures         # Dados de teste (ex: JSONs simulando APIs)
  /e2e              # Arquivos de testes automatizados
  /support          # Comandos e funções customizadas
  /page-objects     # Implementação de Page Objects para melhor organização

/cypress.config.ts  # Configurações globais do Cypress
/package.json       # Dependências do projeto
/.env               # Variáveis de ambiente
```

---

## 💡 Dicas

### 🔄 Limpar o Cache do Cypress
Caso enfrente problemas, tente limpar o cache com:

```bash
npx cypress cache clear
```

---

## 🐳 Executando com Docker
Se desejar rodar os testes em um container Docker:

1. **Construa a imagem Docker:**

   ```bash
   docker build -t project-test-typescript .
   ```

2. **Execute o container:**

   ```bash
   docker run --rm project-test-typescript
   ```

---

## 📌 GitHub Actions

✔ **pipeline criada para projeto**: Project-test-typescript 🚀🔥

