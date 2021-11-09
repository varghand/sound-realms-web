<template>
  <div class="strip-wrapper">
    <a href="/"><img src="../assets/sr_logo_colour.png" class="logo"/></a>
  </div>
</template>

<script>

export default {
  name: 'Menu',

};
</script>

<style scoped>
.strip-wrapper {
  width: 100%;
}
.logo {
  padding-left: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 80%;
}
@media screen and (max-width:980px){
  .logo {
    padding-left: 20px;
    max-width: 80%;
  }
}
</style>
