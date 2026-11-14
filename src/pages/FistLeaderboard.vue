<template>
  <ShopPage>
    <article class="leaderboard-page">
      <header class="leaderboard-hero">
        <img
          src="/images/shop/FIST_Web_Icon.jpg"
          alt="Steve Jackson's F.I.S.T."
        >
        <div>
          <p class="shop-kicker">
            Castle Mammon
          </p>
          <h1>F.I.S.T. Leaderboard</h1>
          <p>
            The ten adventurers who escaped the Demon Prince's dungeon with
            the greatest hoard of gold.
          </p>
        </div>
      </header>

      <section
        class="leaderboard-panel shop-panel"
        aria-labelledby="leaderboard-heading"
      >
        <h2
          id="leaderboard-heading"
          class="visually-hidden"
        >
          Top ten adventurers
        </h2>

        <p
          v-if="loading"
          class="leaderboard-message"
          role="status"
        >
          Loading the leaderboard…
        </p>

        <div
          v-else-if="error"
          class="leaderboard-message"
          role="alert"
        >
          <p>{{ error }}</p>
          <button
            class="shop-button"
            type="button"
            @click="loadLeaderboard"
          >
            Try again
          </button>
        </div>

        <p
          v-else-if="entries.length === 0"
          class="leaderboard-message"
          role="status"
        >
          No scores have been reported yet. The first place is waiting for an
          adventurer.
        </p>

        <div
          v-else
          class="leaderboard-table-wrapper"
        >
          <table>
            <caption class="visually-hidden">
              F.I.S.T. players ranked by their highest gold score
            </caption>
            <thead>
              <tr>
                <th scope="col">
                  Rank
                </th>
                <th scope="col">
                  Adventurer
                </th>
                <th scope="col">
                  Gold
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="entry in entries"
                :key="entry.username"
              >
                <td class="rank">
                  {{ entry.rank }}
                </td>
                <td class="username">
                  {{ entry.username }}
                </td>
                <td class="gold">
                  {{ formatGold(entry.goldScore) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <p
        v-if="generatedAt && !loading && !error"
        class="updated-at shop-muted"
      >
        Updated {{ formatDate(generatedAt) }}. Only each player's best score is
        shown; earlier achievements break ties.
      </p>
    </article>
  </ShopPage>
</template>

<script>
import ShopPage from "@/shop/components/ShopPage.vue";
import leaderboardApi from "@/leaderboardApiController";

export default {
  name: "FistLeaderboard",
  components: { ShopPage },
  data() {
    return {
      entries: [],
      generatedAt: null,
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.loadLeaderboard();
  },
  methods: {
    async loadLeaderboard() {
      this.loading = true;
      this.error = null;
      try {
        const leaderboard = await leaderboardApi.getFistLeaderboard();
        this.entries = leaderboard.entries;
        this.generatedAt = leaderboard.generatedAt;
      } catch (error) {
        console.error("Unable to load F.I.S.T. leaderboard", error);
        this.error = "The leaderboard could not be loaded.";
      } finally {
        this.loading = false;
      }
    },
    formatGold(score) {
      return new Intl.NumberFormat().format(score);
    },
    formatDate(timestamp) {
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(timestamp));
    },
  },
};
</script>

<style scoped>
.leaderboard-page {
  display: grid;
  gap: clamp(28px, 5vw, 52px);
}

.leaderboard-hero {
  display: grid;
  grid-template-columns: minmax(180px, 320px) minmax(0, 1fr);
  align-items: center;
  gap: clamp(28px, 6vw, 72px);
}

.leaderboard-hero img {
  width: 100%;
  border: 1px solid #d4d4d4;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.16);
}

.leaderboard-hero p:last-child {
  max-width: 660px;
  margin-bottom: 0;
  color: #444;
}

.leaderboard-panel {
  overflow: hidden;
  background:
    linear-gradient(rgba(255, 253, 246, 0.94), rgba(255, 253, 246, 0.94)),
    url("../assets/pergament_background.jpg") center / cover;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.1);
}

.leaderboard-message {
  margin: 0;
  padding: clamp(44px, 8vw, 88px) 24px;
  text-align: center;
}

.leaderboard-message p {
  text-align: center;
}

.leaderboard-table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-family: "Poppins", Arial, sans-serif;
  font-variant-numeric: tabular-nums;
}

th,
td {
  padding: 18px clamp(16px, 4vw, 42px);
  border-bottom: 1px solid rgba(81, 34, 103, 0.22);
  text-align: left;
}

th {
  background: #512267;
  color: #fff;
  font-family: "Tomorrow", Arial, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

tbody tr:last-child td {
  border-bottom: 0;
}

tbody tr:nth-child(even) {
  background: rgba(108, 54, 136, 0.06);
}

.rank {
  width: 110px;
  color: #6c3688;
  font-family: "Tomorrow", Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
}

.username {
  overflow-wrap: anywhere;
  font-weight: 600;
}

.gold {
  width: 160px;
  text-align: right;
  font-family: "Tomorrow", Arial, sans-serif;
  font-weight: 600;
}

th:last-child {
  text-align: right;
}

.updated-at {
  margin: -28px 0 0;
  text-align: center;
  font-size: 0.8rem !important;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 720px) {
  .leaderboard-hero {
    grid-template-columns: 1fr;
  }

  .leaderboard-hero img {
    max-width: 280px;
    margin: 0 auto;
  }

  th,
  td {
    padding: 15px 12px;
  }

  .rank {
    width: 70px;
  }

  .gold {
    width: 100px;
  }
}
</style>
