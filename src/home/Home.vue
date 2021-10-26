<template>
  <main-layout>
    <div class="content">
      <img
        alt="Sound Realms logo"
        class="topImage"
        src="../assets/sound_realms_mace_and_magic.jpg"
      />
      <div class="section">
        <h1>The first ever REAL audio solo roleplaying game</h1>
        <p class="bold">
          Featuring great adventures, presented with top class voice over
          performances, original orchestral music, cinematic sound effects,
          digital RPG dice rolls, digital character sheets, skills, spells,
          swords and monsters!
        </p>

        <p>
          Sound Realms presents Mace & Magic, the first ever real audio solo
          roleplaying game set in a brand new dark fantasy realm bustling with
          adventure, perilous challenges and adversaries.
        </p>
        <p>
          Now you can whenever you have a moment to spare hear fantastic worlds
          unfold and have an unparalled solo RPG experience! Now you can
          roleplay more and do not have to rely upon getting your RPG group
          together to sink your sword into a dragons heart or incinerate a
          goblin with a fireball spell!
        </p>
        <p>Brace yourself and enter the Realm of MACE & MAGIC!</p>
        <img src="../assets/pile_of_bones.png" />
      </div>
      <div class="hero">
        <div class="hero-text">
          <h2 class="inverted">Dare you be one of the first?</h2>
          <p class="inverted">Apply now for Game Testing, and always be rembered as a bold pioneer of adventuring, hero of Mace & Magic!</p>
        </div>
        <img
          class="hero-image"
          src="../assets/mace_background.jpg"
        />
      </div>
    </div>
  </main-layout>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
}
.logo {
  padding: 12px;
  max-width: 90%;
  height: auto;
  object-fit: scale-down;
}
.topImage {
  width: 100%;
}
p {
  max-width: 60%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
.bold {
  font-weight: bold;
}
.inverted {
  color: white;
}

h1 {
  color: #a166a0;
  font-family: "HamletOrNot";
  font-weight: normal;
}

h2 {
  font-family: "HamletOrNot";
  font-weight: normal;
}

.hero {
  width: 100%;
  /* max-width:960px; */
  /* margin:1rem auto; */
  position: relative;
}
.hero-image {
  width: 100%;
}
.hero-text {
  position: absolute;
  top:50%;
  left:0;
  /* padding:1rem; */
  transform:translateY(-50%);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%
}

@media screen and (max-width:680px){
  .hero-text {font-size: 0.8rem}
}
@media screen and (max-width:540px){
  .hero-text {font-size: 0.7rem}
}
</style>
