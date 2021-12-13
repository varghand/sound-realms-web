<template>
  <main-layout>
    <div class="content">
      <Menu />
      <div class="section-content">
        <h1>Sound Realms Privacy Policy</h1>

        <h2>Who we are</h2>
        <p>
          Sound Realms is being developed by Varghand Publishing AB, an
          independent provider of RPG games and content. Our website address is:
          https://www.sound-realms.com/
        </p>
        <h2>What personal data we collect and why we collect it</h2>
        <p>
          Varghand Publishing AB takes privacy concerns VERY seriously! Right
          now we don't collect any data at all about you, but later on we might
          start collecting anonymous usage statistics with the purpose of
          improving the user experience of future app versions. We will never
          gather any sensitive personal data about you.
        </p>
        <h2>Who we share your data with</h2>
        <p>
          No one! We will never willingly share any of your data with any third
          party.
        </p>
        <h2>What rights you have over your data</h2>
        <p>
          If you have a Sound Realms account, you can request to receive an
          exported file of the personal data we hold about you, including any
          data you have provided to us. You can also request that we erase any
          personal data we hold about you. This does not include any data we are
          obliged to keep for administrative, legal, or security purposes.
        </p>
        <h2>Your contact information</h2>
        <p>Gustav Sundin</p>
        <p>app@sound-realms.com</p>
      </div>
      <Footer />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Footer from '../components/Footer.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'PrivacyPolicy',
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
</style>
