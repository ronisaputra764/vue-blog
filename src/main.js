import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Tambahkan ikon ke library
library.add(faUser, faCoffee, faFacebook, faTwitter, faGithub);

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import jQuery from 'jquery'
window.$ = jQuery

import './assets/css/styles.css'
import './assets/js/scripts.js'

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app')
