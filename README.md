# Trabalho para disciplina de Chatbots.

Este é um servidor e interface gráfica para se conectar a um chatbot IBM Watson que fala sobre COVID-19. Este bot é capaz de falar sobre:

* Prevenção
  * Distanciamento Social
  * Higienização das mãos
  * Higienização de ambientes
  * Uso de máscara
* Tipos de Máscaras
  * PFF2
  * N95
  * Tecido
* Contaminação
* Situação da vacinação nos municípios de Santa Catarina
* Distanciamento
* Grupo de Risco
* Lockdown
* Tratamentos
* Variantes

Para a situação de vacinação nos municípios de Santa Catarina, o bot é capaz de acessar uma API (conforme documentação abaixo) para efetuar a consulta.

## Documentação Base
https://github.com/watson-developer-cloud/node-sdk  
https://expressjs.com/pt-br/starter/hello-world.html

## Entregas

### 1. PDF Do Fluxo de Dialogo
Uma fluxo de diálogo básico pode ser encontrado na pasta `extras/Viridiana.pdf`.

### 2. Código Fonte do projeto

#### Passos para rodar a aplicação localmente:
1. Servidor da aplicação: na pasta raiz, abrir um console e rodar os comandos: 

```
  npm install
  npm start 
```

O servidor irá rodar na porta 3000 (localhost)

2. Web Chat: acessar a pasta `watsonchat`, abrir um console e rodar os comandos:

```
  npm install
  npm run serve 
```

O cliente irá rodar na porta 8080 (localhost) e consulta 3000 (localhost)

#### API De Vacinação

Acessar a pasta `vaccine`, lá estão documentados a forma de execução da function e o código da mesma.

### 3. Json do Chatbot
O arquivo `extras/skill-chabot_covid.json` contém o json de configuração do chatbot conforme ele se encontra no Watson Assistant.


### 4. Jupyter com os Indicadores/Métricas
O arquivo `extras/AnaliseIndicadores.ipynb` oferece alguns gráficos sobre os logs do chatbot, ele é um arquivo `jupyter`. Os logs são recuperados do Watson via bibliotecas oferecidas pela IBM para este fim, mas também existe um arquivo `extras/logs_viridiana.csv` que contém alguns logs já formatados para serem usados dentro do notebook. Caso queira usar o arquivo de `.csv` siga as instruções dentro do notebook.

## Autores

Desenvolvido por: Evandro Matheus Schmitz, Leonardo Fiedler e Recigio Poffo.