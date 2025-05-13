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
                title: 'Investors Relations',
              },
            ]"
          />
          <h1>Investors Relations</h1>
          <p>
            Hi! We are Sound Realms AB, and we have created the world's first digital platform for
            audio-based interactive games.
          </p>
          <img
            src="../assets/investors/the_audio_adventure_system.jpg"
            class="bigImage"
          >
          <p>
            At the moment we hold 4 licenses for IPs to publish on our platform. These are
            <i>Call of Cthulhu</i>, <i>Lone Wolf</i>, <i>Steve Jackson's F.I.S.T.</i> and
            <i>Dracula: Curse of the Vampire</i>. Furthermore we have an original IP called
            <i>Mace & Magic</i> that is also published on the Sound Realms platform. Our mid-term
            goal is to become the number one brand for fantasy, sci-fi, and horror audio content. In
            the longer term, we also hope to expand our library of games in order to appeal to an
            even wider audience.
          </p>
          <img
            src="../assets/investors//licenses.jpg"
            class="bigImage"
          >
          <p>
            In October 2023 we established our first sales through a successful Kickstarter campaign
            that raised 365 000 SEK (34 000 USD) from 687 backers.
          </p>
          <img
            src="../assets/investors//kickstarter.jpg"
            class="bigImage"
          >
          <p>
            We currently seek a partnership that can help us take Sound Realms to the next level.
          </p>
          <p>
            Sounds interesting? Read more in our
            <a
              href="https://docs.google.com/presentation/d/1i8RQZ92paLX31aY41Hz_ojPtonYEpQxlVebE-dW2cKk/edit#slide=id.p1"
              target="_blank"
            >pitch deck</a>!
          </p>
          <p>Contact: dm@soundrealms.com</p>
        </div>
      </section>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  name: "JobsPage",
  components: {
    MainLayout,
    MainFooter,
    MyBreadcrumbs,
  },
};
</script>

<style scoped>
.bigImage {
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
}
.srLogo {
  width: 60%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.image {
  width: 30%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
a {
  color: rgb(218, 60, 218);
}
</style>
