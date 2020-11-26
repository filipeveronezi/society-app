<template>
  <div id="title">
    <h1>Em desenvolvimento</h1>
  </div>
</template>

<script>
import validate from '../validate';

export default {
  mounted: function() {
    this.validate();
  },
  methods: {
    async validate() {
    const token = await window.localStorage.getItem('token');
    const res = await validate.jwt_validate(token);
    if(res != 200) {
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
html {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  width: 100%;
  height: 100%;
  background: linear-gradient(329.54deg, #8bc0ca 0%, #72b9b9 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

h1, h2 {
  font-weight: normal;
}

h1 {
  font-family: "Oxygen", sans-serif;
  font-size: 30px;
  text-transform: lowercase;
}

</style>
