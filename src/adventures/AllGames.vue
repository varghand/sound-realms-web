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
          <h1>Our Games</h1>
          <p>
            Sound Realms is a platform where you will find a wide range of RPG audio solo
            adventures. In the future we will expand this range to include many different genres and
            styles &mdash; fantasy, horror, sci-fi and so on &mdash; but currently you will find two
            separate Realms in the app. One is <i><a href="/maceandmagic">Mace & Magic</a></i>, our own post-apocalyptic fantasy world, and the other is
            <i><a href="/fortressofdeath">Lone Wolf: The Fortress of Death</a></i>, a direct continuation of Joe Dever's classic Lone Wolf saga.
          </p>
        </div>

        <div class="section-content">
          <div class="row">
            <div>
              <a
                href="/maceandmagic"
                class="dreadhorn_image"
              >
                <img
                  src="../assets/home/dreadhorn.png"
                  alt="Mace & Magic"
                >
              </a>
            </div>
            <div>
              <a
                href="/fortressofdeath"
                class="dreadhorn_image"
              >
                <img
                  src="../assets/home/fod-round-funded.png"
                  alt="Lone Wolf: The Fortress of Death"
                >
              </a>
            </div>
            <div>
              <a
                href="/dracula"
                class="dreadhorn_image"
              >
                <img
                  src="../assets/home/dracula.png"
                  alt="Dracula: Curse of the Vampire"
                >
              </a>
            </div>
            <div>
              <a
                href="/fist"
                class="dreadhorn_image"
              >
                <img
                  src="../assets/home/fist.png"
                  alt="Steve Jackson's F.I.S.T."
                >
              </a>
            </div>
          </div>
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

export default {
  name: "HomePage",
  components: {
    MainFooter,
    MainLayout,
    MyBreadcrumbs,
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
