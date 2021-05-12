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
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}
</style>