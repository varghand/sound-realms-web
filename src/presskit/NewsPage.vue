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
                title: 'Press & News',
              },
            ]"
          />
          <h1>Press & News</h1>
          <p>
            On this page you will find all press resources for Sound Realms. You are very welcome to
            use any content (text, images, logos, sample sound files and links) from this page when
            featuring Sound Realms in any type of media.
          </p>
          <p>
            If there is anything more that you need, don't hestitate to contact us at
            <a href="mailto:dm@soundrealms.com">dm@soundrealms.com</a>.
          </p>
          <h2>Press Releases</h2>
          <ul>
            <li class="bold">
              March 28, 2025:
              <a
                href="/press/fod-released"
                class="bold"
              >The Fortress Of Death is out now!</a>
            </li>
            <li class="bold">
              January 31, 2025:
              <a
                href="/press/first-investment-round"
                class="bold"
              >Sound Realms Secures 3.8 Million SEK in First Investment Round</a>
            </li>
            <li class="bold">
              September 7, 2024:
              <a
                href="/press/fist-is-out"
                class="bold"
              >F.I.S.T. is out NOW!</a>
            </li>
            <li class="bold">
              July 1, 2024:
              <a
                href="/press/fist-release-date"
                class="bold"
              >Release Date for F.I.S.T. Announced</a>
            </li>
            <li class="bold">
              December 2, 2023:
              <a
                href="/press/fist"
                class="bold"
              >The Return of Steve Jackson's F.I.S.T.</a>
            </li>
            <li class="bold">
              October 15, 2023:
              <a
                href="/press/fod-ks-complete"
                class="bold"
              >Kickstarter Campaign Completed!</a>
            </li>
            <li class="bold">
              October 3, 2023:
              <a
                href="/press/dracula"
                class="bold"
              >Sound Realms Unveils Dracula: Curse of the Vampire</a>
            </li>
            <li class="bold">
              September 23, 2023:
              <a
                href="/press/fod-funded"
                class="bold"
              >Kickstarter Fully Funded in Under 5 Hours!</a>
            </li>
            <li class="bold">
              September 15, 2023:
              <a
                href="/press/fod-kickstarter"
                class="bold"
              >The Fortress of Death Kickstarter</a>
            </li>
          </ul>

          <h2>About Sound Realms</h2>
          <p>
            <i>United by a passion for old school RPGs, we set out in 2020 to craft a new way of
              enjoying solo adventures. We have since developed a smartphone application for iOS and
              Android which enables you to play through captivating solo adventures. What makes
              Sound Realms stand out from other RPG apps on the market is the fact (as implied by
              the name Sound Realms) that all our games are audio-based. A professional voice-over
              actor acts as your Dungeon Master and takes you through dangerous dungeons and
              mysterious temples, backed by a cinematic musical score and top of the line sound
              effects.</i>
          </p>

          <img
            src="../assets/skull_and_scroll.png"
            class="image-small"
          >

          <h2>Resources</h2>
          <p>
            <a
              href="https://drive.google.com/drive/folders/1TSPaufEdWJHGekdAPGtma6vYiHOhNDwQ?usp=sharing"
              target="_blank"
            >Press Kit</a>
          </p>
          <p><a href="/faq">FAQ</a>: Explanations on Sound Realms, Mace & Magic, and more.</p>
          <p><a href="/learn-more">About us</a>: On the team and company behind Sound Realms.</p>
        </div>
      </section>

      <section>
        <div class="section-content">
          <h2>Links</h2>

          <p>Web page: <a href="https://www.soundrealms.com/">www.soundrealms.com</a></p>
          <p>
            Kickstarter:
            <a
              href="https://www.kickstarter.com/projects/varghand/fortress-of-death"
              target="_blank"
            >www.kickstarter.com/projects/varghand/fortress-of-death</a>
          </p>
          <p>
            Download free demo:
            <a
              href="https://www.soundrealms.com/download"
              target="_blank"
            >www.soundrealms.com/download</a>
          </p>
          <p>
            Facebook:
            <a
              href="https://rlms.cc/srweb-fb"
              target="_blank"
            >www.facebook.com/SoundRealms</a>
          </p>
          <p>
            Instagram:
            <a
              href="https://rlms.cc/srweb-ig"
              target="_blank"
            >www.instagram.com/soundrealms</a>
          </p>
          <p>
            Youtube Channel:
            <a
              href="https://rlms.cc/srweb-yt"
              target="_blank"
            >www.youtube.com/channel/UCQAIAb4OXuLgjnzfsprtZLQ</a>
          </p>
          <p>
            Commercial video clip for Mace & Magic:
            <a
              href="https://www.youtube.com/watch?v=DUsosTA0fss"
              target="_blank"
            >https://www.youtube.com/watch?v=DUsosTA0fss</a>
          </p>
          <p>
            Introductionary video for The Fortress of Death:
            <a
              href="https://youtu.be/9waUrmOaVGM"
              target="_blank"
            >https://youtu.be/9waUrmOaVGM</a>
          </p>

          <h2>Contact</h2>
          <p>
            Feel free to contact us at: <a href="mailto:dm@soundrealms.com">dm@soundrealms.com</a>
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
  name: "NewsPage",
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

.section-content {
  word-wrap: break-word;
}

h1 {
  margin: 0px;
}

h2 {
  margin-bottom: 0px;
}
</style>
