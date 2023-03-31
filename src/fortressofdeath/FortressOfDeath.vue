<template>
  <main-layout>
    <div class="content">
      <Menu />
      <div class="section-content">
        <h1>The Fortress of Death</h1>

        <img src="../assets/fortressofdeath_info.jpg" class="image" />
      </div>
      <div class="strip">
        <h1>Sign up for newsletter</h1>
        <!-- <p>Sign up for our newsletter and receive a new playable character for the demo adventure as a free bonus.</p> -->
        <iframe src="https://cdn.forms-content.sg-form.com/ae43989a-a486-11ec-941c-ceafd6e237fb" />
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import Menu from '../components/TopMenu.vue';

export default {
  name: 'FortressOfDeath',
  components: {
    MainLayout,
    MainFooter,
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
.image {
  max-height: 800px;
  padding-bottom: 100px;
}

h1 {
  color: black;
}

iframe {
  width: 1000px;
  height: 500px;
  border: none;
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

.strip > h1 {
  color: white;
}
</style>
