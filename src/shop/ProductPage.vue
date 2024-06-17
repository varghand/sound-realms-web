<template>
  <main-layout>
    <div class="content">
      <div class="section-content">
        <MyBreadcrumbs
            :breadcrumbs="[
              {
                title: 'Sound Realms',
                link: '/',
              },
              {
                title: 'Shop',
                link: '/shop',
              },
              {
                title: product.title
              },
            ]"
          />
        <div class="header-row">
          <span />
          <h1>{{ product.title }}</h1>
          <span class="clickableIcon" @click="() => displayCart(product)">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <div v-if="productsInCart > 0" class="numberCircle">{{ productsInCart }}</div>
          </span>
        </div>
        <p class="cardText">(Pre-Order)</p>
        <img :src="getImageUrl(product)" :alt="product.title" />
        <p class="cardText">
          {{ product.description }}
        </p>
        <p class="center-me cardPrice">{{ product.price }} SEK</p>
        <MyButton :click="() => addToCart(product)"> Add To Cart </MyButton>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import MyButton from "../components/MyButton.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  name: "WebShop",
  components: {
    MainLayout,
    MainFooter,
    MyButton,
    MyBreadcrumbs,
  },
  data() {
    return {
      products: [
        {
          image: "/images/fod-funded.jpg",
          title: "Lone Wolf: The Fortress of Death",
          price: 215,
          description:
            "An audio adventure for mobile devices, set in Joe Dever's world of Lone Wolf for the Sound Realms system.",
          id: "fod-pre-order",
        },
        {
          image: "/images/fist-square.jpg",
          title: "Steve Jackson's F.I.S.T.",
          price: 215,
          description:
            "The original F.I.S.T. adventure, created by the fertile mind of Steve Jackson, now returns as it was released in 1988.",
          id: "fist-pre-order",
        },
        {
          image: "/images/bundle-shop.jpg",
          title: "The Fortress of Death + F.I.S.T. Bundle",
          price: 500,
          description:
            "Includes all expansions to The Fortress of Death for 12 months counting from the game's release date.",
          id: "bundle-pre-order",
        },
        {
          image: "/images/12m-updates.jpg",
          title: "The Fortress of Death Expansions (12 months)",
          price: 120,
          description:
            "Access to all expansions coming out for 12 months following the game's release.",
          id: "fod-expansions",
        },
      ],
    };
  },
  computed: {
    product() {
      return this.products.find((product) => product.id === this.$route.params.id);
    },
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    productsInCart() {
      return this.$store.state.shoppingCart.length;
    },
  },
  methods: {
    displayCart() {
      window.location.href = "/shop/checkout";
    },
    getImageUrl(product) {
      return new URL(product["image"], import.meta.url);
    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/pergament_background.jpg");
  width: 100%;
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: black;
  max-width: 100%;
}

.checkout-button {
  margin-top: 50px;
}

.section-content {
  margin-bottom: 50px;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.numberCircle {
  border-radius: 50%;
  width: 13px;
  height: 13px;
  padding: 8px;

  background: #fff;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 12px Arial, sans-serif;
}
</style>
