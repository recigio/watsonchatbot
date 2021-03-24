const AssistantV1 = require('ibm-watson/assistant/v1')
const { IamAuthenticator } = require ('ibm-watson/auth');

class WatsonAssistent {

    constructor() {
        this.assistant = new AssistantV1({
            authenticator: new IamAuthenticator({ apikey: 'b13KLWlJ0SAqGvN103mpDWCSa0C8OHqL-KbkEySqaucb' }),
            url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/adf7390c-2637-49ae-b110-96afcc494e9a',
            version: '2018-02-16',
        });
    }

    async send(inputtext){

        const response =  await this.assistant.message(
            {
                workspaceId: '7657d667-c080-48fc-a342-a39e839fa87a',
                input: { text: inputtext }
            }
        );

        return response;

    }

}

module.exports = WatsonAssistent;