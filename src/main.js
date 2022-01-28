import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { routes } from "./routes";

import vuetify from './plugins/vuetify'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router,
  vuetify,
  render: (h) => h(App)
});
