<template>
  <main-layout>
    <div class="content">
      <a href="/" class="logo">
      <img
        alt="Sound Realms logo"

        src="../assets/sound_realms_white_logo.png"
      />
      </a>
      <h1>Take heed adventurer!</h1>
      <p>
        Do you have the courage to explore the perilous halls of Vemhir the
        Soulbinder’s ancient castle? Find out in this very first demo adventure
        for Sound Realms – Mace & Magic.
      </p>
      <p>
        Keep in mind that this is not the final product. Stay alert for regular
        updates and please report any bugs immediately to: app@sound-realms.com.
      </p>
      <p>
        We will be super grateful if you take some time to answer the included
        survey. Feel free to contact us with any questions at dm@varghand.com.
      </p>
      <p>
        Please use quality headphones for a full, immersive 360 surround sound
        experience!
      </p>
      <p>Click or scan one of the QR codes below:</p>
      <div>
        <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
        <img src="../assets/gametest/android_qr.png" class="qr"/>
        </a>
        <a href="https://testflight.apple.com/join/ARR4pDmY">
        <img src="../assets/gametest/ios_qr.png"  class="qr"/>
        </a>
      </div>
      <p>
        Feedback survey: <a href="/feedback">www.sound-realms.com/feedback</a>
      </p>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/pergament_background.jpg");
  width: 100%;
  height: 100%;
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
  max-width: 30%;
  height: auto;
  object-fit: scale-down;
}
.qr {
  padding: 30px;
}
</style>
