<template>
  <main>
    <div id="logo">
      <img src="../assets/logo-icon.svg" alt="Logomarca de Society" />
      <p id="logo-text">Society</p>
    </div>
    <div id="forms">
      <form @submit="login" id="loginForm">
        <h1>Acesse</h1>
        <h2>
          Sua conta
          <strong>society</strong>
        </h2>
        <input v-model="loginEmail" type="text" placeholder="E-mail" required />
        <input
          v-model="loginPassword"
          type="password"
          placeholder="Senha"
          required
        />
        <button type="submit">Acesse</button>
      </form>
      <form @submit="register" id="registerForm">
        <h1>Ou... <br />Registre-se</h1>
        <h2>Gratuitamente agora mesmo</h2>
        <input v-model="registerName" type="text" placeholder="Nome" required />
        <input
          v-model="registerEmail"
          type="text"
          placeholder="E-mail"
          required
        />
        <input
          v-model="registerPassword"
          type="password"
          placeholder="Senha"
          required
        />
        <button type="submit">Registre-se</button>
      </form>
    </div>
  </main>
</template>

<script>
import regeneratorRuntime from "regenerator-runtime"; // necessary for event handler async functions

export default {
  data: () => {
    return {
      loginEmail: "",
      loginPassword: "",
      registerName: "",
      registerEmail: "",
      registerPassword: ""
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();

      const res = await fetch("http://localhost:3333/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.loginEmail,
          password: this.loginPassword
        })
      });

      if (res.status == 200) {
        const { user, token } = await res.json();

        window.localStorage.clear();
        window.localStorage.setItem("user", user);
        window.localStorage.setItem("token", token);

        this.$router.push("/courts");

        this.$notify({
          group: "success",
          title: `Bem-vindo ${user.name}!`,
          text: "",
          closeOnClick: "true"
        });
      } else {
        this.$notify({
          group: "error",
          title: "Erro",
          text: "Credenciais inválidas.",
          closeOnClick: "true"
        });
      }
    },
    async register(e) {
      e.preventDefault();

      const res = await fetch("http://localhost:3333/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.registerName,
          email: this.registerEmail,
          password: this.registerPassword
        })
      });

      if (res.status == 200) {
        this.$notify({
          group: "success",
          title: "Seja bem-vindo!",
          text:
            "Seu cadastro foi realizado com sucesso, acesse sua conta agora mesmo através do formulário de login.",
          closeOnClick: "true"
        });
        this.registerName = "";
        this.registerEmail = "";
        this.registerPassword = "";
      } else {
        this.$notify({
          group: "error",
          title: "Erro",
          text: "Falha ao cadastrar.",
          closeOnClick: "true"
        });
      }
    }
  }
};
</script>

<style>
*:focus {
  outline: none;
}

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

main {
  width: 100%;
  height: 100%;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

h1, h2 {
  font-weight: normal;
}

#logo {
  position: absolute;
  left: 17%;
}

#logo-text {
  letter-spacing: 0.3em;
  text-transform: lowercase;
  color: #0f0f0f;

  font-weight: 300;
  font-size: 64px;
  line-height: 81px;

  margin: 0;
}

#forms {
  position: absolute;
  right: 0;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

form {
  background: #f9f9f9;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 4vh;
  margin: 1vh;
  width: 55%;
  padding: 1rem 5rem 2.5rem 5rem;
}

input,
button {
  height: 27px;
}

input {
  font-family: "Oxygen", sans-serif;
  font-size: 16px;

  letter-spacing: 0.1rem;

  padding: 1px 0 1px 15px;

  background: #f0f1f2;
  border: none;
  border-radius: 12px;

  width: 65%;
}

input::placeholder {
  text-transform: lowercase;
  letter-spacing: 0.2rem;
}

input + input {
  margin-top: 2vh;
}

button {
  font-family: "Oxygen", sans-serif;
  text-transform: lowercase;
  letter-spacing: 0.2rem;
  font-weight: 700;
  font-size: 16px;

  margin-top: 2vh;
  background: #ffd666;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  width: 66.5%;

  transition: 0.4s;
}

button:hover {
  background: #c1e1e1;
}

h1,
h2 {
  letter-spacing: 0.2rem;
  text-transform: lowercase;
}

h1 {
  margin-top: 0;
  margin-bottom: 3px;
  text-align: left;
}

h2 {
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 16px;
}

#loginForm {
  height: 250px;
}

#registerForm {
  height: 350px;
}

.vue-notification {
  font-family: "Oxygen", sans-serif;

  padding: 20px;
  margin: 15px 15px 0 0;

  border-radius: 12px;

  font-size: 16px;

  color: #ffffff;
  background: #44a4fc;

  border: none;
}

.vue-notification .warn {
  background: #ffb648;
}

.vue-notification .error {
  background: #e54d42;
}

.vue-notification .success {
  background: #68cd86;
}
</style>
