<template>
  <div id="main-container">
    <main-header title="Cadastre sua quadra e conecte-se com pessoas imediatamente!"/>
    <main>
      <form action="submit">
        
      </form>
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
}
</script>

<style>

</style>