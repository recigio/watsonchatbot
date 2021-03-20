const AssistantV1 = require('ibm-watson/assistant/v1')
const { IamAuthenticator } = require ('ibm-watson/auth');

class WatsonAssistent {

    constructor() {
        this.assistant = new AssistantV1({
            authenticator: new IamAuthenticator({ apikey: 'b13KLWlJ0SAqGvN103mpDWCSa0C8OHqL-KbkEySqaucb' }),
            url: 'https://gateway.watsonplatform.net/assistant/api/',
            version: '2018-02-16',
        });
    }

    async send(inputtext){

        const response =  await this.assistant.message(
            {
                workspaceId: '5b31e9cd-9851-432f-b0ee-2900f001022f',
                input: { text: inputtext }
            }
        );

        return response;

    }

}

module.exports = WatsonAssistent;