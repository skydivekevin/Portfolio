// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { angledoubledown } from '@fortawesome/free-solid-svg-icons'


// library.add(faCoffee)
// library.add(angledoubledown)


//FOR SOME REASON; VUE.COMPONENT BELOW BREAKS EVERYTHING...
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// particlesJS.load('particles-js', './static/assets/particles.json', function () {
//   console.log('callback - particles.js config loaded');
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
