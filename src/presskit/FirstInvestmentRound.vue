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
                title: 'January 31, 2025',
              },
            ]"
          />
          <h1>Sound Realms Secures 3.8 Million SEK in First Investment Round</h1>
          <p><i>(January 31, 2025)</i></p>
          <p>
            Sound Realms, the innovative platform bringing immersive, audio-based solo RPG
            adventures to iOS and Android, has successfully closed its first investment round,
            raising 3.8 million SEK.
          </p>
          <p>
            Sound Realms redefines the solo RPG experience by combining the storytelling magic of
            interactive audiobooks with the depth of tabletop RPG mechanics. The platform features
            globally recognized intellectual properties, including Chaosium Inc.'s Call of Cthulhu,
            the legendary Lone Wolf gamebooks, and Steve Jackson's F.I.S.T. (Fantasy Interactive
            Scenarios by Telephone).
          </p>
          <p>
            The investors are The Tranicos Trust (Fredrik Malmberg), Advenimus AB (Susana Meza
            Graham), Jon Gillard and Arodena AB (Olle and Eva Sundin).
          </p>

          <p>
            "This significant investment demonstrates the growing demand for innovative storytelling
            experiences," said Oscar Carlquist, co-founder of Sound Realms. “We are excited to scale
            up our platform and continue delivering unique RPG adventures to players worldwide. This
            investment round does not only bring capital but a level of expertise and experience
            from our investors that surpasses even our highest initial hopes, we are so grateful and
            excited to welcome our new partners to the next phase of Sound Realms.”
          </p>

          <p>
            The funding will enable Sound Realms to enhance its technology, expand its library of
            high-quality adventures, onboard new, high-profile RPG titles and focus more on sales
            and marketing. With these developments, the platform is poised to establish itself as a
            leader in the growing market for immersive, audio-based gaming.
          </p>

          <h3>About Sound Realms</h3>
          <p>
            Sound Realms is the leading platform for immersive audio adventures. Designed for
            storytelling enthusiasts, the platform offers a unique blend of interactive gameplay
            with RPG mechanics and high-quality narrative audio experiences.
          </p>
          <p>
            For more information about Sound Realms and its revolutionary approach to audio gaming,
            visit <a href="https://www.soundrealms.com">www.soundrealms.com</a>.
          </p>

          <MyButton
            external="true"
            class="button"
            href="https://drive.google.com/drive/folders/1TSPaufEdWJHGekdAPGtma6vYiHOhNDwQ?usp=sharing"
          >
            Download Full Press Kit
          </MyButton>
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
