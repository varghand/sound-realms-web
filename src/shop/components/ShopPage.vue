<template>
  <div class="shop-page">
    <header class="shop-header">
      <a
        href="https://soundrealms.com/"
        class="shop-brand"
        aria-label="Sound Realms home"
      >
        <img
          src="../../assets/1_SR_BrandLogo_FullColor.png"
          alt="Sound Realms"
        >
      </a>
      <nav aria-label="Store navigation">
        <a href="https://soundrealms.com/collections/all">Shop</a>
        <router-link to="/account">
          Unlock content
        </router-link>
        <a href="https://soundrealms.com/pages/download">Download app</a>
      </nav>
    </header>

    <main class="shop-main">
      <slot />
    </main>

    <footer class="shop-footer">
      <div>
        <img
          src="../../assets/3_SR_BrandLogo_White.png"
          alt="Sound Realms"
        >
        <p>Immersive audio adventures where your choices shape the story.</p>
      </div>
      <div class="shop-footer-links">
        <a href="https://soundrealms.com/collections/all">Shop</a>
        <a href="https://soundrealms.com/pages/faq">FAQ</a>
        <a href="mailto:dm@soundrealms.com">Contact</a>
      </div>
      <p class="shop-copyright">
        © 2020-{{ currentYear }} Sound Realms AB
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ShopPage",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Tomorrow";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("https://shop.soundrealms.com/cdn/fonts/tomorrow/tomorrow_n6.43acc5a2ba8824b19d8166544338e4521fab6244.woff2") format("woff2");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://shop.soundrealms.com/cdn/fonts/poppins/poppins_n4.0ba78fa5af9b0e1a374041b3ceaadf0a43b41362.woff2") format("woff2");
}

.shop-page {
  --shop-purple: #6c3688;
  --shop-purple-dark: #512267;
  --shop-ink: #171717;
  --shop-muted: #666;
  --shop-line: #dedede;
  --shop-soft: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: var(--shop-ink);
  font-family: "Poppins", Arial, sans-serif;
  font-size: 16px;
}

.shop-page *,
.shop-page *::before,
.shop-page *::after {
  box-sizing: border-box;
}

.shop-page h1,
.shop-page h2,
.shop-page h3,
.shop-page button,
.shop-page .shop-button {
  font-family: "Tomorrow", Arial, sans-serif;
}

.shop-page h1,
.shop-page h2,
.shop-page h3 {
  color: var(--shop-ink);
  line-height: 1.15;
  margin-top: 0;
}

.shop-page h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 600;
}

.shop-page h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 600;
}

.shop-page p,
.shop-page li,
.shop-page label,
.shop-page input {
  font-family: "Poppins", Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
}

.shop-page a {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
}

.shop-page a:hover {
  color: var(--shop-purple);
}

.shop-header {
  min-height: 126px;
  padding: 24px clamp(24px, 5vw, 64px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  background: var(--shop-soft);
  border-bottom: 1px solid #ececec;
}

.shop-brand {
  display: inline-flex;
  align-items: center;
}

.shop-brand img {
  display: block;
  width: min(182px, 44vw);
  max-height: 64px;
  object-fit: contain;
}

.shop-header nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(18px, 3vw, 42px);
}

.shop-header nav a,
.shop-footer-links a {
  font-family: "Tomorrow", Arial, sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.shop-header nav a.router-link-active {
  color: var(--shop-purple);
  box-shadow: 0 2px 0 var(--shop-purple);
}

.shop-main {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: clamp(48px, 7vw, 92px) clamp(20px, 5vw, 64px);
  flex: 1;
}

.shop-panel {
  border: 1px solid var(--shop-line);
  background: #fff;
}

.shop-kicker {
  margin: 0 0 12px;
  color: var(--shop-purple);
  font-family: "Tomorrow", Arial, sans-serif !important;
  font-size: 0.78rem !important;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.shop-muted {
  color: var(--shop-muted);
}

.shop-price {
  font-family: "Tomorrow", Arial, sans-serif !important;
  font-size: 1.45rem !important;
  font-weight: 600;
}

.shop-field {
  display: grid;
  gap: 8px;
}

.shop-field label {
  font-weight: 600;
}

.shop-field input {
  width: 100%;
  min-height: 54px;
  padding: 12px 15px;
  border: 1px solid #a7a7a7;
  border-radius: 0;
  background: #fff;
  color: var(--shop-ink);
  outline: none;
}

.shop-field input:focus {
  border-color: var(--shop-purple);
  box-shadow: 0 0 0 2px rgba(108, 54, 136, 0.18);
}

.shop-field input:disabled {
  background: var(--shop-soft);
  cursor: wait;
}

.shop-button {
  min-height: 54px;
  padding: 14px 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--shop-purple);
  border-radius: 0;
  background: var(--shop-purple);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease;
}

.shop-button:hover:not(:disabled) {
  border-color: var(--shop-purple-dark);
  background: var(--shop-purple-dark);
  color: #fff;
}

.shop-button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.shop-button.secondary {
  border-color: var(--shop-ink);
  background: #fff;
  color: var(--shop-ink);
}

.shop-button.secondary:hover:not(:disabled) {
  border-color: var(--shop-ink);
  background: var(--shop-ink);
  color: #fff;
}

.shop-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.shop-error {
  margin: 0;
  padding: 12px 14px;
  border-left: 4px solid #a51d2d;
  background: #fff1f2;
  color: #7f1422;
}

.shop-footer {
  min-height: 270px;
  padding: 52px clamp(24px, 5vw, 64px) 30px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 40px;
  background: #202020;
  color: #fff;
}

.shop-footer img {
  width: 180px;
  max-height: 70px;
  object-fit: contain;
  object-position: left center;
}

.shop-footer p {
  max-width: 520px;
  margin: 16px 0 0;
  color: #ddd;
}

.shop-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

.shop-copyright {
  grid-column: 1 / -1;
  padding-top: 24px;
  border-top: 1px solid #444;
  font-size: 0.78rem !important;
}

@media (max-width: 720px) {
  .shop-header {
    min-height: auto;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }

  .shop-header nav {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .shop-footer {
    grid-template-columns: 1fr;
  }

  .shop-copyright {
    grid-column: auto;
  }

  .shop-actions,
  .shop-actions .shop-button {
    width: 100%;
  }
}
</style>
