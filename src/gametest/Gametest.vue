<template>
  <main-layout>
    <div class="content">
      <MyBreadcrumbs
        :breadcrumbs="[
          {
            title: 'Sound Realms',
            link: '/'
          },
          {
            title: 'Download'
          }
        ]"
      />
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
        <DownloadLinks />
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import MyBreadcrumbs from '../components/MyBreadcrumbs.vue';
import DownloadLinks from '../components/DownloadLinks.vue';
import platformHelper from '../platformHelper';

export default {
  name: 'GameTest',
  components: {
    MainLayout,
    MainFooter,
    MyBreadcrumbs,
    DownloadLinks,
  },
  mounted() {
    if (platformHelper.isAndroid()) {
      window.location.href = 'https://rlms.cc/website-gpdownload';
    } else if (platformHelper.isIos()) {
      window.location.href = 'https://rlms.cc/website-asdownload';
    }
  }
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
.image {
  max-height: 200px;
}

h1 {
  color: black;
  max-width: 100%;
}

.button {
  margin: 30px;
}
</style>
