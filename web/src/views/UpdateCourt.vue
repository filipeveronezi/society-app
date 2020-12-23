<template>
  <div id="main-container">
    <main-header title="Ops... Precisando fazer algumas alterações?"/>
    <main>
      <court-form/>
    </main>
    <main-footer/>
  </div>
</template>

<script>
import validate from "../validate";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import CourtForm from "../components/CourtForm";

export default {
  components: {
    MainHeader, MainFooter, CourtForm
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
}
</script>

<style scoped>
  #main-container {
    width: 100%;
    height: 100%;
  }

  main {
    width: 100%;
    height: 100%;
  }
</style>