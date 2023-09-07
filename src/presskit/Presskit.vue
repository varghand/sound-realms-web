<template>
  <main-layout>
    <div class="content">
      <TopMenu />
      <section>
        <div class="section-content">
          <h1>Press Releases</h1>
          <p>September 15, 2023: <a href="/press/fod-kickstarter">The Fortress of Death Kickstarter</a></p>

          <h1>Sound Realms Press Kit</h1>

          <p>This page contains content (text, images, logos, sample sound files and links) to use when featuring Sound Realms in any type of media. Feel free to get in touch at <a href="mailto:dm@sound-realms.com">dm@sound-realms.com</a> if there is anything else you need.</p>

          <p><a href="/Sound_Realms_Press_Kit.zip">Download entire press kit as zip (13MB)</a></p>

          <p><i>United by a passion for old school RPGs, we set out in 2020 to craft a new way of enjoying solo adventures. We have since developed a smartphone application for iOS and Android which enables you to play through captivating solo adventures. What makes Sound Realms stand out from other RPG apps on the market is the fact (as implied by the name Sound Realms) that all our games are audio-based. A professional voice-over actor acts as your Dungeon Master and takes you through dangerous dungeons and mysterious temples, backed by a cinematic musical score and top of the line sound effects.</i></p>


          <img src="../assets/skull_and_scroll.png" class="image-small" />

          <h1>Resources</h1>

          <p><a href="/faq">FAQ</a>: Explanations on Sound Realms, Mace & Magic, and more.</p>
          <p><a href="/learn-more">About us</a>: On the team and company behind Sound Realms.</p>

          <h1>Image Gallery</h1>
          <p>Coming soon, for now press refer to the <a href="/Sound_Realms_Press_Kit.zip">press kit zip file (13MB)</a>.</p>
        </div>
      </section>


      <section>
        <div class="section-content">
          <h1>Links</h1>

          <p>Web page:<a href="https://www.sound-realms.com/">https://www.sound-realms.com/</a></p>
          <p>Kickstarter: <a href="https://www.kickstarter.com/projects/varghand/sound-realms-mace-and-magic" target="_blank">https://www.kickstarter.com/projects/varghand/sound-realms-mace-and-magic</a></p>
          <p>Download free demo: <a href="https://www.sound-realms.com/download" target="_blank">https://www.sound-realms.com/download</a></p>
          <p>Facebook: <a href="https://www.facebook.com/SoundRealms" target="_blank">https://www.facebook.com/SoundRealms</a></p>
          <p>Instagram: <a href="https://www.instagram.com/soundrealms" target="_blank">https://www.instagram.com/soundrealms</a></p>
          <p>Youtube: <a href="https://www.youtube.com/channel/UCQAIAb4OXuLgjnzfsprtZLQ" target="_blank">https://www.youtube.com/channel/UCQAIAb4OXuLgjnzfsprtZLQ</a></p>
          <p>Commercial video clip: <a href="https://youtu.be/cgIQ1PiHwmo" target="_blank">https://youtu.be/cgIQ1PiHwmo</a></p>
          <p>Intro to "Vemhir's Castle" (Demo Adventure): <a href="https://youtu.be/FynUSGlu4Nc" target="_blank">https://youtu.be/FynUSGlu4Nc</a></p>
          <p>Intro "The Mystery of the Silent Islands": <a href="https://youtu.be/H_xQei4UuCE" target="_blank">https://youtu.be/H_xQei4UuCE</a></p>
          <p>Binaural 360 surround demo: <a href="https://youtu.be/XO7zIgHjQzM" target="_blank">https://youtu.be/XO7zIgHjQzM</a></p>

          <p>
            Companion PDF:
            <a
              href="https://www.drivethrurpg.com/product/385247/Sound-Realms-Mace--Magic-Demo-Adventure-Companion-PDF"
              target="_blank"
            >https://www.drivethrurpg.com/product/385247/Sound-Realms-Mace--Magic-Demo-Adventure-Companion-PDF</a>
          </p>

          <h1>Contact</h1>
          <p>Feel free to contact us at: <a href="mailto:dm@sound-realms.com">dm@sound-realms.com</a></p>
        </div>
      </section>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import MainFooter from '../components/MainFooter.vue';
import TopMenu from '../components/TopMenu.vue';

export default {
  name: 'PresskitPage',
  components: {
    MainLayout,
    MainFooter,
    TopMenu,
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
</style>
