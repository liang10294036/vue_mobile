import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 公共样式 css
import './assets/css/global.css'
// vant
import './plugins/vant.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')