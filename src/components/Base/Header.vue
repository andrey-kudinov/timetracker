<template>
  <div class="header">
    <div class="time">
      {{ date | date("datetime") }}
    </div>

    <div class="links">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
      >
        <a href="#">{{ link.title }}</a>
      </router-link>
    </div>

    <div class="buttons">
      <!-- <button class="btn btn_secondary btn_change" @click="changeFavicon">Сменить иконку</button> -->
      <button class="btn btn_secondary btn_out" @click="exit">Выйти</button>
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
      links: [
        { title: "Главная", url: "/", exact: true },
        { title: "Моё время", url: "/time" },
        { title: "Профиль", url: "/profile" },
        // { title: "Статистика", url: "/stats" },
        // { title: "Описание", url: "/info" },
        // { title: "Планирование", url: "/planning" },
        // { title: "Новая запись", url: "/record" },
        // { title: "Категории", url: "/categories" },
      ],
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
    rgb(122, 0, 209) 0%,
    rgba(76, 0, 130) 100%
  );
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 94%);
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 10px #000000;
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
  background-color: #2f4353;
  background-image: linear-gradient(315deg, #d2ccc4 0%, #2f4353 85%);
  margin-left: 30px;
  padding: 15px;
  color: rgb(27, 27, 27);
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
  width: 200px;
}
@media all and (max-width: 768px) {
  .btn_out {
    width: auto;
    padding-right: 15px;
    padding-left: 15px;
  }
}
.links {
  display: flex;
}
li {
  list-style-type: none;
  transition: transform 0.5s ease-out;
  opacity: 1;
  margin-right: 10px;
}
a {
  background: linear-gradient(to right, #8ca6db, #b993d6);
  background-color: #2f4353;
  background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);
  padding: 13px;
  border-radius: 30px;
  width: 200px;
  margin: 5px 0;
  display: block;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease-in;
  color: #1b1b1b;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  height: 45px;
  line-height: 22px;
  box-shadow: inset 0 0 10px #000000;
}
a:before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 125px;
  right: 125px;
  top: 0;
  background: #fff;
  border-radius: 30px;
  height: 45px;
  transition: 0.4s;
  opacity: 0.3;
}
a:hover:before {
  left: 0;
  right: 0;
}
a:hover {
  /* border: 1px solid #b993d6; */
}
.active a {
  background: #fff;
}
.active a:before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 125px;
  right: 125px;
  top: 0;
  background: linear-gradient(to right, #8ca6db, #b993d6);
  height: 45px;
  transition: 0.4s;
  opacity: 0.3;
}
.active a:hover:before {
  left: 0;
  right: 0;
}
.active a:hover {
}
.active a {
  background: #fff;
}
a:active {
  color: #fff;
}
</style>
