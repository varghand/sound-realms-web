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
            title: 'Steve Jackson\'s F.I.S.T.',
          },
        ]"
      />
      <div class="section-content">
        <img
          src="../../assets/fist/fist-logo.png"
          alt="Steve Jackson's F.I.S.T."
          class="image"
        >

        <p>
          In 1988 you could pick up your telephone, dial the <strong>F.I.S.T.</strong> number and you were
          immediately connected to a medieval fantasy world of magic, monsters and great riches to
          be plundered. A world where <i>YOU</i> were a heroic adventurer embarking on a quest for fame and
          fortune. <strong>F.I.S.T.</strong> was the first interactive phone game ever.
        </p>
        <p>
          The creatures and deadly traps that awaited you in Castle Mammon were brought to life with
          dramatic sound effects and new gaming techniques. You could hear the roar of the Flesh
          Eater as your sword bites, the sizzle of the fireball bursting towards you, the chinking
          of the many gold pieces you could find in the Demon Prince's underground dungeon. <i>YOU</i> made
          the decisions simply by using your telephone.
        </p>
        <p>
          The first <strong>F.I.S.T.</strong> adventure featuring the world of <i>Castle Mammon &mdash; Lair of the Demon
            Prince</i>, created by the fertile mind of games master <strong>Steve Jackson</strong> (co-founder of Games Workshop and the Fighting Fantasy gamebook series), now returns as it was
          released in 1988, audio and gameplay intact, but adapted for iOS and Android using the
          <strong>Sound Realms</strong> system.
        </p>
        <p><strong>F.I.S.T. is available NOW on the Sound Realms app!</strong></p>

        <MyButton
          class="button"
          href="/shop"
        >
          Order Now
        </MyButton>
      </div>
      <YouTubeEmbed video="https://www.youtube.com/embed/loeY2C5SWgA" />

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
import MyButton from "@/components/MyButton.vue";
import YouTubeEmbed from '@/components/YoutubeEmbed.vue';

export default {
  name: "DraculaPage",
  components: {
    MainLayout,
    MainFooter,
    NewsletterSignupForm,
    MyBreadcrumbs,
    MyButton,
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
  margin-bottom: 20px;
}
</style>
