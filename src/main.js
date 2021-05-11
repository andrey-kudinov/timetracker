import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "/src/assets/styles/styles.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);

const firebaseConfig = {
  apiKey: "AIzaSyDyOYT4r-_o0ejsCkCSMrl-rGBV_BfNJKs",
  authDomain: "timetracker-dobro.firebaseapp.com",
  projectId: "timetracker-dobro",
  storageBucket: "timetracker-dobro.appspot.com",
  messagingSenderId: "809797779720",
  appId: "1:809797779720:web:394be0848f7f3df3542cbd",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      Vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
