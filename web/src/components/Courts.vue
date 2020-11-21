<template>
  <div>
    <h1 v-if="isLoggedIn">Bem-vindo!</h1>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  }
}
</script>

<style>

</style>