const express = require('express')
const app = express()
const port = 3000
const WatsonAssistent = require('./ibm/watson')

app.get('/', async (req, res) => {

    const watson = new WatsonAssistent();

    const htmlStart ="<html><body><div>";

    const saida = "<p>"+ await watson.send(req.query.digite)+"</p>";

    const form = "<form method='get'>" +
        "<input type='text' name='digite' id='digite' placeholder='digite'>" +
        "<input type='submit' name='enviar' id='enviar' value='Enviar!'" +
        "</form>";

    const htmlEnd="</div></body></html>";

    res.send(htmlStart+saida+form+htmlEnd);

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
