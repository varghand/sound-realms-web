<template>
  <div class="strip-wrapper">
    <div class="gameTestStrip">
        <h2 class="inverted">Want more?</h2>
        <p>Currently we are raising funds on Kickstarter in order to produce the full-length campaign <i>The Mystery of the Silent Islands</i>.
        <br/>Click the button below to learn more and support the future of Sound Realms.</p>
        <MyButton href="https://www.kickstarter.com/projects/varghand/sound-realms-mace-and-magic" external="true" class="MyButton">Visit Kickstarter</MyButton>
      </div>
  </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default {
  name: 'GametestStrip',
  components: {
    MyButton,
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
.gameTestStrip > p,h2 {
  max-width: 960px;
  padding-left: 30px;
  padding-right: 30px;
}

p {
  color: white;
  padding-bottom: 20px;
  text-align: center;
}

.MyButton {
  margin-bottom: 30px;
}
</style>
