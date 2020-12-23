<template>
  <div id="main-container">
    <main-header title="Conecte-se e garanta aquele futebol com os amigos!" id="main-header"/>
    <main>
      <div class="center-wrapper">
        <div v-for="court of courts" :key="court.id">
          <card
            id="card"
            v-bind:name="court.name"
            v-bind:street="court.address.street"
            v-bind:number="court.address.number"
            v-bind:district="court.address.district"
            v-bind:city="court.address.city"
            v-bind:state="court.address.state"
            v-bind:hour_value="court.hour_value"
            v-bind:phone="court.phone"
          />
        </div>
      </div>
      <router-link to="/add-court" id="add-court" class="animate-up">
        <p>+</p>
      </router-link>
    </main>
    <main-footer id="main-footer" />
  </div>
</template>

<script>
import validate from "../validate";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import Card from "../components/Card";
import Courts from "../services/courts";

export default {
  data: () => {
    return {
      courts: []
    };
  },
  components: {
    MainHeader,
    MainFooter,
    Card
  },
  mounted: function() {
    this.validate();
    Courts.getCourts().then(res => {
      this.courts = res.data;
    });
  },
  methods: {
    async validate() {
      const token = await window.localStorage.getItem("token");
      const res = await validate.jwt_validate(token);
      if (res != 200) {
        this.$router.push("/");
        this.$notify({
          group: "error",
          title: `Usuário não autenticado`,
          text: "Por favor, realize o login novamente.",
          closeOnClick: "true"
        });
      }
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/animations.css";

#main-container {
  min-height: 100%;
  width: 100%;
}

main {
  min-height: 100vh;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f9f9f9;
}

#add-court {
  background: #ffd666;
  width: 80px;
  height: 80px;
  outline: none;
  border: 0;
  border-radius: 25px;

  padding: 0px;
  position: fixed;
  bottom: 140px;
  right: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.4s;
  animation-delay: 100ms;

  text-decoration: none;
}

#add-court:hover {
  background: #c1e1e1;
}

#add-court p {
  font-family: "Oxygen", sans-serif;
  color: #ffffff;
  font-size: 60px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

h1,
h2 {
  font-weight: normal;
}

h1 {
  font-family: "Oxygen", sans-serif;
  font-size: 30px;
  text-transform: lowercase;

  animation-delay: 50ms;
}

@media(min-width: 122px) {
  .center-wrapper { width: 122px; }
}

@media(min-width: 296px) {
  .center-wrapper { width: 244px; }
}

@media(min-width: 416px) {
  .center-wrapper { width: 366px; }
}

@media(min-width: 524px) {
  .center-wrapper { width: 488px; }
}

@media(min-width: 646px) {
  .center-wrapper { width: 610px; }
}

.center-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 150px;
  margin: 0 auto;
  background: none;
  width: 930px;
}

#card {
  margin: 20px;
}

</style>
