# Imagem base
FROM cypress/included:12.6.0


WORKDIR /e2e


COPY . .


RUN npm install


EXPOSE 8080

# Comando para rodar o Cypress em modo headless
CMD ["npx", "cypress", "run"]
