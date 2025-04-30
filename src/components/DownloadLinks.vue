<template>
  <div class="columns">
    <a href="https://rlms.cc/website-gpdownload">
      <img
        src="../assets/gametest/google-play-badge.png"
        class="qr"
      >
    </a>

    <a href="https://rlms.cc/website-gpdownload">
      <img
        src="../assets/gametest/android_qr.png"
        class="qr"
      >
    </a>

    <a href="https://rlms.cc/website-asdownload">
      <img
        src="../assets/gametest/app-store-badge.png"
        class="qr"
      >
    </a>

    <a href="https://rlms.cc/website-asdownload">
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
