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
                title: 'June 26, 2025',
              },
            ]"
          />
          <h1>Sound Realms and Fighting Fantasy Announces Partnership</h1>
          <p><i>(June 26, 2025)</i></p>

          <a href="/shop/product/fod">
            <img
              alt="Sound Realms and Fighting Fantasy Announces Partnership"
              class="image-wide"
              src="../assets/ff/SR_FF_announcement.jpg"
            >
          </a>

          <p>
            Sound Realms is pleased to announce an exciting new partnership with Fighting Fantasy, the iconic gamebook series created by renowned authors Ian Livingstone and Steve Jackson. This collaboration will see classic Fighting Fantasy titles reimagined as immersive audio experiences, exclusively available on the Sound Realms app.
</p>
   <p>
Bringing these legendary adventures to life through richly produced, interactive audio marks a significant milestone for Sound Realms and its mission to innovate the landscape of narrative entertainment. While full details remain under wraps, this initiative represents the beginning of a new chapter in the evolution of audio storytelling.
</p>
   <p>
“Sound Realms are developing new ways of storytelling, and I am really looking forward to listening to their audio adaptations of Fighting Fantasy gamebooks in this innovative new format,” said Ian Livingstone, co-creator of Fighting Fantasy.
</p>
   <p>
Sound Realms is proud to collaborate with such a classic franchise as Fighting Fantasy, and look forward to introducing a new way of adventuring through these beloved stories through the power of immersive audio.
</p>
   <p>
“We here at Sound Realms are super excited to begin production of these iconic gamebook masterpieces. My copy of “Fasans Labyrint” (Swedish edition of Death Trap Dungeon) has been played extensively since childhood and has been a big part of shaping my love for roleplaying games, fantasy media and in extension the creation of the Sound Realms company. It is an absolute honor to actually now be a part of the FF legacy and be able to present our vision of these legendary tales. We also have a very special idea for this project, but that is a secret for now…”
– Oscar Carlquist, co-founder of Sound Realms
</p>
   <p>
For further media enquiries, please contact: dm@soundrealms.com

          </p>

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is a digital platform for audio adventures, currently available on iOS and
            Android. On the platform you will find a growing range of solo adventures, narrated by a
            professional voice-over actor, who acts as your Dungeon Master as you explore dangerous
            dungeons and mysterious temples, and backed by a cinematic musical score and top of the
            line sound effects. <a href="/download">Download the Sound Realms app</a> to get started
            on your adventure today.
          </p>
          <h3>About Fighting Fantasy</h3>
          <p>
            Fighting Fantasy is a long-running series of interactive gamebooks created by Steve Jackson
             and Ian Livingstone, first launched in 1982. Blending role-playing with branching narratives,
              the books let readers become the hero—rolling dice to battle monsters, make tough choices,
              and explore rich fantasy and sci-fi worlds like the iconic land of Titan.
              While hugely popular in the 1980s, the series remains a cult favourite and continues to
              attract new fans today through reprints, digital editions, and a thriving online community.
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
              href="https://www.fightingfantasy.com/"
              target="_blank"
            >www.fightingfantasy.com</a>
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
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";

export default {
  components: {
    MainLayout,
    MainFooter,
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
