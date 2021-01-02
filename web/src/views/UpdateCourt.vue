<template>
  <div id="main-container">
    <main-header title="Ops... Precisando fazer algumas alterações?"/>
    <main>
      <court-form
        v-bind:initial_name="court.name"
        v-bind:initial_phone="court.phone"
        v-bind:initial_hour_value="court.hour_value"
        v-bind:initial_street="court.address.street"
        v-bind:initial_number="court.address.number"
        v-bind:initial_district="court.address.district"
        v-bind:initial_city="court.address.city"
        v-bind:initial_state="court.address.state"
      />
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
  data: () => {
    return {
      court: {
        address: {}
      }
    }
  },
  components: {
    MainHeader, MainFooter, CourtForm
  },
  created() {
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