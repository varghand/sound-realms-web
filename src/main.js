import { createApp } from "vue";
import VueGtag from "vue-gtag-next";
import { Amplify } from "aws-amplify";
import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faXmark);
library.add(faTrash);
library.add(faCartShopping);
library.add(faUserSecret);

// DEV
// Amplify.configure({
//   Auth: {
//     Cognito: {
//       userPoolClientId: '6rji8tci1r0u5mfdp8iemtvjmn',
//       userPoolId: 'eu-north-1_wScBt5dG1',
//       region: "eu-north-1"
//     }
//   }
// });

// PROD
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: 'e83tu0ab4amfr4m0uu57co62p',
      userPoolId: 'eu-north-1_pZ63tejOu',
      region: "eu-north-1"
    }
  }
});

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

const store = createStore({
  state() {
    return {
      user: null,
      shoppingCart: [],
      unlockedAdventures: [],
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearCart(state) {
      state.shoppingCart = [];
    },
    addToCart(state, product) {
      if (state.shoppingCart.some(e => e.id === product.id)) {
        // Don't allow duplicated in array
        return;
      }
      state.shoppingCart.push(product);
    },
    removeFromCart(state, product) {
      state.shoppingCart = state.shoppingCart.filter(function(el) {
        return el.id !== product.id;
      });
    },
    setUnlockedAdventures(state, unlockedAdventures) {
      state.unlockedAdventures = unlockedAdventures;
    },
  },
  plugins: [vuexLocal.plugin]
});

createApp(App)
  .use(router)
  .use(store)
  .use(VueGtag, {
    property: {
      id: "G-J9XKGMD9SC",
      params: {
        send_page_view: false
      }
    }
  })
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
