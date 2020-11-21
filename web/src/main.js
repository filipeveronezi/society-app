import Vue from 'vue';
import Vuex from 'vuex'; // storage
import VueRouter from 'vue-router'; // router
import Notifications from 'vue-notification'; // notifications plugin

// components
import App from './App.vue';
import Landing from './components/Landing.vue';
import Courts from './components/Courts.vue';

// middlewares
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Notifications)

// vuex storage
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

// paths
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Landing },
    { path: "/courts", component: Courts },
  ]
})

// render main page
new Vue({
  render: h => h(App),
  store: store,
  router,
}).$mount("#app");
