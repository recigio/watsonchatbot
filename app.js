const express = require('express')
const app = express()
const port = 3000
const WatsonAssistent = require('./ibm/watson')
const CovidApi = require('./covid/api')
const cors = require('cors')



app.get('/',cors(), async (req, res) => {

    const watson = new WatsonAssistent();
    const covidApi  = new CovidApi();

    const resultado = await watson.send(req.query.digite);

    let saida = '';
    let covidDados = null;

    //eu nao sei mais como ta o contexto para buscar os resultados
    if(resultado.result.context.chamaapi){
        covidDados = JSON.parse(await covidApi.consuta());

        saida = resultado.result.output.text;
        if(covidDados){
            saida += "Macado informa infectados: "+covidDados.infected;
        }
    } else {
        saida = resultado.result.output.text;
    }

    //precisava salvar a saida

    res.send(saida)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
