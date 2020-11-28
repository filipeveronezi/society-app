<template>
<div id="main-header">
  <header>
      <router-link to="/courts" id="logo">
        <img
          id="logo-img"
          src="../assets/logo-icon.svg"
          alt="Logomarca de Society"
        />
        <p id="logo-text">Society</p>
      </router-link>
      <h1>{{ title }}</h1>
      <router-link to="/" id="logout" @click.native="logout">Logout</router-link>
    </header>
</div>
</template>

<script>
export default {
  props: ['title'],
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
      logout() {
        window.localStorage.clear();
      }
    }
}
</script>

<style scoped>
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

  color: #C6C6C6;
  margin: 0 30px 0 0;

  cursor: pointer;
}
</style>