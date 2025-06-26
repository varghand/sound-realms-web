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
                title: 'News',
                link: '/news',
              },
              {
                title: 'October 3, 2023',
              },
            ]"
          />
          <h1>Sound Realms Unveils Dracula: Curse of the Vampire</h1>
          <p><i>(October 3, 2023)</i></p>

          <img
            src="../assets/dracula/dracula-curse-of-the-vampire.jpg"
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
            Sound Realms are very proud and excited to announce a collaboration with ACE Gamebooks
            and author Jonathan Green to create an audio adventure version of "Dracula, Curse of the
            Vampire" (2021) for the Sound Realms platform.
          </p>
          <p>
            Oscar Carlquist: "We are very pleased to present the next upcoming addition to Sound
            Realms and I can't wait to start creating some truly haunting and immersive soundscapes
            for Dracula: Curse of the Vampire. The interactive gamebook version of Bram Stoker's
            classic is masterfully written by Jon Green and taking this into the audio realm will be
            as much of an honour as a challenge that we here at Sound Realms are ready to embrace
            with enthusiasm and dedication!"
          </p>
          <p>
            Jonathan Green: "I am thrilled that Sound Realms are turning Dracula, Curse of the
            Vampire into the first audio ACE Gamebook and can't wait to hear how they bring the
            horror to life through the use of soundscapes and top-notch voice talent. It's going to
            be bloodcurdlingly brilliant!"
          </p>

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is a platform where you will find a range of RPG audio solo adventures, or
            interactive audio books. The adventures are presented by a narrator assuming the role of
            Game Master, backed by original orchestral music and cinematic sound effects.
          </p>
          <p>
            The first full length adventure for the Sound Realms platform will be The Fortress of
            Death, set in the world of Joe Dever's Lone Wolf. The game is inspired by PhoneQuest, a
            game that was presented by Joe Dever in 1989. To play PhoneQuest, you dialled a number on
            your landline telephone. A narrative voice presented a story with a selection of choices
            for you, accompanied by cinematic music and sound effects. One of these adventures was
            called Fortress of Doom. The Fortress of Death will be a reenvisioning of Joe Dever's
            original concept, modernised for smartphones and tablets &ndash; by incorporating 360
            surround sound and the latest app technology &ndash; but still faithful to the original.
            This new interactive adventure returns to the glory days of Lone Wolf and fantasy
            roleplaying games, promising to be an immersive audio game experience. Enter, if you
            dare, The Fortress of Death!
          </p>
          <h3>About ACE Gamebooks</h3>
          <p>
            ACE Gamebooks are old school adventure gamebooks, in which YOU are the hero, with a
            modern twist. Nightmarish realms, steampunk weirdness, and prehistoric piracy! Read the
            Classics as you have never read them before!
          </p>
          <h3>Links</h3>
          <p><a href="https://www.soundrealms.com">www.soundrealms.com</a></p>
          <p>
            <a
              href="https://www.kickstarter.com/projects/varghand/fortress-of-death"
              target="_blank"
            >www.kickstarter.com/projects/varghand/fortress-of-death</a>
          </p>
          <p>
            <a
              href="https://www.acegamebooks.com"
              target="_blank"
            >www.acegamebooks.com</a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/jongreen71"
              target="_blank"
            >www.instagram.com/jongreen71</a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/ACEgamebooks"
              target="_blank"
            >
              www.facebook.com/ACEgamebooks</a>
          </p>

          <p>
            Download Sound Realms for free through
            <a
              href="https://rlms.cc/website-gpdownload"
              target="_blank"
            >Google Play</a>
            or
            <a
              href="https://rlms.cc/website-asdownload"
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
import MyButton from "../components/MyButton.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  components: {
    MainLayout,
    MainFooter,
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
