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
                title: 'September 15, 2023',
              },
            ]"
          />
          <h1>The Fortress of Death Kickstarter Campaign is now Live!</h1>
          <p><i>(September 15, 2023)</i></p>

          <img
            src="../assets/fod/fod-now-live.jpg"
            class="image"
          >

          <MyButton
            external="true"
            class="button"
            href="https://drive.google.com/drive/folders/1TSPaufEdWJHGekdAPGtma6vYiHOhNDwQ?usp=sharing"
          >
            Download Full Press Kit
          </MyButton>

          <p>
            The Swedish game publisher Varghand Publishing recently launched a Kickstarter campaign
            for "The Fortress of Death", an audio adventure for mobile devices set in Joe Dever's
            world of Lone Wolf, a classic series of gamebooks.
          </p>
          <p>
            The Fortress of Death is part of the Sound Realms platform, an app for interactive audio
            adventures available on iOS and Android devices.
          </p>
          <p>This is what the team behind Sound Realms has to say about The Fortress of Death:</p>
          <p>
            “In 1989, Joe Dever in response to the massive success of Steve Jackson's
            <i>F.I.S.T.</i> (the first ever interactive play by phone roleplaying game), launched
            his own Lone Wolf game for his interactive phone game system, <i>PhoneQuest</i>. To play
            the game, you dialed a number on your landline telephone. A narrative voice presented a
            story with a selection of choices for you. All of this was accompanied by cinematic
            music and immersive sound effects. One of these adventures was called Fortress of Doom.
            Now the time has come to reenvision Joe Dever's original concept and release a
            game for smartphones and tablets &ndash; a new game incorporating 360 surround sound and the
            latest app technology but still faithful to the original. This new interactive adventure
            returns to the glory days of Lone Wolf and fantasy roleplaying games, making it the most
            immersive audio game experience ever. Enter, if you dare, The Fortress of Death!”
          </p>

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is a platform where you will find a range of RPG audio solo adventures, or
            interactive audio books. The adventures are presented by a narrator assuming the role of
            Game Master, backed by original orchestral music and cinematic sound effects.
          </p>
          <h3>About Lone Wolf</h3>
          <p>
            Lone Wolf is a series currently consisting of 31 gamebooks, created by Joe Dever who
            wrote the first 29 books of the series before his son Ben, with help from French author
            Vincent Lazzari, took over writing duty upon his father's death. The first book was
            published in July 1984 and the series has sold more than 12 million copies worldwide.
            The story focuses on the fictional world of Magnamund, where the forces of good and evil
            are fighting for control. The main protagonist is Lone Wolf, last of his caste of
            warrior monks known as the Kai Lords. The book series is written in the second person
            and recounts Lone Wolf's adventures as if the reader is the main character.
          </p>
          <h3>Links</h3>
          <p><a href="https://www.soundrealms.com">https://www.soundrealms.com</a></p>
          <p>
            <a
              href="https://www.kickstarter.com/projects/varghand/fortress-of-death"
              target="_blank"
            >https://www.kickstarter.com/projects/varghand/fortress-of-death</a>
          </p>
          <p>
            <a
              href="https://youtu.be/9waUrmOaVGM"
              target="_blank"
            >https://youtu.be/9waUrmOaVGM</a>
          </p>

          <p>
            Download Sound Realms for free through
            <a
              href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest"
              target="_blank"
            >Google Play</a>
            or
            <a
              href="https://apps.apple.com/se/app/sound-realms/id1587860372"
              target="_blank"
            >App Store</a>
            and begin your adventure now!
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
import MyButton from "../components/MyButton.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
    MyButton,
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
</style>
