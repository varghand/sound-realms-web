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
        <img src="../assets/pile_of_bones.png" class="small-image"/>
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


      <div class="section">
        <h1>THE Audio Adventure System</h1>
        <p>
          Sound Realms aim to deliver immersive and captivating experiences to the paperback RPG and solo adventure book audience but also to
          offer the regular consumer of audio books or fantasy and sci-fi literature an experience beyond what ordinary audio books can offer.
          Any consumer of mobile games will find Sound Realms interesting since it’s game mechanics rely heavily upon the player using their
          imagination to envision what happens in the game. This takes mobile gaming beyond tiny screens and touch fiddling into new realms
          - Sound Realms
        </p>
        <div class="gallery">
          <img src="../assets/dice_and_book.jpg" />
        </div>
      </div>


      <div class="section">
        <div class="row">
          <img src="../assets/mace_and_magic.jpg" class="mace_magic_image"/>
          <div class="row_column_2">
          <p>
            The first release on the Sound Realms platform will be
            “Mace & Magic” an audio based solo fantasy roleplaying game.
            A demo adventure is available for game testing by selected parties now for iOS and android devices.
            We aim to use the free demo as a key element in a forthcoming crowdfunding campaign to release
            an adventure of approximately 7 hours of playing time. “Mace & Magic” is set in the brand-new world of “Mihr”,
            a dark fantasy realm strook by an apocalyptic event called “The Magiklysm”,
            making it an ideal environment for epic adventures.
            Production of this adventure has already begun.
          </p>
          <p>
            With “Mace & Magic” we aim to explore and expand the possibilities of this new format not only in cutting edge programming
            but also in the recording and usage of audio.
            Mace & Magic uses a slightly modified version of Choasium Inc’s RPG rule set “Basic Roleplaying System”,
            that we have successfully digitalised for a classic RPG experience, complete with dice roles and character sheets etc.
          </p>
          </div>
        </div>
      </div>

      <div class="gameTestStrip">
        <h2 class="inverted">Become Part of the Crew! Join us in game testing!</h2>
      </div>
      <div class="soundRealmsStrip">
      </div>
      <div class="footer">
      </div>
    </div>
  </main-layout>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  max-width: 60%;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 960px;
}
.mace_magic_image {
  max-width: 30%;
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
.soundRealmsStrip {
  background-color: #333333;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer {
  background-color: #2c2c2c;
  min-height: 100px;
  width: 100%;
}
.gallery {
  padding-top: 30px;
  padding-bottom: 60px;
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
.small-image {
  padding-bottom: 30px;
}
p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  text-align: left;
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
  top: 50%;
  left: 0;
  /* padding:1rem; */
  transform: translateY(-50%);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%
}

@media screen and (max-width:980px){
  .row {
    flex-direction: column;
  }
  .mace_magic_image {
    max-width: 100%;
  }
}
@media screen and (max-width:680px){
  .hero-text {font-size: 0.8rem}
}
@media screen and (max-width:540px){
  .hero-text {font-size: 0.7rem}
}
</style>
