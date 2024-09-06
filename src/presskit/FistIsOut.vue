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
                title: 'News',
                link: '/news',
              },
              {
                title: 'September 7, 2024',
              },
            ]"
          />
          <h1>F.I.S.T. is out NOW!</h1>
          <p><i>(September 7, 2024)</i></p>

          <img
            src="../assets/fist/fist-home-banner.jpg"
            alt="Steve Jackson's F.I.S.T."
            class="image-wide"
          />

          <p>
            <i>
              Fellow adventurers – the time has come! The day is finally here...
              <strong>F.I.S.T.</strong>'s launch day has arrived and the game is available to play
              NOW!</i
            >
          </p>

          <p>
            Varghand Publishing are proud to announce that <strong>F.I.S.T.</strong> is now live on
            the Sound Realms platform. This is the first full-length adventure on Sound Realms, and
            thus marks a major milestone in the platform's development.
          </p>

          <p>
            <strong>F.I.S.T.</strong> was originally released as a play-by-phone game in 1988. It
            was written by Steve Jackson (of Games Workshop and Fighting Fantasy fame) and
            originally developed by the company ComputerDial. The new version of
            <strong>F.I.S.T.</strong> features the original audio recordings, faithfully restored
            from the original master tapes and digitalized for the Sound Realms platform. This will
            be the first time in more than 30 years that the world will have the chance to listen to
            these recordings! Gameplay and functionality will also remain consistent with the 1988
            version of
            <strong>F.I.S.T.</strong>
          </p>
          <p>
            <i
              >"We have worked hard to ensure that the Sound Realms version of
              <strong>F.I.S.T.</strong> stays as close to the original version as possible"</i
            >
            says Gustav Sundin, CEO of Varghand Publishing, the makers behind the Sound Realms
            Platform.
            <i
              >"The key differences are that you play through your smartphone or tablet instead of a
              landline phone, that the audio quality has been greatly improved, and no more
              horrendous phone bills to explain to your parents!"</i
            >
          </p>

          <p>
            <strong>F.I.S.T.</strong> can be pre-ordered through
            <a href="https://www.sound-realms.com/shop">www.sound-realms.com</a>.
          </p>

          <h3>About F.I.S.T.</h3>

          <p>
            In 1988 you could pick up your telephone, dial the <strong>F.I.S.T.</strong> number and
            you were immediately connected to a medieval fantasy world of magic, monsters and great
            riches to be plundered. A world where <i>YOU</i> were a heroic adventurer embarking on a
            quest for fame and fortune. <strong>F.I.S.T.</strong> was the first interactive phone
            game ever.
          </p>
          <p>
            The creatures and deadly traps that awaited you in Castle Mammon were brought to life
            with dramatic sound effects and, for its time, groundbreaking gaming techniques. You
            could hear the roar of the Flesh Eater as your sword hit home, the sizzle of the
            fireball bursting towards you, the chinking of the many gold pieces you could find in
            the Demon Prince's underground dungeon. <i>YOU</i> made the decisions simply by using
            your telephone.
          </p>
          <p>
            The first <strong>F.I.S.T.</strong> adventure, originally known as
            <i>Castle Mammon &mdash; Lair of the Demon Prince</i>, was created by the fertile mind
            of games master <strong>Steve Jackson</strong> (co-founder of Games Workshop and the
            Fighting Fantasy gamebook series). After being unavailable to the general public for
            more than 30 years, <strong>F.I.S.T.</strong> now returns as it was released in 1988,
            with the original audio recordings and gameplay intact, but adapted for iOS and Android
            using the <strong>Sound Realms</strong> system.
          </p>
          <p><strong>WELCOME TO THE WORLD OF F.I.S.T.!</strong></p>

          <img src="../assets/fist/fist-promo.png" alt="F.I.S.T. Returns!" class="image-narrow" />

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is a digital platform for audio adventure games, currently available on iOS
            and Android. On the platform you will find a growing range of solo adventures, narrated
            by a professional voice-over actor, who acts as your Dungeon Master as you explore
            dangerous dungeons and mysterious temples, and backed by a cinematic musical score and
            top of the line sound effects. <a href="/download">Download the Sound Realms app</a> to
            get started on your adventure today.
          </p>

          <h3>Links</h3>
          <p>
            <a
              href="https://drive.google.com/drive/folders/1DzhXdcnbggM-f1BgqwyYtVqUHyYaqhuS?usp=sharing"
              target="_blank"
              >F.I.S.T. Press Kit</a
            >
          </p>

          <p><a href="https://www.sound-realms.com">www.sound-realms.com</a></p>
          <p>
            <a href="https://www.fightingfantasy.com/" target="_blank">www.fightingfantasy.com</a>
          </p>

          <p>
            Download Sound Realms for free through Google Play or App Store and begin your adventure
            now:
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest"
              target="_blank"
              >https://play.google.com/store/apps/details?id=com.wolfhand.audioquest</a
            >
          </p>

          <p>
            <a href="https://apps.apple.com/se/app/sound-realms/id1587860372" target="_blank"
              >https://apps.apple.com/se/app/sound-realms/id1587860372</a
            >
          </p>
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
  name: "PresskitPage",
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

h1 {
  margin: 0px;
}

.image {
  max-width: 80%;
  margin: 10px;
}

.image-wide {
  max-width: 100%;
  margin: 10px;
}

.image-narrow {
  max-width: 50%;
  margin: 10px;
}

.button {
  margin: 30px;
}

.section-content {
  word-wrap: break-word;
}
.fistlogo {
  max-width: 300px;
}
</style>
