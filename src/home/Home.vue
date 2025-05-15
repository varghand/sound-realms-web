<template>
  <main-layout>
    <div class="content">
      <div class="topSection">
        <a href="/shop/product/fod">
          <img
            alt="Sound Realms: The Fortress Of Death"
            class="topImage"
            src="../assets/home/FOD_Banner_Website_OutNow.jpg"
          >
        </a>
      </div>
      <section>
        <div class="section-content">
          <h1>THE Audio Adventure System</h1>
          <div class="text">
            <p>
              Step into a world where <strong>every choice you make shapes the story</strong>, and
              every twist comes alive in breathtaking audio detail. Sound Realms isn't just any
              role-playing game, it's an immersive audio experience that puts
              <strong>you</strong> in the center of an epic adventure!
            </p>
            <p>
              With <strong>professional voice actors narrating every scene</strong>, prepare to feel
              the intensity and depth of a real, cinematic audio adventure. The high-quality
              <strong>360° surround sound wraps you in a world of captivating soundscapes</strong>:
              from the whisper of leaves in an ancient forest to the thunderous clash of battle,
              each effect and musical score pulls you deeper into the narrative. It's like being
              inside your favorite fantasy, sci-fi or horror movie, only this time,
              <strong>you are the hero</strong>.
            </p>
            <p>Highlights:</p>
            <ul>
              <li>
                🎙️ <strong>Narration by Top Voice Talent</strong>: Feel each line delivered with
                emotion, character, and impact.
              </li>
              <li>
                🎶 <strong>Soundtrack & Cinematic Effects</strong>: Masterfully crafted music and
                sound effects heighten every scene.
              </li>
              <li>
                🎧 <strong>Immersive 360° Surround Sound</strong>: Designed to make you feel like
                you're truly there, no matter where your adventure takes you.
              </li>
            </ul>
            <p>
              Whether you're braving mythical lands or solving mysterious quests, every listen
              brings a new layer to your personal adventure.
            </p>
            <p>
              <strong>Download today and try for free. Let your story unfold!</strong>
            </p>
          </div>

          <DownloadLinks />

          <img
            src="../assets/pile_of_bones.png"
            class="small-image"
          >
        </div>
      </section>

      <NewsletterStrip />

      <section>
        <div class="section-content">
          <AllGames />
        </div>
      </section>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainFooter from "../components/MainFooter.vue";
import MainLayout from "../layouts/Main.vue";
import DownloadLinks from "../components/DownloadLinks.vue";
import AllGames from "../adventures/AllGames.vue";
import NewsletterStrip from "../components/NewsletterStrip.vue";

export default {
  name: "HomePage",
  components: {
    MainFooter,
    MainLayout,
    NewsletterStrip,
    AllGames,
    DownloadLinks,
  },
};
</script>

<style scoped>
.topSection {
  background-color: #672a66;
  width: 100%;
}

h1,
h2 {
  font-family: Arial, Helvetica, sans-serif;
}

.game-icons {
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 960px;
}
.text {
  align-items: flex-start;
}
.dreadhorn_image {
  max-width: 40%;
  padding-bottom: 30px;
  padding-right: 30px;
}

.gallery {
  padding-top: 30px;
  padding-bottom: 60px;
  max-width: 80%;
}
.logo {
  padding: 12px;
  max-width: 90%;
  height: auto;
  object-fit: scale-down;
}
.topImage {
  width: 100%;
}
.small-image {
  padding-top: 15px;
  padding-bottom: 15px;
}

img {
  max-width: 100%;
}

.hero {
  width: 100%;
  position: relative;
}
.hero-image {
  width: 100%;
  min-height: 400px;
  height: 100%;
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.hero-text > p,
h2 {
  max-width: 960px;
  padding-left: 30px;
  padding-right: 30px;
}

.video-wrap {
  width: 80%;
  max-width: 960px;
  padding-top: 30px;
  padding-bottom: 90px;
}

.video-container {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 56.25%; /* creates a 16:9 aspect ratio */
}

.video-container iframe,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.section-content {
  padding-bottom: 30px;
}

@media screen and (max-width: 980px) {
  .game-icons {
    grid-template-columns: repeat(2, 1fr);
  }
  .dreadhorn_image {
    max-width: 80%;
  }

  .gallery {
    max-width: 95%;
  }
}
@media screen and (max-width: 680px) {
  .game-icons {
    grid-template-columns: repeat(1, 1fr);
  }
  .hero-text {
    font-size: 0.8rem;
  }
  .qr {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  .hero-text {
    font-size: 0.7rem;
  }
}
</style>
