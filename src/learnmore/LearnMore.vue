<template>
  <main-layout>
    <div class="content">
      <section>
        <MyBreadcrumbs
          :breadcrumbs="[
            {
              title: 'Sound Realms',
              link: '/',
            },
            {
              title: 'About Us',
            },
          ]"
        />
        <div class="section-content">
          <h1>About us</h1>

          <p>
            The idea of a game platform such as Sound Realms formed in Oscar Carlquist's head many moons ago. A long time enthusiast of solo adventure books and RPG quests, as well as studio engineer, vocalist and voice-over narrator, Carlquist would come to see the great potential in turning the books and quests into audio productions. How adding music and sound effects to a capturing voice-over performance could enhance the adventures he had played over and over again since childhood.
          </p>
          <p>
            In those days (the mid-90s), the practical limitations were still obvious. Such an adventure would span over more than several audio CDs, while rules and notes would still have to be done separately with pen and paper. The idea itself however would never die, and pretty soon, with the introduction of the Internet and eventually the mp3 format, the possibilities would look slightly more favourable. The dream lived on, and as smart phones started to revolutionise our lives, Carlquist began the quest of fulfilling his old dream.
          </p>
          <p>
            2013 would see Carlquist acquire his own professional recording studio, where one of the clients would be a band happening to feature Gustav Sundin, a role-playing game obsessed software programmer. Soon the idea would be pitched to an enthusiastic Sundin; however time would pass, life happen and other commitments clamour for attention. The idea again would not die in the minds of the both, and in 2020 and the mist of a world crippling pandemic, the duo found the break needed to dive into the plan. The process of bringing the vision to life began.
          </p>
          <p>
            And so the time came! Combining Carlquist's lifelong experience as a vocal performer and sound engineer with Sundin's programming expertise, the assembling of a team of illustrators and a composer, would bring Sound Realms to life. The first effort to meet the public would be a demo of Carlquist’s very own adventure Mace & Magic: Vemhir’s Castle, soon to be unleashed in its entirety. In the moment of writing, the Sound Realms platform features the two full length adventures Fortress of Death and F.I.S.T., and several more titles are soon to follow.
          </p>
          <p>
            Download the Sound Realms app now and join us on this epic journey!
          </p>

          <img
            src="../assets/learnMore/varghand_2024.jpeg"
            class="image-large"
          >
        </div>
      </section>
      <GametestStrip />
      <section>
        <div class="section-content">
          <h1>A platform of audio based games and other audio content</h1>
          <p>
            Our aim is to make Sound Realms the number one brand for fantasy, sci-fi, and horror
            audio content. Currently we are focusing on audio adventures, but in time we would love
            to publish fantasy and sci-fi audio books and other fantasy, sci-fi or RPG based audio
            content, making Sound Realms the natural place to turn to if you wish to listen to
            anything related to these topics. We have a grand vision and we hope you will see it
            incarnate together with us and help us develop it and see it progress with the help of
            your feedback.
          </p>

          <img
            src="../assets/VemhirsCastle.png"
            class="image-large"
          >
        </div>
      </section>

      <div class="strip">
        <h2>Sign up for the Newsletter</h2>
        <div class="section-content">
          <p class="inverted">
            Sign up for our newsletter if you want to stay up to date when we release new
            adventures. Occasionally you will also receive free in-game bonus items and other
            goodies.
          </p>
          <NewsletterSignupForm />
        </div>
      </div>

      <MainFooter />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import MainFooter from "../components/MainFooter.vue";
import GametestStrip from "../components/GametestStrip.vue";
import MyBreadcrumbs from "../components/MyBreadcrumbs.vue";
import NewsletterSignupForm from "../components/NewsletterSignupForm.vue";

export default {
  name: "LearnMorePage",
  components: {
    MainLayout,
    MainFooter,
    GametestStrip,
    MyBreadcrumbs,
    NewsletterSignupForm,
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

.strip {
  background-color: #672a66;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.strip > h1,
h2 {
  color: white;
}

.image-large {
  padding-bottom: 20px;
}
</style>
