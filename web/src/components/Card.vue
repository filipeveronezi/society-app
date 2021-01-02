<template>
  <div id="card" class="animate-up">
    <div class="upper">
      <div class="label-group">
        <h1 id="name"> {{ name }} </h1>
        <div class="buttons" v-if="user_id == local_user_id">
          <button v-on:click="updateCourt()">
            <img src="../assets/images/edit.svg" alt="Botão de deletar">
          </button>
          <button v-on:click="deleteCourt()">
            <img src="../assets/images/delete.svg" alt="Botão de editar">
          </button>
        </div>
      </div>
      <div class="label-group">
        <p id="street-number"> {{ street }}, {{ number }} </p>
      </div>
      <div class="label-group">
        <p id="district-city-state"> {{ district }}, {{ city }}-{{ state }} </p>
      </div>
      <div class="label-group">
        <p id="hour_value"> R${{ hour_value }}/h </p>
      </div>
    </div>
    <a v-bind:href="'https://api.whatsapp.com/send?l=pt_BR&phone=' + phone" target="_blank">
      <div class="button-container">
        <img src="../assets/images/whatsapp.svg" alt="Ícone de WhatsApp">
        <p>Entrar em contato</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'street',
    'number',
    'district',
    'city',
    'state',
    'hour_value',
    'phone',
    'user_id',
    'court_id'
  ],
  data: () => {
    return {
      local_user_id: window.localStorage.getItem('user_id'),
    }
  },
  methods: {
    async deleteCourt() {
      this.$confirm(
        {
          message: `Tem certeza que deseja deletar esta quadra?`,
          button: {
            no: 'Não',
            yes: 'Sim'
          },
          /**
          * Callback Function
          * @param {Boolean} confirm 
          */
          callback: async confirm => {
            if (confirm) {
              const res = await fetch("http://society.filipeveronezi.dev.br:3000/courts/" + this.court_id, {
                method: "DELETE",
              });
              if(res.status == 200) {
                this.$notify({
                  group: "success",
                  title: "Quadra deletada com sucesso!",
                  closeOnClick: "true"
                  });
                this.$emit('deletion');
              } else {
                this.$notify({
                  group: "error",
                  title: "Erro",
                  text: "Falha ao deletar.",
                  closeOnClick: "true"
                });
              }
            }
          }
        }
      )
      
      
    },
    async updateCourt() {
      this.$router.push("/update-court/" + this.court_id);
    }
  }
}
</script>

<style scoped>
  @import '../assets/styles/animations.css';
  
  #card {
    position: relative;

    width: 270px;
    height: 200px;
    background: #FFF;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid #C6C6C6;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transition: .5s;
  }

  .upper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 70%;
  }

  .label-group {
    letter-spacing: .1vh;

    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;

    margin-left: 20px;
  }

  .label-group h1 {
    font-weight: 500;
    font-size: 15px;

    margin-top: 20px;
  }

  .label-group button {
    margin-top: 15px;
    margin-right: 10px;

    background: none;
    outline: none;
    border: none;

    cursor: pointer;
  }

  .label-group button img {
    width: 20px;
    height: 20px;
    transition: .05s;
    opacity: .8;
  }

  .label-group button img:hover {
    opacity: 1;
  }

  .label-group p {
    font-size: 12px;
    margin-top: 0;
  }

  #street-number {
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 2px;
  }

  #hour_value {
    color: #428596;
    margin-top: 12px;
  }

  .button-container {
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    cursor: pointer;
    text-decoration: none;

    position: absolute;
    bottom: 0;

    width: 100%;
    outline: none;
    border: none;
    height: 30%;

    font-family: "Oxygen", sans-serif;
    color: white;
    font-weight: 700;
    font-size: 15px;

    background: #3CDC8C;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    border-radius: 0px 0px 20px 20px;

    transition: .2s;
  }

  a:hover {
    background: #31b874;
  }

  a img {
    margin: 0 10px;
    display: inline;
  }

  a p {
    display: inline;
  }

</style>