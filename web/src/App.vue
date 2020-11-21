<template>
  <div id="app">
    <router-view></router-view>
    <notifications group="foo" />
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
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
