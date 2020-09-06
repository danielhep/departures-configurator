import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import './registerServiceWorker'
import { firestorePlugin } from 'vuefire'
import './firebase/index.js'

Vue.config.productionTip = false
Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
