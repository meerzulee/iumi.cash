import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollactive from 'vue-scrollactive';
import Vuelidate from 'vuelidate'

import '@/assets/css/tailwind.css'

Vue.use(VueScrollactive);
Vue.use(Vuelidate)


const VueScrollTo = require('vue-scrollto')


Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')