<template>
  <div class="columns">
    <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
      <img
        src="../assets/gametest/google-play-badge.png"
        class="qr"
      >
    </a>

    <a href="https://play.google.com/store/apps/details?id=com.wolfhand.audioquest">
      <img
        src="../assets/gametest/android_qr.png"
        class="qr"
      >
    </a>

    <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
      <img
        src="../assets/gametest/app-store-badge.png"
        class="qr"
      >
    </a>

    <a href="https://apps.apple.com/se/app/sound-realms/id1587860372">
      <img
        src="../assets/gametest/ios_qr.png"
        class="qr"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadLinks',
};
</script>

<style scoped>
.columns {
  column-count: 2;
  column-gap: 40px;
  max-width: 500px;
}
.qr {
  padding-top: 15px;
  padding-bottom: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
