<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <section>
        <div class="section-content">
          <MyBreadcrumbs
            :breadcrumbs="[
              {
                title: 'Sound Realms',
                link: '/',
              },
              {
                title: 'Job Openings',
              },
            ]"
          />
          <h1>Job Openings</h1>
          <p><i>None at the moment.</i></p>
          <br>
        </div>
      </section>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import TopMenu from "../components/TopMenu.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  name: "JobsPage",
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    MyBreadcrumbs,
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

.section-content {
  word-wrap: break-word;
}

h1 {
  margin: 0px;
}

h2 {
  margin-bottom: 0px;
}
</style>
