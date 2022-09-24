import { createApp } from 'vue'
import VueMathjax from 'vue-mathjax-next';
import App from './App.vue'
import router from './router/'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faBook)
library.add(faDiagramProject)
library.add(faUser)
library.add(faGithub)



//createApp(App).use(router).use(VueMathjax).mount('#app')
const app = createApp(App)
app.use(VueMathjax)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')