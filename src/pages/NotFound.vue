<template>
  <main-layout>
    <div class="content">
      <Menu />
      <section>
        <div class="section-content">
          <h1>Game Over</h1>

          <p>
            This page has been devoured by the <i>Black Ether</i>... Sorry!
          </p>
          <p>
            <a href="/">Return home to civilisation and try again.</a>
          </p>

          <img src="../assets/skull_and_scroll.png" class="image-small" />

        </div>
      </section>
      <GametestStrip />

      <!-- <KickstarterStrip/> -->
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import GametestStrip from '../components/GametestStrip.vue';
import Menu from '../components/TopMenu.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    MainFooter,
    GametestStrip,
    Menu,
  },
};
</script>

<style scoped>
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
.image-large {
  max-height: 666px;
}
.image-small {
  max-height: 200px;
}
.strip {
  background-color: #672a66;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
