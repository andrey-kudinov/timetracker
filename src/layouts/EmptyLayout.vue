<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main {
  background-color: rgb(76, 0, 130);
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}
</style>