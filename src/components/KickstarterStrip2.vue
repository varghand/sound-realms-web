<template>
  <div class="strip-wrapper">
    <div class="strip">
        <h2 class="inverted">Join us on Kickstarter!</h2>
        <p>Currently we are raising funds on Kickstarter in order to produce the full-length campaign <i>The Mystery of the Silent Islands</i>.
        <br/>Click the button below to learn more and support the future of Sound Realms!</p>
        <Button href="https://www.kickstarter.com/projects/varghand/sound-realms-mace-and-magic" external="true" class="button">Visit Kickstarter</Button>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'KickstarterStrip',
  components: {
    Button,
  },
};
</script>

<style scoped>
.strip-wrapper {
  width: 100%;
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
.strip > p,h2 {
  max-width: 960px;
  padding-left: 30px;
  padding-right: 30px;
}

p {
  color: white;
  padding-bottom: 20px;
  text-align: center;
}

.button {
  margin-bottom: 30px;
}
</style>
