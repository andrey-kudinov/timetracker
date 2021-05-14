<template>
  <div class="home">
    <div class="content">
      <div class="time">
        <div class="time__item">
          <button class="btn btn_secondary" @click="add('пришел')">
            Пришел
          </button>
          <div class="input">
            <input type="time" name="" id="" v-model="come" />
            <div class="img" @click="isCome = !isCome">
              <img :src="require('@/assets/img/pencil.svg')" alt="" />
            </div>
          </div>
          <button class="btn btn_secondary" v-show="isCome">Введенное</button>
          <button class="btn btn_secondary" v-show="isCome">Удалить</button>
        </div>
        <div class="time__item">
          <button class="btn btn_secondary" @click="add('на обед')">
            Ушел на обед
          </button>
          <div class="input">
            <input type="time" name="" id="" v-model="lunchStart" />
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
          <button class="btn btn_secondary" @click="add('с обеда')">
            Вернулся с обеда
          </button>
          <div class="input">
            <input type="time" name="" id="" v-model="lunchEnd" />
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
          <button class="btn btn_secondary" @click="add('ушел')">
            Ушел домой
          </button>
          <div class="input">
            <input type="time" name="" id="" v-model="leave" />
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
          <div class="text_2" v-for="(p, i) in comeArr" :key="i">
            {{ p.name }}
          </div>
        </div>
        <div class="office__item">
          <h2>На обеде:</h2>
          <div class="text_2" v-for="(p, i) in comeArr" :key="i">
            {{ p.name }}
          </div>
        </div>
        <div class="office__item">
          <h2>Ушли домой:</h2>
          <div class="text_2" v-for="(p, i) in comeArr" :key="i">
            {{ p.name }}
          </div>
        </div>
        <div class="office__item">
          <h2>Не пришли:</h2>
          <div class="text_2" v-for="(p, i) in comeArr" :key="i">
            {{ p.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFilter from "@/filters/date.filter";
// import Toast from "@/components/Toast";
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      comeArr: [
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
      date: new Date(),
      come: null,
      lunchStart: null,
      lunchEnd: null,
      leave: null,
      notes: null,
    };
  },
  methods: {
    ...mapActions(["createNote", "fetchNotes"]),
    async add(userAction) {
      console.log(userAction);
      console.log(dateFilter(new Date(), "month"));
      console.log(dateFilter(new Date(), "day"));
      console.log(new Date());
      console.log(dateFilter(new Date(), "short"));
      switch (userAction) {
        case "пришел":
          this.come = dateFilter(new Date(), "short");
          break;
        case "на обед":
          this.lunchStart = dateFilter(new Date(), "short");
          break;
        case "с обеда":
          this.lunchEnd = dateFilter(new Date(), "short");
          break;
        case "ушел":
          this.leave = dateFilter(new Date(), "short");
          break;
        default:
          break;
      }
      try {
        const note = await this.createNote({
          action: userAction,
          month: dateFilter(new Date(), "month"),
          day: dateFilter(new Date(), "day"),
          date: new Date(),
          time: dateFilter(new Date(), "short"),
        });
        console.log("note -", note);
      } catch (e) {
        console.log("add e -", e);
      }
    },
    async start() {
      this.notes = await this.fetchNotes();
      console.log(this.notes);
      this.notes = this.notes.filter((el) => el.id == "май")[0][14]["пришел"];
      console.log(this.notes);
      this.notes = Object.keys(this.notes).map(key => ({...this.notes[key], id: key}))
      console.log(this.notes);
    },
  },
  async mounted() {
    await this.start();
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
  width: 1030px;
}
.btn {
  font-size: 24px;
}
.img {
  height: 25px;
  width: 25px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  bottom: 7px;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
input {
  background: transparent;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-size: 28px;
  line-height: 25px;
  width: 170px;
  padding: 0 20px;
  box-shadow: none;
}
</style>
