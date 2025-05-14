<template>
  <main-layout>
    <div class="content">
      <section>
        <div class="section-content">
          <MyBreadcrumbs
            :breadcrumbs="[
              {
                title: 'Sound Realms',
                link: '/',
              },
              {
                title: 'Games',
              },
            ]"
          />
          <div class="header-row">
            <span />
            <h1>Sound Realms Adventures</h1>
            <span
              class="clickableIcon"
              @click="() => displayCart(product)"
            >
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              <div
                v-if="productsInCart > 0"
                class="numberCircle"
              >{{ productsInCart }}</div>
            </span>
          </div>

          <p class="bodyText">
            These are the full adventures currently available to play on the Sound Realms platform.
            <br>
            For physical deluxe versions and other merch,
            <a
              href="https://shop.soundrealms.com/"
              class="bold"
            >please click here</a>!
          </p>

          <ProductsList products-to-show="games" />

          <div v-if="shoppingCart.length > 0">
            <MyButton
              href="/shop/checkout"
              class="checkout-button"
            >
              Continue to Checkout
            </MyButton>
          </div>

          <h1>Expansions & Add-Ons</h1>
          <p class="bodyText">
            Add replayability with extra content. Most adventures get updated on a monthly basis, so
            keep an eye open for updates!
          </p>

          <ProductsList products-to-show="expansions" />

          <div v-if="shoppingCart.length > 0">
            <MyButton
              href="/shop/checkout"
              class="checkout-button"
            >
              Continue to Checkout
            </MyButton>
          </div>

          <h1>Coming Soon</h1>
          <p class="bodyText">
            We are constantly adding more adventures to the Sound Realms platform! Below is a list
            of upcoming titles. Stay tuned for updates!
          </p>
          <div class="row">
            <div>
              <a
                href="/maceandmagic"
                class="dreadhorn_image"
              >
                <img
                  src="../assets/home/dreadhorn.png"
                  alt="Mace & Magic"
                >
              </a>
            </div>
            <div>
              <a
                href="/call-of-cthulhu"
                class="dreadhorn_image"
              >
                <img
                  src="../assets/home/coc-round.png"
                  alt="Call of Cthulhu"
                >
              </a>
            </div>
            <div>
              <a
                href="/dracula"
                class="dreadhorn_image"
              >
                <img
                  src="../assets/home/dracula.png"
                  alt="Dracula: Curse of the Vampire"
                >
              </a>
            </div>
          </div>
        </div>

        <NewsletterStrip />
      </section>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainFooter from "../components/MainFooter.vue";
import MainLayout from "../layouts/Main.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";
import ProductsList from "../shop/components/ProductsList.vue";
import MyButton from "../components/MyButton.vue";
import NewsletterStrip from "../components/NewsletterStrip.vue";

export default {
  name: "AllGamesPage",
  components: {
    MainFooter,
    MainLayout,
    MyBreadcrumbs,
    ProductsList,
    MyButton,
    NewsletterStrip,
  },
  computed: {
    user() {
      return this.$store.state.user;
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
  },
};
</script>

<style scoped>
h1,
h2 {
  font-family: Arial, Helvetica, sans-serif;
}

.dreadhorn_image {
  max-width: 40%;
  padding-bottom: 30px;
  padding-right: 30px;
}

img {
  max-width: 100%;
}

.section-content {
  padding-bottom: 30px;
}

.row {
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 960px;
}
@media screen and (max-width: 980px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
  }
  .dreadhorn_image {
    max-width: 80%;
  }
}
@media screen and (max-width: 680px) {
  .row {
    grid-template-columns: repeat(1, 1fr);
  }
}

.checkout-button {
  margin-top: 50px;
  margin-bottom: 50px;
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
.bodyText {
  text-align: center;
  margin-bottom: 50px;
}
</style>
