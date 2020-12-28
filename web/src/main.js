import Vue from 'vue';
import VueRouter from 'vue-router'; // router
import Notifications from 'vue-notification'; // notifications plugin
import VueConfirmDialog from 'vue-confirm-dialog' // confirm dialog plugin

// components
import App from './App.vue';
import Landing from './views/Landing.vue';
import Courts from './views/Courts.vue';
import AddCourt from './views/AddCourt';
import UpdateCourt from './views/UpdateCourt';

// middlewares
Vue.use(VueRouter);
Vue.use(Notifications);
Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);

// paths
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Landing },
    { path: "/courts", component: Courts },
    { path: "/add-court", component: AddCourt },
    { path: "/update-court", component: UpdateCourt}
  ]
})

// render main page
new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
