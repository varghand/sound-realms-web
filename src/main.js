import { createApp } from 'vue';
import VueGtag from 'vue-gtag-next';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(VueGtag, {
    property: {
      id: 'G-J9XKGMD9SC',
      params: {
        send_page_view: false,
      },
    },
  })
  .mount('#app');
