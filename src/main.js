import Vue from 'vue'
import mint from 'mint-ui'
import app from './app.vue'
import 'mint-ui/lib/style.css'
Vue.use(mint)
new Vue({
  el:"#app",
  render:c => c(app)
})
