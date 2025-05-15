<template>
  <div class="strip-wrapper">
    <div />
    <a
      href="/"
      class="logo-link"
    ><img
      src="../assets/1_SR_BrandLogo_FullColor.png"
      class="logo"
    ></a>
    <div class="link-wrapper">
      <a href="/">HOME</a>
      <a href="https://rlms.cc/42TutXi">SHOP</a>
      <a href="/games">GAMES</a>
      <a href="/account">ACCOUNT</a>
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
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
a {
  font-size: 90%;
  --hover-color: rgb(203, 47, 47);
  padding-left: 10px;
  padding-right: 10px;
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
