import { createApp } from 'vue'
import LegoBricks202302 from 'lego-bricks202302'
import 'lego-bricks/dist/bundle.css'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(LegoBricks202302).use(router).mount('#app')
