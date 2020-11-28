<template>
<div id="main-footer">
  <footer>
    <img src="../assets/logo-icon.svg" alt="Logomarca de Society" />
  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#main-footer {
  width: 100%;
  height: 130px;
}

footer {
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 130px;

  background: #f3f3f3;

  display: flex;
  align-items: center;
  justify-content: center;
}

footer img {
  width: 40%;
  height: 40%;
}
</style>