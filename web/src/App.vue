<template>
  <div id="app">
    <router-view></router-view>
    <vue-confirm-dialog class="confirm-dialog"></vue-confirm-dialog>
    <notifications group="error" classes="vue-notification error" />
    <notifications group="success" classes="vue-notification success" />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');

router-view {
  height: 100%;
}

*:focus {
  outline: none;
}

html {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  min-height: 100%;
  width: 100%;
  margin: 0;
}

body #app {
  font-family: 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-align: center;
  color: #0F0F0F;
  height: 100vh;
  width: 100%;
}

.confirm-dialog {
  font-family: "Oxygen", sans-serif;
  font-weight: 700;
}

.vue-notification {
  font-family: "Oxygen", sans-serif !important;

  padding: 20px !important;
  margin: 15px 15px 0 0 !important;

  border-radius: 12px !important;

  font-size: 16px !important;

  border: none !important;
}

.vue-notification .error {
  background: #e54d42 !important;
}

.vue-notification .success {
  background: #68cd86 !important;
}

</style>
