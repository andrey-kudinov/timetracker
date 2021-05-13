<template>
  <div class="home">
    <div class="content">
      <div class="time">
        <div class="time__item">
          <button class="btn btn_secondary">Пришел</button>
          <div class="text">22:22:22</div>
          <button class="btn btn_secondary">Введенное</button>
          <button class="btn btn_secondary">Удалить</button>
        </div>
        <div class="time__item">
          <button class="btn btn_secondary">Пришел</button>
          <div class="text">22:22:22</div>
          <button class="btn btn_secondary">Введенное</button>
          <button class="btn btn_secondary">Удалить</button>
        </div>
        <div class="time__item">
          <button class="btn btn_secondary">Пришел</button>
          <div class="text">22:22:22</div>
          <button class="btn btn_secondary">Введенное</button>
          <button class="btn btn_secondary">Удалить</button>
        </div>
        <div class="time__item">
          <button class="btn btn_secondary">Пришел</button>
          <div class="text">22:22:22</div>
          <button class="btn btn_secondary">Введенное</button>
          <button class="btn btn_secondary">Удалить</button>
        </div>
      </div>
      <div class="office">
        <div class="office__item">
          <h2>Пришли:</h2>
          <div class="text_2" v-for="(p, i) in come" :key="i">{{ p.name }}</div>
        </div>
        <div class="office__item">
          <h2>На обеде:</h2>
          <div class="text_2" v-for="(p, i) in come" :key="i">{{ p.name }}</div>
        </div>
        <div class="office__item">
          <h2>Ушли домой:</h2>
          <div class="text_2" v-for="(p, i) in come" :key="i">{{ p.name }}</div>
        </div>
        <div class="office__item">
          <h2>Не пришли:</h2>
          <div class="text_2" v-for="(p, i) in come" :key="i">{{ p.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      come: [
        { name: "Andrey" },
        { name: "Andrey" },
        { name: "Andrey" },
        { name: "Andrey" },
        { name: "Andrey" },
        { name: "Andrey" },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgb(0, 0, 0);
}
.content {
  width: 100%;
  background-color: rgb(0, 0, 0);
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 1fr;
  row-gap: 30px;
}
.time {
  display: flex;
  flex-direction: column;
}
.time__item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  column-gap: 10px;
  margin-bottom: 15px;
}
.text {
  color: white;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  border: 3px solid white;
  border-radius: 30px;
  height: 45px;
}
h2 {
  color: white;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
}
.text_2 {
  color: white;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
}
.office {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
.btn {
  font-size: 24px;
}
</style>
