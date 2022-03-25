<template>
  <main-layout>
    <div class="content">
      <Menu />
      <section>
        <div class="section-content">
          <h1>Sign up for newsletter</h1>
          <!-- <p>Sign up for our newsletter and receive a new playable character for the demo adventure as a free bonus.</p> -->
          <iframe src="https://cdn.forms-content.sg-form.com/ae43989a-a486-11ec-941c-ceafd6e237fb"/>
        </div>
      </section>

      <Footer />
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
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 1000px;
  height: 500px;
  border: none;
}

</style>
