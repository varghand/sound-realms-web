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
                title: 'March 27, 2025',
              },
            ]"
          />
          <h1>Important Update for iOS Users</h1>
          <p><i>(March 27, 2025)</i></p>

          <p>
            We regret to inform our iOS users that Apple has just issued a warning regarding certain
            guidelines we have inadvertently violated in our app. As a result, we are unable to
            release new updates until the required changes are made. This has obviously become our
            top priority, but it will take some time to address these issues and implement the
            necessary changes.
          </p>

          <p>
            This came as an unpleasant surprise, especially given that the app has been live on the
            App Store for over three years and with more than 170 updates accepted without issue.
            It's particularly unfortunate timing, just before the highly anticipated release of The
            Fortress of Death – but as Murphy's Law would have it, things rarely go as planned.
          </p>
          <p>
            We are already working with Apple to resolve the issues and have asked for a temporary
            exception to allow us to release The Fortress of Death as scheduled. We are still
            waiting for their verdict in this matter, so we can't provide an exact timeline just
            yet. We will of course update you as soon as we know more.
          </p>
          <p>
            In the meantime, the Android release will proceed as planned tomorrow (March 28) at
            19:00 CET.
          </p>
          <p>Thank you for your understanding and patience!</p>

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
