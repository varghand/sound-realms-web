<template>
  <main-layout>
    <div class="content">
      <MyBreadcrumbs
        :breadcrumbs="[
          {
            title: 'Sound Realms',
            link: '/',
          },
          {
            title: 'Games',
            link: '/games',
          },
          {
            title: 'Call of Cthulhu',
          },
        ]"
      />
      <div class="section-content">
        <h1>Call of Cthulhu</h1>

        <img
          src="../../assets/home/coc-round.png"
          alt="Steve Jackson's F.I.S.T."
          class="image"
        >

        <p>
          <i>"The oldest and strongest emotion of mankind is fear, and the strongest kind of fear is
            fear of the unknown."</i>
          &mdash; H.P. Lovecraft, 1927.
        </p>
        <p>
          Sound Realms AB are proud to announce that <i>Call of Cthulhu</i> will be incorporated in the
          Sound Realms platform, in collaboration with Chaosium Inc.
        </p>
        <p>
          <i>Call of Cthulhu</i> is one of the world's most popular tabletop roleplaying games and has been
          in print since 1981. It is set in the world of H.P. Lovecraft, the undisputed champion of
          tales of cosmic horror. Within the game, you take on the role of an investigator of the
          mysterious and unknown during the 1920s. Common themes include supernatural horrors, chaos
          cults, forbidden knowledge and ancient civilisations pre-dating mankind.
        </p>
        <p>
          Stay tuned by signing up for the newsletter, and be ready to enter the Realm of Madness
          and Horror in 2025...
        </p>

        <YouTubeEmbed video="https://www.youtube.com/embed/8KUSWKPXihg?si=C6hr4jNFLK0nYBCh" />
      </div>

      <div class="strip">
        <h2>Sign up for the Newsletter</h2>
        <div class="section-content">
          <p class="inverted">
            Sign up for our newsletter if you want to stay up to date when we release new
            adventures. Occasionally you will also receive free in-game bonus items and other
            goodies.
          </p>
          <NewsletterSignupForm />
        </div>
      </div>
      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../../layouts/Main.vue";
import MainFooter from "../../components/MainFooter.vue";
import NewsletterSignupForm from "../../components/NewsletterSignupForm.vue";
import MyBreadcrumbs from "../../components/MyBreadcrumbs.vue";
import YouTubeEmbed from "../../components/YoutubeEmbed.vue";

export default {
  name: "DraculaPage",
  components: {
    MainLayout,
    MainFooter,
    NewsletterSignupForm,
    MyBreadcrumbs,
    YouTubeEmbed,
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../../assets/pergament_background.jpg");
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
.text {
  align-items: flex-start;
}
.logo {
  padding: 12px;
  max-width: 60%;
  height: auto;
  object-fit: scale-down;
}
.image {
  max-height: 800px;
  padding-bottom: 20px;
}

h1 {
  color: black;
}

.strip {
  background-color: #672a66;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
}

.kickstarter-strip {
  background-color: #4a443c;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
}

.strip > h1,
h2 {
  color: white;
}

.button {
  margin-bottom: 20px;
}
</style>
