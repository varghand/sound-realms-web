<template>
  <main-layout>
    <div class="content">
      <section>
        <MyBreadcrumbs
          :breadcrumbs="[
            {
              title: 'Sound Realms',
              link: '/',
            },
            {
              title: 'Contact',
            },
          ]"
        />
        <div class="section-content">
          <h1>Get in touch with the Dungeon Master</h1>
          <p>
            For bug reports, get in touch with
            <a href="mailto:app@soundrealms.com">app@soundrealms.com</a>.
          </p>
          <p>
            All other topics:
            <a href="mailto:dm@soundrealms.com">dm@soundrealms.com</a>.
          </p>
          <p>
            You can also join our
            <a
              href="https://rlms.cc/srweb-dc"
              target="_blank"
            >official Discord channel</a>.
          </p>
          <p>All thoughts, ideas, feedback and bug reports are very welcome!</p>
        </div>
      </section>
      <GametestStrip />
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import GametestStrip from "../components/GametestStrip.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  name: "ContactPage",
  components: {
    MainLayout,
    MainFooter,
    GametestStrip,
    MyBreadcrumbs,
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
