<template>
  <main-layout>
    <div class="content">
      <Menu/>
      <section>
        <div class="section-content">
          <h1>Get in touch with the Dungeon Master</h1>
          <p>
            Follow this link to make your voice heard:
            <a href="https://forms.gle/JNuwPujg5J3Kb4kp7">feedback survey</a>
          </p>
          <p>
            For bug reports, get in touch with
            <a href="mailto:app@sound-realms.com">app@sound-realms.com</a>.
          </p>
          <p>
            All other topics:
            <a href="mailto:dm@varghand.com">dm@varghand.com</a>.
          </p>
          <p>All thoughts, ideas, feedback and bug reports are very welcome!</p>
        </div>
      </section>
      <GametestStrip/>
      <Footer />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Footer from '../components/Footer.vue';
import GametestStrip from '../components/GametestStrip.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    Footer,
    GametestStrip,
    Menu,
  },
};
</script>

<style scoped>
section {
  min-height: 50vh;
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

</style>
