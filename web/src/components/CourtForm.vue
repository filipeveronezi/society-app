<template>
  <div id="court-form">
    <form class="animate-up" @submit="submitForm">
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
        <input type="text" id="phone" v-model="phone" v-mask="'+55 (##) #####-####'" placeholder="(XX) XXXXX-XXXXX" required>
      </div>
      <div class="input-group">
        <label for="hour_value">Valor/h</label>
        <input type="text" id="hour_value" v-model="hour_value" v-mask="'?#?#?#.##'" placeholder="XXX.XX" required>
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
          <input type="text" id="number" v-model="number" v-mask="'#####'" required>
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
          <input type="text" id="state" v-model="state" v-mask="'AA'" required>
        </div>
      </div>
      <div class="submit">
        <button type="submit">Enviar</button>  
      </div>

    </form>
  </div>
</template>

<script>
import Courts from "../services/courts";

export default {
  data: () => {
    return {
      court: {
        address: {}
      },
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
  mounted() {
    if(this.$route.name == 'update-court') {
      this.fillForm();
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      if(this.$route.name == 'add-court') {
        this.createCourt();
      } else if(this.$route.name == 'update-court') {
        this.updateCourt();
      }
    },
    fillForm() {
      const court_id = this.$route.params.id;
      const user_id = window.localStorage.getItem("user_id");
      
      Courts.getCourt(court_id, user_id)
      .then(res => {
        this.court = res.data;
        this.name = this.court.name;
        this.phone = this.court.phone;
        this.hour_value = this.court.hour_value;
        this.street = this.court.address.street;
        this.number = this.court.address.number;
        this.district = this.court.address.district;
        this.city = this.court.address.city;
        this.state = this.court.address.state;
      })
      .catch(err => {
        console.log(err);
        
        this.$router.push("/courts");
        
        this.$notify({
          group: "error",
          title: "Operação não permitida!",
          closeOnClick: "true"
        });
      })
    },
    async createCourt() {

      const user_id = await window.localStorage.getItem("user_id");

      const res = await fetch("http://localhost:3000/courts", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.name,
          hour_value: this.hour_value,
          phone: this.phone,
          user_id: user_id
        })
      });

      const { id } = await res.json();

      if (res.status == 200) {
        const second_res = await fetch("http://localhost:3000/courts/" + id + "/addresses", {
        
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

        if (second_res.status == 200) {
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
      } else {
        this.$notify({
          group: "error",
          title: "Erro",
          text: "Falha ao cadastrar.",
          closeOnClick: "true"
        });
      }
    },
    async updateCourt() {
      const court_id = this.$route.params.id;
      
      const res = await fetch("http://localhost:3000/courts/" + court_id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.name,
          hour_value: this.hour_value,
          phone: this.phone,
        })
      });

      if (res.status == 200) {
        const second_res = await fetch("http://localhost:3000/courts/" + court_id + "/addresses", {
          method: "PUT",
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

        if (second_res.status == 200) {
          this.$notify({
            group: "success",
            title: "Dados atualizados com sucesso!",
            closeOnClick: "true"
          });
          this.$router.push("/courts");
        } else {
          this.$notify({
            group: "error",
            title: "Erro",
            text: "Falha ao atualizar dados.",
            closeOnClick: "true"
          });
        }
      } else {
        this.$notify({
          group: "error",
          title: "Erro",
          text: "Falha ao atualizar dados.",
          closeOnClick: "true"
        });
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

  input::placeholder {
    color: #CCCCCC;
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