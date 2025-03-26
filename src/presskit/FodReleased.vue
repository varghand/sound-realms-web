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
                title: 'March 28, 2025',
              },
            ]"
          />
          <h1>The Fortress Of Death is out now!</h1>
          <p><i>(March 28, 2025)</i></p>

          <a href="/shop/product/fod">
            <img
              alt="Sound Realms: The Fortress Of Death"
              class="image-wide"
              src="../assets/home/FOD_Banner_Website_OutNow.jpg"
            >
          </a>

          <p>
            <i>
              Fellow audioventurers &ndash; the time has come! The day is finally here...
              <strong>The Fortress Of Death</strong>'s launch day has arrived and the game is
              available to play NOW!</i>
          </p>

          <p>
            Sound Realms AB are proud to announce that
            <strong>Lone Wolf: The Fortress Of Death</strong> is now live on the Sound Realms
            platform. This is the first full-length adventure on Sound Realms that has been produced
            entirely in-house, and thus marks a major milestone in the platform's development. With
            state-of-the-art 360 degrees surround sound and modern app technology,
            <strong>The Fortress Of Death</strong> offers a truly immersive audio adventure,
            bringing the magic of fantasy roleplaying games into the digital age.
          </p>

          <p>
            <strong>The Fortress Of Death</strong> is inspired by PhoneQuest, a game that was
            presented by Joe Dever in 1989. To play PhoneQuest, you dialed a number on your landline
            telephone. A narrative voice presented a story with a selection of choices for you,
            accompanied by cinematic music and sound effects. One of these adventures was called
            <i>The Fortress of Doom</i>. <strong>The Fortress Of Death</strong> will be a reenvisioning of Joe
            Dever's original concept, modernised for smartphones and tablets &ndash; by
            incorporating 360 degrees surround sound and the latest app technology &ndash; but still
            faithful to the original. This new interactive adventure returns to the glory days of
            Lone Wolf and fantasy roleplaying games, promising to be an immersive audio game
            experience.
          </p>

          <p>
            <strong>The Fortress Of Death</strong> can be ordered through
            <a href="https://www.soundrealms.com/shop">www.soundrealms.com</a>.
          </p>

          <p><strong>Enter, if you dare, The Fortress Of Death!</strong></p>

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is a digital platform for audio adventures, currently available on iOS and
            Android. On the platform you will find a growing range of solo adventures, narrated by a
            professional voice-over actor, who acts as your Dungeon Master as you explore dangerous
            dungeons and mysterious temples, and backed by a cinematic musical score and top of the
            line sound effects. <a href="/download">Download the Sound Realms app</a> to get started
            on your adventure today.
          </p>
          <h3>About Lone Wolf</h3>
          <p>
            Lone Wolf is a series currently consisting of 31 gamebooks, created by Joe Dever who
            wrote the first 29 books of the series before his son Ben, with help from French author
            Vincent Lazzari, took over writing duty upon his father's death. The first book was
            published in July 1984 and the series has sold more than 12 million copies worldwide.
            The story focuses on the fictional world of Magnamund, where the forces of good and evil
            are fighting for control. The first Lone Wolf adventure to be featured the Sound Realms
            platform is <strong>The Fortress Of Death</strong>, a newly written adventure by
            renowned Lone Wolf writer August Hahn, set in Joe Dever's world of Magnamund.
          </p>

          <h3>Links</h3>
          <p>
            <a
              href="https://drive.google.com/drive/folders/1TSPaufEdWJHGekdAPGtma6vYiHOhNDwQ?usp=sharing"
              target="_blank"
            >Press Kit</a>
          </p>

          <p><a href="https://www.soundrealms.com">www.soundrealms.com</a></p>
          <p>
            <a
              href="https://www.magnamund.com/"
              target="_blank"
            >www.magnamund.com</a>
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
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
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
