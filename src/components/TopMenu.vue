<template>
  <div class="strip-wrapper">
    <div />
    <a
      href="https://shop.soundrealms.com/"
      class="logo-link"
    ><img
      src="../assets/1_SR_BrandLogo_FullColor.png"
      class="logo"
    ></a>
    <div class="link-wrapper">
      <a href="https://rlms.cc/44mUNbM">SHOP</a>
      <a href="/games">GAMES</a>
      <a href="/account">ACCOUNT</a>
      <a href="https://shop.soundrealms.com/pages/f-i-s-t">REALMS</a>
    </div>
    <div />
  </div>
</template>

<script>

export default {
  name: 'TopMenu',
};
</script>

<style scoped>
.strip-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
.link-wrapper {
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
a {
  font-size: 70%;
  --hover-color: rgb(203, 47, 47);
}
.logo {
  padding: 20px;
  max-width: 80%;
  max-height: 60px;
}
.logo-link {
  display: flex;
  justify-content: center;
}
@media screen and (max-width:980px){
  .logo {
    max-width: 100%;
  }
  .link-wrapper {
    width: 70%;
  }
}
@media screen and (max-width:680px){
  .strip-wrapper {
    flex-direction: column;
  }
  .link-wrapper {
    flex-direction: row;
    margin-bottom: 10px;
  }
  a {
    font-size: 60%;
  }
}
</style>
