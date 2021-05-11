<template>
  <div class="header">
    <div class="time">
      {{ date | date("datetime") }}, <br v-if="isMobile" />{{ userEmail }}
    </div>

    <div class="buttons">
      <!-- <button class="btn btn_white btn_change" @click="changeFavicon">Сменить иконку</button> -->
      <button class="btn btn_white btn_out" @click="exit">Выйти</button>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      date: new Date(),
      interval_1: null,
      interval_2: null,
      isMobile: false,
    };
  },
  async mounted() {
    this.interval_1 = setInterval(() => {
      this.date = new Date();
    }, 1000);
    this.interval_2 = setInterval(() => {
      this.changeFavicon();
    }, 10000);
    this.isMobile = window.innerWidth < 768 ? true : false;
  },
  beforeDestroy() {
    clearInterval(this.interval_1);
    clearInterval(this.interval_2);
  },
  methods: {
    changeFavicon() {
      const favicon = document.getElementById("favicon");
      const href = [
        // "/favicon.ico",
        "/sweethome/orange.svg",
        "/sweethome/cherry.svg",
        "/sweethome/chock.svg",
        "/sweethome/ice.svg",
        "/sweethome/laptop.svg",
        "/sweethome/balloon.svg",
        "/sweethome/teddy.svg",
        "/sweethome/present.svg",
        "/sweethome/pie.svg",
        "/sweethome/bird.svg",
        "/sweethome/photo.svg",
        "/sweethome/home.svg",
      ];
      favicon.href = href[Math.floor(Math.random() * href.length)];
    },
    async exit() {
      await this.$store.dispatch("logout");
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.header {
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media all and (max-width: 768px) {
  .header {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    row-gap: 15px;
    padding: 20px 0;
  }
}
.time {
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  margin-left: 30px;
  padding: 15px;
  color: #0a467e;
  font-weight: bold;
  border-radius: 15px;
}
@media all and (max-width: 768px) {
  .time {
    text-align: left;
    padding: 0px;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 20px;
    width: auto;
    justify-self: start;
  }
}
.buttons {
  display: flex;
  margin-right: 15px;
}
@media all and (max-width: 768px) {
  .buttons {
    margin: 0;
    margin-top: 5px;
    position: absolute;
    right: 15px;
    top: 16px;
  }
}
.btn_change {
  margin-right: 15px;
}
.btn_out {
  width: 180px;
}
@media all and (max-width: 768px) {
  .btn_out {
    width: auto;
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
