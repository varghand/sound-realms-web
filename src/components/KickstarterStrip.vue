<template>
  <div class="strip-wrapper">
    <div class="gameTestStrip">
        <h2 class="inverted">Want more?</h2>
        <p>Currently we are raising funds on Kickstarter in order to produce the full-length campaign <i>The Mystery of the Silent Islands</i>.
        <br/>Click the button below to learn more and support the future of Sound Realms.</p>
        <Button href="https://www.kickstarter.com/projects/varghand/sound-realms-mace-and-magic" external="true" class="button">Visit Kickstarter</Button>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'GametestStrip',
  components: {
    Button,
  },
};
</script>

<style scoped>
.strip-wrapper {
  width: 100%;
}
.gameTestStrip {
  background-color: #672a66;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gameTestStrip > h2 {
  max-width: 60%;
}

p {
  max-width: 960px;
  color: white;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

.button {
  margin-bottom: 30px;
}
</style>
