<template>
<div id="main-footer">
  <footer>
    <img src="../assets/images/logo-icon.svg" alt="Logomarca de Society" />
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
  height: 85px;
}

footer {
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 85px;

  background: #f3f3f3;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
}

footer img {
  width: 40%;
  height: 40%;
}
</style>