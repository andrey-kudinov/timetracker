<template>
  <div class="home">
    <div class="content">
      <div class="time">
        <div class="time__item">
          <button class="btn btn_secondary">Пришел</button>
          <div class="input">
            <input type="text" name="" id="">
            <div class="img" @click="isCome = !isCome">
              <img :src="require('@/assets/img/pencil.svg')" alt="" />
            </div>
          </div>
          <button class="btn btn_secondary" v-show="isCome">Введенное</button>
          <button class="btn btn_secondary" v-show="isCome">Удалить</button>
        </div>
        <div class="time__item">
          <button class="btn btn_secondary">Ушел на обед</button>
          <div class="input">
            <div class="img" @click="isLanchStart = !isLanchStart">
              <img :src="require('@/assets/img/pencil.svg')" alt="" />
            </div>
          </div>
          <button class="btn btn_secondary" v-show="isLanchStart">
            Введенное
          </button>
          <button class="btn btn_secondary" v-show="isLanchStart">
            Удалить
          </button>
        </div>
        <div class="time__item">
          <button class="btn btn_secondary">Вернулся с обеда</button>
          <div class="input">
            <div class="img" @click="isLanchFinish = !isLanchFinish">
              <img :src="require('@/assets/img/pencil.svg')" alt="" />
            </div>
          </div>
          <button class="btn btn_secondary" v-show="isLanchFinish">
            Введенное
          </button>
          <button class="btn btn_secondary" v-show="isLanchFinish">
            Удалить
          </button>
        </div>
        <div class="time__item">
          <button class="btn btn_secondary">Ушел домой</button>
          <div class="input">
            <div class="img" @click="isLeave = !isLeave">
              <img :src="require('@/assets/img/pencil.svg')" alt="" />
            </div>
          </div>
          <button class="btn btn_secondary" v-show="isLeave">Введенное</button>
          <button class="btn btn_secondary" v-show="isLeave">Удалить</button>
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
      isCome: false,
      isLeave: false,
      isLanchStart: false,
      isLanchFinish: false,
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
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 94%);
  box-shadow: inset 0 0 10px #000000;
}
.content {
  width: 100%;
  background-color: rgb(0, 0, 0);
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 94%);
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 1fr;
  row-gap: 30px;
}
.time {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
.time__item {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  row-gap: 20px;
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
.img {
  height: 30px;
  width: 30px;
  cursor: pointer;
  position: absolute;
  right: 15px;
  bottom: 5px;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  margin-bottom: -5px;
}
.input {
  color: white;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  border: 3px solid white;
  border-radius: 30px;
  height: 45px;
  position: relative;
}
input {
  background: transparent;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  width: 240px;
  padding: 0 20px;
}
</style>
