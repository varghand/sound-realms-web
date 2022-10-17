<template>
  <main-layout>
    <div class="content">
      <Menu/>
      <div class="section-content">
        <h1>Take heed adventurer!</h1>
        <p>
          Do you have the courage to explore the perilous halls of Vemhir the
          Soulbinder’s ancient castle? Find out in this very first demo adventure
          for Sound Realms &mdash; Mace & Magic.
        </p>
        <p>Click or scan one of the QR codes below:</p>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
          <img src="../assets/gametest/android_qr.png" class="qr"/>
          </a>
          <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
          <img src="../assets/gametest/ios_qr.png"  class="qr"/>
          </a>
        </div>
        <img src="../assets/4skeletons.png" class="image"/>
        <p>
          Please use quality headphones for a full, immersive 360 surround sound
          experience!
        </p>
        <p>
          Keep in mind that this is just our demo adventure. Stay alert for regular
          updates and please report any bugs immediately to: <a href="mailto:app@sound-realms.com">app@sound-realms.com</a>.
        </p>

        <div class="strip">
          <h1>Sign up for newsletter</h1>
          <!-- <p>Sign up for our newsletter and receive a new playable character for the demo adventure as a free bonus.</p> -->
          <iframe src="https://cdn.forms-content.sg-form.com/ae43989a-a486-11ec-941c-ceafd6e237fb"/>
        </div>

      </div>
      <Footer/>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Footer from '../components/Footer.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    Footer,
    Menu,
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
.logo {
  padding: 12px;
  max-width: 60%;
  height: auto;
  object-fit: scale-down;
}
.qr {
  padding: 30px;
  max-width: 80%;
}
.image {
  max-height: 500px;
}

h1 {
  color: black;
}

iframe {
  width: 1000px;
  height: 500px;
  border: none;
}
</style>
