import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Notifications from 'vue-notification';

import App from './App.vue';
import Login from './components/Login.vue';
import Courts from './components/Courts.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Notifications)

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {},
  getters: {
    isLoggedIn(state) {
      return state.token;
    }
  }
});

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: App },
    { path: "/login", component: Login },
    { path: "/courts", component: Courts },
  ]
})

new Vue({
  render: h => h(App),
  store: store,
  router,
}).$mount("#app");
