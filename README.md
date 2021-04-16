# watsonchatbot
Trabalho para disciplina de Chatbots. 

Este é um servidor e interface gráfica para ser conectar a um chatbot IBM Watson que fala sobre COVID-19. 

## Documentação
https://github.com/watson-developer-cloud/node-sdk  
https://expressjs.com/pt-br/starter/hello-world.html

## Dependências
- nodejs

# Passos para rodar a aplicação:
- Servidor da aplicação: na pasta raiz, abrir um console e rodar os comandos: 
  - npm install
  - npm start 
  - O servidor irá rodar na porta 3000 (localhost)
- Chat: acessar a pasta watsonchat, abrir um console e rodar os comandos:
  - npm install
  - npm run serve 
  - O cliente irá rodar na porta 8080 (localhost) e consulta 3000 (localhost)

## Fluxo de diálogo
Uma fluxo de diálogo básico pode ser encontrado na pasta `extras/Viridiana.pdf`

## Gráficos sobre as conversas
O arquivo `extras/AnaliseIndicadores.ipynb` ofere alguns gráficos sobre os logs do chatbot, ele é um arquivo `jupyter`. Os logs são recuperados do Watson via bibliotecas oferecidas pela IBM para este fim, mas também existe um arquivo `extras/logs_viridiana.csv` que contém alguns logs já formatados para serem usados dentro do notebook. Caso queira usar o arquivo de `.csv` siga as instruções dentro do notebook.

## Autores

Desenvolvido por: Evandro Matheus Schmitz, Leonardo Fiedler and Recigio Poffo.
