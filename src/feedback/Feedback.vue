<template>
  <main-layout>
    <div class="content">
      <img
        alt="Sound Realms logo"
        class="logo"
        src="../assets/soundrealms.jpg"
      >
      <p>
        Follow this link to make your voice heard:
        <a href="https://forms.gle/JNuwPujg5J3Kb4kp7">feedback survey</a>
      </p>
      <p>
        Also feel free to get in touch with
        <a href="mailto:app@soundrealms.com">app@soundrealms.com</a>.
      </p>
      <p>All thoughts, ideas, feedback and bug reports are very welcome!</p>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

export default {
  name: 'FeedbackPage',
  components: {
    MainLayout,
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
</style>
