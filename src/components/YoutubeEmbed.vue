<template>
  <div class="video-wrap">
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        :src=video
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubeEmbed',
  props: {
    video: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
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
</style>
