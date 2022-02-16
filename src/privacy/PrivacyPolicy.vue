<template>
  <main-layout>
    <div class="content">
      <Menu />
      <div class="section-content">
        <h1>Sound Realms Privacy Policy</h1>

        <p>This privacy policy governs your use of the software application Sound Realms (“Application”) for mobile devices that was created by Varghand Publishing AB.</p>

        <h2>Who we are</h2>
        <p>
          Sound Realms is being developed by Varghand Publishing AB, an
          independent provider of RPG games and content. Our website address is:
          <a
            href="https://www.varghand.com/"
          >www.varghand.com</a>
        </p>
        <h2>What information does the Application obtain and how is it used?</h2>
        <p>
          Varghand Publishing AB takes privacy concerns VERY seriously! Right
          now we don't collect any data at all about you except
          anonymous usage statistics with the purpose of
          improving the user experience of future app versions.
          This type of data includes the type of mobile device you use,
          your mobile devices unique device ID, the IP address of your mobile device,
          your mobile operating system, the type of mobile Internet browsers you use,
          and information about the way you use the Application.
          We will never
          gather any sensitive personal data about you.
        </p>
        <h2>Does the Application collect precise real time location information of the device?</h2>
        <p>This Application does not collect precise information about the location of your mobile device.</p>
        <h2>Who we share your data with</h2>
        <p>No one! We will never share any of your data with any third party.</p>
        <h2>What are my opt-out rights?</h2>
        <p>
          You can stop all collection of information by the Application easily by uninstalling the Application.
          You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
        </p>
        <h2>Data Retention Policy, Managing Your Information</h2>
        <p>
          We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter.
          We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate.
          If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at app@sound-realms.com
          and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.
        </p>
        <!-- <h2>What rights you have over your data</h2>
        <p>
          If you have a Sound Realms account, you can request to receive an
          exported file of the personal data we hold about you, including any
          data you have provided to us. You can also request that we erase any
          personal data we hold about you. This does not include any data we are
          obliged to keep for administrative, legal, or security purposes.
        </p>-->
        <h2>Contact us</h2>
        <p>If you have any questions at all, don't hestitate to contact us at:</p>
        <p><a href="mailto:app@sound-realms.com">app@sound-realms.com</a></p>
      </div>
      <Footer />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Footer from '../components/Footer.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'PrivacyPolicy',
  components: {
    MainLayout,
    Footer,
    Menu,
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/pergament_background.jpg");
  width: 100%;
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  padding: 12px;
  max-width: 60%;
  height: auto;
  object-fit: scale-down;
}
.qr {
  padding: 30px;
  max-width: 80%;
}
.image {
  max-height: 500px;
}

</style>
