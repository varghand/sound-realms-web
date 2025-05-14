<template>
  <div class="footer-wrapper">
    <div class="soundRealmsStrip">
      <a
        href="/"
        class="logo-link"
      >
        <img
          src="../assets/3_SR_BrandLogo_White.png"
          class="white_logo"
        >
      </a>
      <p><i><a href="/">RETURN HOME</a></i></p>
      <div class="links">
        <div class="link-col">
          <p>SOUND REALMS</p>
          <a href="/download">DOWNLOAD</a>
          <a href="https://rlms.cc/3ZaD0mk">WEB SHOP</a>
          <a href="/games">OUR GAMES</a>
          <a
            href="https://www.kickstarter.com/discover/advanced?ref=nav_search&term=sound%20realms"
            target="_blank"
          >KICKSTARTER</a>
        </div>
        <div class="link-col">
          <p>LEARN MORE</p>
          <a href="/faq">FAQ</a>
          <a href="/learn-more">ABOUT US</a>
          <a href="/privacy-policy">PRIVACY POLICY</a>
          <a href="/news">PRESS & NEWS</a>
          <a href="/investors">INVESTOR RELATIONS</a>
        </div>
        <div class="link-col">
          <p>GET IN TOUCH</p>
          <a href="/contact">CONTACT</a>
          <a
            href="https://rlms.cc/srweb-fb"
            target="_blank"
          >FACEBOOK</a>
          <a
            href="https://rlms.cc/srweb-ig"
            target="_blank"
          >INSTAGRAM</a>
          <a
            href="https://rlms.cc/srweb-yt"
            target="_blank"
          >YOUTUBE</a>
          <a
            href="https://rlms.cc/srweb-dc"
            target="_blank"
          >DISCORD</a>
        </div>
      </div>
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
