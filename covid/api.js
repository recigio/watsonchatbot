const request = require('request-promise');

class CovidApi {

    async consuta(){

       const result = await request.get(' https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true');
       return result;

    }

}

module.exports = CovidApi;

