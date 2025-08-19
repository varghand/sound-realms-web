<template>
  <div class="footer-wrapper">
    <div class="soundRealmsStrip">
      <a
        href="https://soundrealms.com/"
        class="logo-link"
      >
        <img
          src="../assets/3_SR_BrandLogo_White.png"
          class="white_logo"
        >
      </a>
      <p><i><a href="https://soundrealms.com/">RETURN HOME</a></i></p>
    </div>
    <div class="footer">
      <p>Copyright © 2020-{{ getCurrentYear() }} Sound Realms AB. All rights reserved.</p>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.white_logo {
  max-height: 100px;
}
.footer-wrapper {
  width: 100%;
}
.soundRealmsStrip {
  background-color: #333333;
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer {
  background-color: #333333;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo-link {
  display: flex;
  justify-content: center;
}
.logo-link >  img {
  padding-top: 30px;
  max-width: 80%
}
.footer > p {
  color: #ffffff;
  max-width: 80%;
}
.footer > a > img {
  max-width: 200px;
}
.links {
  display: flex;
  justify-content: space-evenly;
}

.link-col {
  width: 180px;
  text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.link-col > a {
  padding-bottom: 10px;
}

@media screen and (max-width:540px){
  .links  {
    flex-direction: column;
  }
}
</style>
