<template>
  <div>
    <h1 v-if="isLoggedIn">Em desenvolvimento</h1>
    <h1 v-if="!isLoggedIn">Ops, parece que seu login expirou =(</h1>
    <router-link v-if="!isLoggedIn" to="/">Voltar à página inicial</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background: linear-gradient(329.54deg, #8bc0ca 0%, #72b9b9 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

h1 {
  font-family: "Oxygen", sans-serif;
  font-size: 30px;
}

router-link {
  font-family: "Oxygen", sans-serif;
  font-size: 15px;

  color: #0F0F0F;
}
</style>
