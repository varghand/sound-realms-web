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
            title: 'Mace & Magic',
          },
        ]"
      />
      <div class="section-content">
        <img
          src="../../assets/sound_realms_mace_and_magic.jpg"
          alt="Mace & Magic"
          class="image"
        >

        <p class="bold">
          Sound Realms presents
          <i>Mace & Magic</i>, the first ever real audio solo roleplaying game, set in a brand new
          dark fantasy realm bustling with adventure, perilous challenges and adversaries.
        </p>

        <p>
          <i>Mace & Magic</i> is set in the brand-new world of Mihr, a dark fantasy realm strook by
          an apocalyptic event called The Magiklysm, making it an ideal environment for epic
          adventures. Like all Sound Realms adventures, it is presented with top class voice-over
          performances, original orchestral music, cinematic sound effects, skills, spells, swords
          and monsters. <i>Mace & Magic</i> uses a slightly modified version of Chaosium Inc's RPG
          rule set Basic Roleplaying System (BRP), that we have successfully digitalised for a
          classic RPG experience, complete with dice rolls and character sheets.
        </p>
        <p>
          A demo adventure called <i>Vemhir's Castle</i> is available for free in the Sound Realms
          app.
        </p>
        <p>
          With
          <i>Mace & Magic</i> we aim to explore and expand the possibilities of this new format not
          only in cutting edge programming but also in the recording and usage of audio. Brace
          yourself and enter the Realm of <i>MACE & MAGIC</i>!
        </p>

        <MyButton
          external="true"
          class="button"
          href="https://www.kickstarter.com/projects/varghand/sound-realms-mace-and-magic"
        >
          Join us on Kickstarter!
        </MyButton>
      </div>

      <YouTubeEmbed video="https://www.youtube.com/embed/4FMkHwHB8pM" />

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
import YouTubeEmbed from "../../components/YoutubeEmbed.vue";
import MyBreadcrumbs from "../../components/MyBreadcrumbs.vue";
import MyButton from "@/components/MyButton.vue";

export default {
  name: "DraculaPage",
  components: {
    MainLayout,
    MainFooter,
    NewsletterSignupForm,
    YouTubeEmbed,
    MyBreadcrumbs,
    MyButton,
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
  padding: 20px;
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
</style>
