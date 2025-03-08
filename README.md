Projeto de Testes com Cypress
Este repositório contém testes automatizados para uma aplicação web utilizando o Cypress. O projeto está configurado para rodar testes tanto em modo headless (sem interface gráfica) quanto com o navegador aberto.

Requisitos
Antes de executar os testes, verifique se você tem as seguintes ferramentas instaladas:

Node.js (versão recomendada: 14.x ou superior)
Cypress (gerenciado via npm)
Git (para clonar o repositório)
Instalação
Clone o repositório para sua máquina local:

git clone <url-do-repositorio>
cd <nome-do-repositorio>
Instale as dependências do projeto: npm install Esse comando irá instalar o Cypress e outras dependências definidas no arquivo package.json.

Configure as variáveis de ambiente:

O Cypress usa variáveis de ambiente para armazenar credenciais e outras informações necessárias para os testes. No arquivo .env, defina as credenciais de login: username= password= textFirstName= textLastName= textPostalCode= Executando os Testes

Executar em Modo Headless (Sem Interface Gráfica) Para rodar os testes em modo headless (sem abrir o navegador), você pode usar o seguinte comando: npx cypress run Este comando executará os testes em modo headless utilizando o navegador padrão (Chrome). Os resultados dos testes serão exibidos no terminal.

Executar em Modo com Navegador Aberto (Interactive Mode) Se preferir ver o navegador aberto enquanto os testes são executados, utilize o seguinte comando: npx cypress open Isso abrirá a interface gráfica do Cypress onde você poderá ver e interagir com os testes. A interface permite selecionar quais testes executar e acompanhar os logs enquanto os testes acontecem.

Escolher o Navegador No modo interativo (executando com npx cypress open), você pode escolher o navegador em que deseja executar os testes. O Cypress suporta os seguintes navegadores: Chrome Chromium Edge Basta selecionar o navegador desejado na interface gráfica do Cypress.

Executar Testes de Forma Específica Se desejar rodar um arquivo de teste específico, pode-se usar o comando: npx cypress run --spec "cypress/e2e/.cy.ts"

Rodar Testes em Diferentes Ambientes Se você tiver diferentes ambientes de configuração, pode especificar o ambiente desejado com o comando: npx cypress run --env = Estrutura do Projeto A estrutura do projeto é organizada da seguinte maneira:

/cypress /fixtures # Dados de teste, como dados mock para testes /e2e # Arquivos de teste automatizado /support # Comandos e funcionalidades customizadas do Cypress /page-objects # Classes de Page Objects para estruturar e organizar os testes

/cypress.json # Configurações globais do Cypress /package.json # Dependências do projeto /.env # Variáveis de ambiente

Dicas Limpar o Cache do Cypress: Caso enfrente problemas com o Cypress, você pode tentar limpar o cache com o comando: npx cypress cache clear

Resumo do README.md:
Instalação: Como clonar o repositório e instalar as dependências.
Configuração: Como configurar variáveis de ambiente, como credenciais e dados para testes.
Execução de Testes:
Como rodar os testes em modo headless (sem interface gráfica).
Como rodar os testes com o navegador aberto.
Como escolher o navegador.
Como rodar testes específicos.
Estrutura do Projeto: Descrição dos diretórios e arquivos principais do projeto.
Dicas: Limpeza de cache do Cypress e como visualizar os logs.
Essa documentação cobre o básico para rodar o Cypress de forma eficiente em ambos os modos, seja em headless ou com o navegador aberto.

Como executar o Dockerfile No mesmo local onde está o arquivo Dockerfile, execute o comando docker build -t project-test-typescript Para criar um container a partir da imagem construída, execute o comando docker project-test-typescript
