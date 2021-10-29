<template>
  <div>
    <div class="soundRealmsStrip">
      <img
        src="../assets/sound_realms_white_logo.png"
        style="padding: 30px; max-width: 80%"
      />
      <div class="links">
        <a href="/game-testing">GAME TESTING</a>
        <a href="/faq">FAQ</a>
        <a href="/contact">CONTACT</a>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © 2020-2021 Varghand Publishing AB. All rights reserved.</p>
      <a href="https://www.varghand.com/">
        <img src="../assets/varghand_logo.png" style="padding: 30px" />
      </a>
    </div>
  </div>
</template>


<style scoped>
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
  background-color: #2c2c2c;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer > p {
  color: #4f4e4f;
  max-width: 80%;
}
.footer > a > img {
  max-width: 200px;
}
.links {
  display: flex;
  justify-content: space-evenly;
}
.links > a {
  padding: 30px;
}
</style>
