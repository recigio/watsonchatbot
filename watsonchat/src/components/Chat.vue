<template>
  <div oncontextmenu='return false' class='snippet-body'>
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row d-flex justify-content-center">
          <div class="col-md-4">
            <div class="card card-bordered">

              <div class="card-header">
                <h4 class="card-title"><img src="https://img.icons8.com/color/36/000000/doctor-female.png"><strong>Viridiana</strong></h4>
              </div>

              <div class="ps-container ps-theme-default ps-active-y" id="chat-content" style="overflow-y: scroll !important; height:400px !important;">
                <div v-for="(item) in listaMensagens" :key="item.time" v-bind:class="[item.tipo==='usuario' ? 'media media-chat' : 'media media-chat media-chat-reverse']">
                  <img class="avatar" v-if="item.tipo==='usuario'" src="https://img.icons8.com/color/36/000000/administrator-male.png"/>
                  <div class="media-body">
                    <p v-html="item.message"></p>
                    <p class="meta">{{ item.time }}.</p>
                  </div>
                </div>

                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                  <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps-scrollbar-y-rail" style="top: 0px; height: 0px; right: 2px;">
                  <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 2px;"></div>
                </div>
              </div>

              <div class="publisher bt-1 border-light" v-on:keyup.enter="chamaWatson">
                <img class="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="...">
                <input class="publisher-input" type="text" placeholder="Escreva alguma coisa" v-model="mensagem">
                <a class="publisher-btn text-info" href="#" v-on:click="chamaWatson()"><i class="fa fa-paper-plane"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Chat',
  data: function () {
    return {
      //variaveis do ambiente
      mensagem:'',
      listaMensagens: [
         //exemplo do formato
         // {'message':'oi',time:'agora', tipo:'usuario'},
         // {'message':'oi de volta',time:'agora','tipo':'watson'},
      ]
    }
  },
  methods : {

    //todos os metodos ficam aqui
    chamaWatson: function () {

      //adiciona na lista
      this.listaMensagens.push({'message': this.mensagem, time: Date.now(), tipo: 'usuario'});

      //request
      axios.get('http://localhost:3000?digite='+this.mensagem)
          .then( response => {
            this.listaMensagens.push({'message': response.data, time:Date.now(), tipo: 'watson'});

            //$nextTick é um hack para esperar atualziar o chat scrooll do chat

            this.$nextTick(function () {this.scroolToBotton();});
          });

      //scrooll do chat
      this.scroolToBotton();
      this.mensagem ='';
    },
    scroolToBotton: function () {

      //pega o elemento html e faz scroll
      const objDiv = document.getElementById("chat-content");
      objDiv.scrollTop = objDiv.scrollHeight+100;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
