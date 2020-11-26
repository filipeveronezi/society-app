<template>
  <div id="app">
    <router-view></router-view>
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
#app {
  font-family: 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-align: center;
  color: #0F0F0F;
}

</style>
