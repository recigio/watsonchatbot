const AssistantV2 = require('ibm-watson/assistant/v2')
const { IamAuthenticator } = require ('ibm-watson/auth');

class WatsonAssistent {

    constructor() {
        this.assistant = new AssistantV2({
            authenticator: new IamAuthenticator({ apikey: 'b13KLWlJ0SAqGvN103mpDWCSa0C8OHqL-KbkEySqaucb' }),
            serviceUrl: 'https://api.us-south.assistant.watson.cloud.ibm.com',
            version: '2018-09-19'
        });

    }

    async createSession(){
       const result = await this.assistant.createSession({assistantId: '87f2c102-eabf-421f-b29e-b990b376d83e'});
        this.sessao = result.result.session_id;
    }

    async send(inputtext){

        const response =  await this.assistant.message(
            {
                assistantId: '87f2c102-eabf-421f-b29e-b990b376d83e',
                sessionId: this.sessao,
                input: { text: inputtext }
            }
        );

        return response;

    }

}

module.exports = WatsonAssistent;