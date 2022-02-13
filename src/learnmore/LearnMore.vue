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

          <h1>The story so far</h1>
          <p>
            The idea was formed in Oscar Carlquist's head a long, long time ago.
            Back in the mid-nineties Oscar played and cherished solo adventure
            books and solo RPG quests. Since he is a vocalist and worked in
            music studios and took the occasional voice-over assignments, he
            came to realise the great potential in making real audio productions
            of the adventure books and quests. Adding music and sound effects to
            a capturing voice-over performance he believed would really enhance
            the adventures that he had played over and over again since
            childhood. Back then the limitations were obvious since an adventure
            would span over more than several audio CDs and the rules and dice
            rolls etc would still have to be done separately with pen and paper.
            This idea however refused to leave Oscar’s head and quite soon came
            the introduction of MP3 files and the internet and the possibilities
            became slightly more favourable. The dream lived on and as smart
            phones revolutionised our lives Oscar began the quest of fulfilling
            his old dream.
          </p>
          <p>
            In 2013 Oscar acquired his own professional recording studio and
            began working as a sound engineer. One of the bands he came to
            produce in his studio happened to feature Gustav Sundin, a
            role-playing game obsessed software programmer who Oscar pitched his
            vision for. Gustav really liked the idea. Time passed, children were
            born, bands went on tours and career opportunities were seized but
            the idea lived in both Oscar's and Gustav's heads and in early 2020
            in the mist of a world crippling pandemic that killed live music
            Oscar and Gustav found the break they needed to really dive into the
            plan and process of bringing this vision to life.
          </p>
          <p>
            And so the time has come! Oscar's lifelong experience as vocal
            performer and his sound engineering skills combined with Gustav's
            programming expertise, and the creation of a team of illustrators
            and a composer have incarnated the vison and a demo adventure is
            ready for download!
          </p>

          <img src="../assets/vemhir.png" class="image-large" />
        </div>
      </section>
      <GametestStrip />
      <section>
        <div class="section-content">
          <h1>The games</h1>
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
          <img src="../assets/chain_and_balls.png" class="image-small" />

          <h1>A platform of audio based games and other audio content</h1>
          <p>
            Our vision is for Sound Realms to in time feature not only Varghand
            Publishing AB’s games, but also other RPG publishers works &mdash;
            digitalised and audio based in the Sound Realms format. We would
            also love to publish Fantasy and Sci-fi audio books and other
            Fantasy, Sci-Fi or RPG based audio content, making Sound Realms the
            natural place to turn to if you wish to listen to anything related
            to these topics. We have a grand vision and we hope you will see it
            incarnate together with us and help us develop it and see it
            progress with the help of your feedback.
          </p>

          <img src="../assets/VemhirsCastle.png" class="image-large" />
        </div>
      </section>
      <div class="strip" />
      <Footer />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Footer from '../components/Footer.vue';
import GametestStrip from '../components/GametestStrip.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'Home',
  components: {
    MainLayout,
    Footer,
    GametestStrip,
    Menu,
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
.logo {
  padding: 12px;
  max-width: 30%;
  height: auto;
  object-fit: scale-down;
}
.image-large {
  max-height: 666px;
}
.image-small {
  max-height: 200px;
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
