
// import router from './router'

// Vue.config.productionTip = false

// new Vue({ 
//   render: h => h(App)
// }).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')

