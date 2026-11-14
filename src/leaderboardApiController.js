function parseLeaderboardEntry(entry) {
  if (
    !entry ||
    !Number.isInteger(entry.rank) ||
    typeof entry.username !== "string" ||
    !Number.isInteger(entry.goldScore) ||
    typeof entry.achievedAt !== "string"
  ) {
    throw new Error("The leaderboard returned invalid data.");
  }

  return {
    rank: entry.rank,
    username: entry.username,
    goldScore: entry.goldScore,
    achievedAt: entry.achievedAt,
  };
}

const leaderboardApi = {
  async getFistLeaderboard() {
    const response = await fetch("/api/leaderboard/fist", {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error(`The leaderboard request failed (${response.status}).`);
    }

    const body = await response.json();
    if (
      !body ||
      typeof body.generatedAt !== "string" ||
      !Array.isArray(body.entries)
    ) {
      throw new Error("The leaderboard returned invalid data.");
    }

    return {
      generatedAt: body.generatedAt,
      entries: body.entries.slice(0, 10).map(parseLeaderboardEntry),
    };
  },
};

export default leaderboardApi;
