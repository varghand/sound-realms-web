<template>
  <main-layout>
    <div class="content">
      <Menu />
      <section>
        <div class="section-content">
          <h1>What is Sound Realms?</h1>

          <p>
            Sound Realms is a brand new project created by the Swedish games
            publisher Varghand Publishing AB. United by a passion for old school
            RPGs, we set out in 2020 to craft a new way of enjoying solo
            adventures. We have since developed a smartphone application for iOS
            and Android which enables you to experience captivating solo
            adventures. What makes Sound Realms stand out from other RPG apps on
            the market is the fact (as implied by the name Sound Realms) that
            all our games are audio-based. A professional voice-over actor acts
            as your Dungeon Master and takes you through dangerous dungeons and
            mysterious temples, backed by a cinematic musical score and top of
            the line sound effects. In time, Sound Realms will be expanded to
            include not only fantasy, but also scifi, horror, and
            post-apocalyptic games.
          </p>
          <p>
            All this is presented in a design that makes you instantly remember
            your old solo adventure books, complete with beautiful original
            illustrations and artwork. Incorporated in the game is a modified
            version of an actual classic paper back RPG rule set, Chaosium Inc’s
            ”Basic Roleplaying System” (BRP), and all types of digital dice and
            a character sheet for you to see your inventory and your character’s
            progress.
          </p>

          <img src="../assets/skull_and_scroll.png" class="image-small" />

          <h1>What is Mace & Magic?</h1>
          <p>
            Mace & Magic is Sound Realms’ first series of RPG audio solo adventures.
            The genre is dark fantasy and is set in the “Forsaken Lands of Mihr”, a medieval,
            more or less traditional fantasy world that has been struck by “the Magiklysm”.
            The Magiklysm was an apocalyptic event caused by a war between two guilds of rival sorcerers
            that has completely transformed the world of Mihr into a treacherous and chaotic realm.
            The Magiklysm opened gates to other planes and invoked outerworldly beings and monsters,
            that compete with dragons and more traditional fantasy adversaries.
            The surviving races and nations of Mihr built a fortified city called Decagonia,
            and this is the center of the current civilisation.
            Surrounding it is only peril and the opportunity for adventure!
            With the Forsaken Lands of Mihr we aim to create a world where more or less anything can happen,
            where the emphasis lies on mysteries and the unique rather than orthodox fantasy encounters and events.
          </p>

          <p>
            Curious to discover more about the world of Mihr? Download the demo adventure's free
            <a
              href="https://www.drivethrurpg.com/product/385247/Sound-Realms-Mace--Magic-Demo-Adventure-Companion-PDF"
              target="_blank"
            >companion pdf</a>
            from DriveThruRPG to learn about the history, peoples and creatures of Mihr.
          </p>

          <img src="../assets/chain_and_balls.png" class="image-small" />
        </div>
      </section>
      <GametestStrip />
      <section>
        <div class="section-content">
          <h1>Why a digital game?</h1>
          <p>
            To digitalise solo RPG rules comes with many advantages. A digital
            application offers far less limitations than a book. We aim to
            create the adventures so they offer a different experience in as
            many ways possible every time played so they can be replayed several
            times. In time the app will also contain numerous side quests, vast
            lists of treasure and equipment and enormous bestiaries ready to be
            randomised into the adventures using any number of modifications.
            The team puts a lot of focus into exploring in what ways we can
            develop the app and the take advantage of the fact that it is a
            digital product. The suspense of the voice-overs is unparalleled as
            they can be carefully planned and designed, we also have the option
            of retakes until we achieve perfection. The sound effects and music
            are also introduced with the exact right timing to create the most
            captivating and dramatic experience possible.
          </p>

          <img src="../assets/vemhir.png" class="image-large" />

          <h1>Who are you?</h1>

          <p>
            Sound Realms is made by the Swedish games publisher Varghand Publishing AB.
            The company is being led by Oscar Carlquist and Gustav Sundin,
            two heavy metal-loving, old school RPG fanatics.
            Learn more about us as well as Sound Realms' history and future to come
            <a
              href="/learn-more"
            >here</a>.
          </p>

          <img src="../assets/skelett_sam.png" class="image-medium" />
        </div>

        <div class="section-content">
          <h1>What comes next?</h1>
          <p>
            The first full feature campaign that will be produced
            for Sound Realms – Mace & Magic is
            <i>The Mystery of the Silent Islands</i>.
            The campaign will be divided into five adventures
            which in total is expected to have an average of seven hours playing time.
            Depending on what decisions you make and which path you chose the campaign will span between five and nine hours playing time.
            In order to finance our ambitious plans for
            <i>The Mystery of the Silent Islands</i>
            (including voice-overs, music, and tons of detailed illustrations),
            a
            <a
              href="https://www.kickstarter.com/projects/varghand/sound-realms-mace-and-magic"
              target="_blank"
            >Kickstarter</a> will be launched. Stay tuned!
          </p>

          <img src="../assets/VemhirsCastle.png" class="image-large" />
        </div>
      </section>
      <KickstarterStrip />

      <section>
        <div class="section-content">
          <h1>How can I get involved?</h1>
          <p>
            The best thing you can do to support Sound Realms is to spread the word.
            So tell your collegues, family, friends and enemies what's it all about!
            You can also get in touch with us via
            <a href="mailto:dm@varghand.com">dm@varghand.com</a>
            if you have any cool ideas. Maybe you have some feedback or ideas about the game,
            or an idea for an adventure, or maybe you have some illustrations to contribute.
            Whatever is on your mind, let's talk!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Footer from '../components/Footer.vue';
import GametestStrip from '../components/GametestStrip.vue';
import Menu from '../components/Menu.vue';
import KickstarterStrip from '../components/KickstarterStrip.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    Footer,
    GametestStrip,
    Menu,
    KickstarterStrip,
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

.strip {
  background-color: #672a66;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
