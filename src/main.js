// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App'
Vue.use(VueRouter);
Vue.use(VueResource);

import homeLine from './components/homeLine'
import barLine from './components/barLine'


const router = new VueRouter({
    routes: [
    {
      path: '/homeLine',
      name: 'homeLine',
      component: require('./components/homeLine')
    },
    {
      path: '/barLine',
      name: 'barLine',
      component: require('./components/barLine')
    },
      {
          path: '*',
          redirect: '/homeLine'
      }
  ], 
  mode: 'history',
  linkActiveClass: "router-link-active"
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

// new Vue({
//   render: h => h(App)
// }).$mount('#app');

