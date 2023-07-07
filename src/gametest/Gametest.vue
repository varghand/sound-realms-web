<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <div class="section-content">
        <h1>Take heed adventurer!</h1>
        <p>
          <strong>Sound Realms</strong> is an interactive audio adventure app. Featuring great
          adventures, presented with top class voice-over performances, original orchestral music,
          cinematic sound effects, digital RPG dice rolls, digital character sheets, skills, spells,
          swords and monsters!
        </p>
        <p>
          Download Sound Realms for free through Google Play or App Store and begin your adventure
          now.
        </p>
        <div class="columns">
          <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
            <img src="../assets/gametest/google-play-badge.png" class="qr" />
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
            <img src="../assets/gametest/android_qr.png" class="qr" />
          </a>

          <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
            <img src="../assets/gametest/app-store-badge.png" class="qr" />
          </a>

          <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
            <img src="../assets/gametest/ios_qr.png" class="qr" />
          </a>
        </div>

        <p>
          <i>Please use quality headphones for a full, immersive 360 surround sound experience.</i>
        </p>
        <p><img src="../assets/gametest/headphones.png" class="image" /></p>
        <p>
          Stay alert for regular updates and please report any bugs to:
          <a href="mailto:gustav@varghand.com">gustav@varghand.com</a>!
        </p>

        <h1>Sign up for the Newsletter</h1>
        <div class="strip">
          <!-- <p>Sign up for our newsletter and receive a new playable character for the demo adventure as a free bonus.</p> -->
          <NewsletterSignupForm/>
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import TopMenu from '../components/TopMenu.vue';
import NewsletterSignupForm from '../components/NewsletterSignupForm.vue';

export default {
  name: 'GameTest',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    NewsletterSignupForm,
  },
};
</script>

<style scoped>
.columns {
  column-count: 2;
  column-gap: 40px;
  max-width: 500px;
}
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
  padding-top: 15px;
  padding-bottom: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.image {
  max-height: 200px;
}

h1 {
  color: black;
  max-width: 100%;
}
</style>
