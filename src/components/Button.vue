
<template>
  <button v-bind:class="{ invertedButton: inverted }">
    <slot></slot>
  </button>
</template>

<script>

export default {
  props: {
    inverted: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style scoped>
.active {
  color: cornflowerblue;
}
button {
  background-color: #a166a0;
  color: white;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: 2px;
  padding: 10px 25px;
  margin: 0px 15px;
  font-family: HamletOrNot, Georgia, serif;
  cursor: pointer;
  outline: none;
  opacity: 0.8;
  transition: 0.3s;
}

.invertedButton {
  background-color: white;
  color: black;
}

button:hover {
  opacity: 1;
  background-color: #6a0000;
  color: #a166a0;
}
</style>
