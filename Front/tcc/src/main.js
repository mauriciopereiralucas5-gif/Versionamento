import { createApp } from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap'
import router from './Router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

app.use(router)

app.use(Bootstrap)

app.mount('#app')