<template>
  <main-layout>
    <div class="content">
      <section>
        <div class="section-content">
          <MyBreadcrumbs
            :breadcrumbs="[
              {
                title: 'Sound Realms',
                link: '/',
              },
              {
                title: 'Games',
              },
            ]"
          />
          <AllGames />
        </div>
      </section>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainFooter from "../components/MainFooter.vue";
import MainLayout from "../layouts/Main.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";
import AllGames from "./AllGames.vue";

export default {
  name: "AllGamesPage",
  components: {
    MainFooter,
    MainLayout,
    MyBreadcrumbs,
    AllGames,
  },
};
</script>

<style scoped>
h1,
h2 {
  font-family: Arial, Helvetica, sans-serif;
}

.dreadhorn_image {
  max-width: 40%;
  padding-bottom: 30px;
  padding-right: 30px;
}

img {
  max-width: 100%;
}

.section-content {
  padding-bottom: 30px;
}

.row {
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 960px;
}
@media screen and (max-width: 980px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
  }
  .dreadhorn_image {
    max-width: 80%;
  }
}
@media screen and (max-width: 680px) {
  .row {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
