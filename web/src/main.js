import Vue from 'vue';
import VueRouter from 'vue-router'; // router
import Notifications from 'vue-notification'; // notifications plugin

// components
import App from './App.vue';
import Landing from './views/Landing.vue';
import Courts from './views/Courts.vue';
import AddCourt from './views/AddCourt';

// middlewares
Vue.use(VueRouter);
Vue.use(Notifications);

// paths
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Landing },
    { path: "/courts", component: Courts },
    { path: "/add-court", component: AddCourt }
  ]
})

// render main page
new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
