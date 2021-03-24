const express = require('express')
const app = express()
const port = 3000
const WatsonAssistent = require('./ibm/watson')
const CovidApi = require('./covid/api')

app.get('/', async (req, res) => {


    const htmlStart ="<html><body><div>";

    const watson = new WatsonAssistent();
    const covidApi  = new CovidApi();

    const resultado = await watson.send(req.query.digite);

    let saida = '';
    let covidDados = null;
    if(resultado.result.context.chamaapi){
        covidDados = JSON.parse(await covidApi.consuta());

        saida = "<p>"+resultado.result.output.text+"</p>";
        if(covidDados){
            saida += "<p>Macado informa infectados: "+covidDados.infected+"</p>";
        }
    } else {
        saida = "<p>"+resultado.result.output.text+"</p>";
    }



    const form = "<form method='get'>" +
        "<input type='text' name='digite' id='digite' placeholder='digite' autocomplete='off'>" +
        "<input type='submit' name='enviar' id='enviar' value='Enviar!'>" +
        "</form>";

    const htmlEnd="</div></body></html>";
    res.send(htmlStart+saida+form+htmlEnd)
    //res.sendFile(__dirname + '/chat/index.html');

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
