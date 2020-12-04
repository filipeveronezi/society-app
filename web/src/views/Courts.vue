<template>
  <div id="main-container">
    <main-header title="Conecte-se e garanta aquele futebol com os amigos!"/>
    <main>
      <h1 class="animate-up">Work in progress =)</h1>
      <router-link to="/add-court" id="add-court" class="animate-up">
        <p>+</p>
      </router-link>
    </main>
    <main-footer/>
  </div>
</template>

<script>
import validate from "../validate";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default {
  components: {
    MainHeader, MainFooter
  },
  mounted: function() {
      this.validate();
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
      },
  }
};
</script>

<style scoped>
@import '../assets/styles/animations.css';

#main-container {
  min-height: 100%;
  width: 100%;
}

main {
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
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
  bottom: 190px;
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

</style>
