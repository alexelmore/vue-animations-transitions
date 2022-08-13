import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'

import { faVuejs } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faBasketballBall, faVuejs)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('base-modal', BaseModal);

app.mount('#app');
