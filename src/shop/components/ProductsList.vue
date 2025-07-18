<template>
  <main-layout>
    <div class="content">
      <div class="grid-container">
        <div
          v-for="(product) in products"
          :key="product.title"
          class="productCard"
        >
          <img
            :src="getImageUrl(product)"
            :alt="product.title"
          >
          <p class="cardHeader">
            {{ product.title }}
          </p>
          <p
            v-if="product.preOrder"
            class="cardText"
          >
            (Pre-Order)
          </p>
          <p v-else />
          <p class="cardText">
            <span v-html="product.description"/>
          </p>
          <p class="center-me cardPrice">
            {{ product.price }} SEK
          </p>
          <MyButton
            :click="() => displayProductPage(product)"
            class="readMoreButton"
          >
            Read More
          </MyButton>
          <MyButton :click="() => addToCart(product)">
            Add to Cart
          </MyButton>
        </div>
        <div />
      </div>
    </div>
  </main-layout>
</template>

<script>
import MyButton from '../../components/MyButton.vue';
import products from '../products';

export default {
  name: 'ProductsList',
  components: {
    MyButton,
  },
  props: {
    productsToShow: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    products() {
      let unhiddenProducts = products.filter(product => !product.hidden);
      if (this.productsToShow === "games") {
        return unhiddenProducts.filter(product => product.type === "game" || product.type === "bundle");
      } else if (this.productsToShow === "expansions") {
        return unhiddenProducts.filter(product => product.type === "expansion");
      }

      return unhiddenProducts;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    getImageUrl(product) {
      return new URL(product['image'], import.meta.url);
    },
    displayProductPage(product) {
      this.$router.push('/shop/product/' + product.url);
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.grid-container {
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width:980px){
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width:680px){
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

.text {
  align-items: flex-start;
}
.center-me {
  margin: auto;
}
.product_image {
  max-width: 40%;
  padding-bottom: 30px;
  padding-right: 30px;
}
.productCard {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.productCard .cardText {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;
}
.productCard .cardHeader {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
  font-weight: bold;
}
.productCard .cardPrice {
  text-align: center;
  font-size: 70%;
}
.productCard:hover{
  background: #eeeeee;
}

.productCard img {
  border-radius: 10px;
}

.readMoreButton {
  margin-bottom: 15px;
  background-color: rgb(212, 201, 162);
  color: rgb(0, 0, 0);
}
</style>
