<template>
  <div id="court-form">
    <form class="animate-up" @submit="createCourt">
      <div class="title">
        <h1>Dados</h1>
        <hr>
      </div>
      <div class="input-group">
        <label for="nome-local">Nome do local</label>
        <input type="text" id="nome-local" v-model="name" required>
      </div>
      <div class="input-group">
        <label for="phone">Contato</label>
        <input type="text" id="phone" v-model="phone" required>
      </div>
      <div class="input-group">
        <label for="hour_value">Valor/h</label>
        <input type="text" id="hour_value" v-model="hour_value" required>
      </div>
      
      <div class="title">
        <h2>Endereço</h2>
      </div>

      <div class="double-input-group">
        <div class="input-group big-input">
          <label for="street">Rua</label>
          <input type="text" id="street" v-model="street" required>
        </div>
        <div class="input-group small-input">
          <label for="number">Nº</label>
          <input type="text" id="number" v-model="number" required>
        </div>
      </div>

      <div class="input-group">
        <label for="district">Bairro</label>
        <input type="text" id="district" v-model="district" required>
      </div>

      <div class="double-input-group">
        <div class="input-group big-input">
          <label for="city">Cidade</label>
          <input type="text" id="city" v-model="city" required>
        </div>
        <div class="input-group small-input">
          <label for="state">UF</label>
          <input type="text" id="state" v-model="state" required>
        </div>
      </div>
      <div class="submit">
        <button type="submit">Enviar</button>  
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
      phone: "",
      hour_value: "",
      street: "",
      number: "",
      district: "",
      city: "",
      state: "",
    };
  },
  methods: {
    async createCourt(e) {
      e.preventDefault();

      const userId = await window.localStorage.getItem("user_id");

      const res = await fetch("http://localhost:3000/courts", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.name,
          hour_value: this.hour_value,
          phone: this.phone,
          user_id: userId
        })
      });

      const { id } = await res.json();
      window.localStorage.setItem("court_id", id);

      if (res.status == 200) {
        const secondRes = await fetch("http://localhost:3000/courts/" + id + "/addresses", {
        
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            street: this.street,
            number: this.number,
            district: this.district,
            city: this.city,
            state: this.state,
          })
        });

        if (secondRes.status == 200) {
          this.$notify({
          group: "success",
          title: "Quadra cadastrada com sucesso!",
          closeOnClick: "true"
          });
          this.$router.push("/courts");
        } else {
          this.$notify({
            group: "error",
            title: "Erro",
            text: "Falha ao cadastrar.",
            closeOnClick: "true"
          });
        }
      }
    }
  }
}
</script>

<style scoped>
  @import '../assets/styles/animations.css';
  #court-form {
    width: 100%;
    height: 100%;
    background: #F9F9F9;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    margin: 0;
    width: 30%;
    min-width: 400px;
    height: 70%;
    background: #FFF;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 21px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
  }

  h1 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 5px;
  }

  hr {
    border-top: 1px solid #C6C6C6;
    width: 100%;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 15px;
    margin-top: 20px;
  }

  label {
    margin-left: 5px;
    color: #9F9F9F;
    font-size: 15px;
  }

  label + input {
    margin-top: .5vh;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
  }

  .input-group + .input-group, .double-input-group + .input-group, .input-group + .double-input-group {
    margin-top: .3vh;
  }

  input,
  button {
    height: 27px;
    width: 100%;
  }

  input {
    font-family: "Oxygen", sans-serif;
    font-size: 15px;

    letter-spacing: 0.1rem;

    padding: 1px 0 1px 10px;

    background: #f0f1f2;
    border: none;
    border-radius: 12px;
  }

  .double-input-group {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 80%;
  }

  .double-input-group .input-group + .input-group {
    margin-top: 0;
    margin-left: 2vh;
  }

  .big-input {
    width: 90%
  }

  .small-input {
    width: 20%;
  }

  .submit {
    width: 80%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    font-family: "Oxygen", sans-serif;
    text-transform: lowercase;
    letter-spacing: 0.2rem;
    font-weight: 700;
    font-size: 15px;

    background: #ffd666;
    border: none;
    border-radius: 12px;
    cursor: pointer;

    width: 100%;
    height: 35%;

    transition: 0.4s;
  }

  button:hover {
    background: #c1e1e1;
  }

</style>