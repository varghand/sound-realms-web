<template>
  <div class="bg">
    <div id="app">
      <!-- <Header /> -->
      <!-- <Analytics /> -->
      <div id="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@font-face {
  font-family: "HamletOrNot";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("HamletOrNot"), url("/fonts/HamletOrNot.ttf") format("ttf");
}

:root {
  --text-color: #0ebe08;
  --link-color: #a166a0;
  --hover-color: white;
  font-size: 150%;
}

body,
html {
  height: 100%;
  background-color: white;
  margin: 0;
}

#app {
  font-family: Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

#content {
  max-width: 70ch;
  padding: 2ch;
  margin: auto;
}

@media screen and (max-width: 600px) {
  .bg {
    background-size: auto;
  }
}

a {
  color: var(--link-color);
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: lighter;
  text-align: left;
  font-size: small;
  text-decoration: none;
}
a.active {
  color: var(--link-color);
}
a:hover {
  color: var(--hover-color);
}

p {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: lighter;
  text-align: left;
  font-size: small;
}
.bold {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}

hr {
  width: 50%;
  border-color: var(--text-color);
}

span.title {
  font-style: italic;
}

</style>
