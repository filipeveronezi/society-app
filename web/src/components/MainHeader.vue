<template>
<div id="main-header">
  <header>
      <router-link to="/courts" id="logo">
        <img
          id="logo-img"
          src="../assets/images/logo-icon.svg"
          alt="Logomarca de Society"
        />
        <p id="logo-text">Society</p>
      </router-link>
      <h1 class="animate-fadeIn">{{ title }}</h1>
      <router-link to="/" id="logout" @click.native="logout">Logout</router-link>
    </header>
</div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    logout() {
      window.localStorage.clear();
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/animations.css';

header {
  border-bottom: 1px solid #c6c6c6;
  background: #ffffff;
  position: fixed;
  top: 0;

  width: 100%;
  height: 85px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  z-index: 999;
}

#logo {
  display: flex;
  flex-direction: row;

  align-items: center;

  cursor: pointer;

  text-decoration: none;
}

#logo-img {
  width: 50px;
  height: 50px;

  margin: 0 0 0 30px;
}

#logo-text {
  letter-spacing: 0.3em;
  text-transform: lowercase;
  color: #0f0f0f;

  font-weight: 300;
  font-size: 18px;
  line-height: 81px;

  margin: 0 0 0 10px;
}

header h1 {
  font-family: "Oxygen", sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 3px;

  text-transform: lowercase;

  animation-delay: 50ms;

  cursor: default;
}

#logout {
  font-family: "Oxygen", sans-serif;
  font-size: 18px;
  font-weight: 400;
  
  text-decoration: none;
  text-transform: lowercase;
  letter-spacing: 0.3rem;
  
  outline: none;
  border: none;
  background: none;

  height: 100%;
  width: 5%;

  color: #C6C6C6;
  margin: 0;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: .4s;

  cursor: pointer;
}

#logout:hover {
  background: #e6e6e6;
  color: #FFFFFF;
}

</style>