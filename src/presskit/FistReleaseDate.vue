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
                title: 'July 1, 2024',
              },
            ]"
          />
          <h1>Release Date for F.I.S.T. Announced</h1>
          <p><i>(July 1, 2024)</i></p>

          <img
            src="../assets/fist/fist-logo.png"
            alt="Steve Jackson's F.I.S.T."
            class="image"
          >

          <p>
            Sound Realms AB are proud to announce that <strong>F.I.S.T.</strong> will officially
            be released on the Sound Realms platform on September 7, 2024, in conjuction with
            Fighting Fantasy Fest 5 in London.
          </p>

          <p>
            <strong>F.I.S.T.</strong> will be the first full-length audio adventure to be featured
            on the Sound Realms platform, but it is originally an old game crafted by Steve Jackson
            of Games Workshop and Fighting Fantasy fame already in 1988. The new version of
            <strong>F.I.S.T.</strong> will feature the original audio recordings, faithfully
            restored from the original master tapes. This will be the first time in more than 30
            years that the world will have the chance to listen to these recordings! Gameplay and
            functionality will also remain consistent with the 1988 version of
            <strong>F.I.S.T.</strong>
          </p>
          <p>
            <i>"We have worked hard to ensure that the Sound Realms version of
              <strong>F.I.S.T.</strong> stays as close to the original version as possible"</i>
            says Gustav Sundin, CEO of Sound Realms AB.
            <i>"The key differences are that you play through your smartphone or tablet instead of a
              landline phone, that the audio quality has been greatly improved, and no more
              horrendous phone bills to explain to your parents!"</i>
          </p>

          <p>
            <strong>F.I.S.T.</strong> can be pre-ordered through
            <a href="https://www.soundrealms.com/shop">www.soundrealms.com</a>.
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
            with dramatic sound effects and new gaming techniques. You could hear the roar of the
            Flesh Eater as your sword bites, the sizzle of the fireball bursting towards you, the
            chinking of the many gold pieces you could find in the Demon Prince's underground
            dungeon. <i>YOU</i> made the decisions simply by using your telephone.
          </p>
          <p>
            The first <strong>F.I.S.T.</strong> adventure featuring the world of
            <i>Castle Mammon &mdash; Lair of the Demon Prince</i>, created by the fertile mind of
            games master <strong>Steve Jackson</strong> (co-founder of Games Workshop and the
            Fighting Fantasy gamebook series), now returns as it was released in 1988, audio and
            gameplay intact, but adapted for iOS and Android using the
            <strong>Sound Realms</strong> system.
          </p>
          <p><strong>GET READY FOR F.I.S.T., THE RETURN!</strong></p>

          <img
            src="../assets/fist/fist-square.jpg"
            alt="F.I.S.T. Returns!"
            class="image"
          >

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is a platform which enables you to play through captivating solo audio
            adventures. A professional voice-over actor acts as your Dungeon Master and takes you
            through dangerous dungeons and mysterious temples, backed by a cinematic musical score
            and top of the line sound effects. Sound Realms is available for iOS and Android
            devices.
          </p>

          <h3>Links</h3>
          <p>
            <a
              href="https://drive.google.com/drive/folders/1DzhXdcnbggM-f1BgqwyYtVqUHyYaqhuS?usp=sharing"
              target="_blank"
            >F.I.S.T. Press Kit</a>
          </p>

          <p><a href="https://www.soundrealms.com">www.soundrealms.com</a></p>
          <p>
            <a
              href="https://www.fightingfantasy.com/"
              target="_blank"
            >www.fightingfantasy.com</a>
          </p>

          <p>
            Download Sound Realms for free through Google Play or App Store and begin your adventure
            now:
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest"
              target="_blank"
            >https://play.google.com/store/apps/details?id=com.wolfhand.audioquest</a>
          </p>

          <p>
            <a
              href="https://apps.apple.com/se/app/sound-realms/id1587860372"
              target="_blank"
            >https://apps.apple.com/se/app/sound-realms/id1587860372</a>
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
