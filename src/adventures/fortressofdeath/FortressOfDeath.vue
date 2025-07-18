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
            title: 'The Fortress of Death',
          },
        ]"
      />
      <div class="section-content">
        <img
          src="../../assets/fod/fod-header.png"
          alt="Lone Wolf: Fortress of Death"
          class="image"
        >

        <p>
          In 1989, Joe Dever in response to the massive success of Steve Jackson's
          <i>F.I.S.T.</i> (the first ever interactive play by phone roleplaying game), launched his
          own Lone Wolf game for his interactive phone game system &ndash; <i>PhoneQuest</i>. To
          play the game, you dialled a number on your landline telephone. A narrative voice presented
          a story with a selection of choices for you. All of this was accompanied by cinematic
          music and immersive sound effects. One of these adventures was called
          <i>Fortress of Doom</i>.
        </p>
        <p>
          Now the time has come to reenvision Joe Dever's original concept and release a
          game for smartphones and tablets &ndash; a new game incorporating 360 surround sound and
          the latest app technology but still faithful to the original. This new interactive
          adventure returns to the glory days of Lone Wolf and fantasy roleplaying games, making it
          the most immersive audio game experience ever. <i>The Fortress of Death</i> is a brand new
          and official Lone Wolf adventure, written by August Hahn and inspired by the setting in
          <i>Fortress of Doom</i>.
        </p>
        <p>
          Enter, if you dare,
          <i><span class="bold">The Fortress of Death!</span></i>
        </p>
        <MyButton
          class="button"
          href="/shop"
        >
          Order Now
        </MyButton>
      </div>
      <img
        src="../../assets/fod/death-or-glory.png"
        class="image"
      >

      <YouTubeEmbed video="https://www.youtube.com/embed/9waUrmOaVGM" />

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
  name: "FortressOfDeath",
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

.button {
  margin-top: 20px;
}
</style>
