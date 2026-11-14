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
  async getFistLeaderboard(offset = 0) {
    const query = offset > 0 ? `?offset=${offset}` : "";
    const response = await fetch(`/api/leaderboard/fist${query}`, {
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
      hasMore: body.hasMore === true,
      nextOffset: Number.isInteger(body.nextOffset) ? body.nextOffset : null,
    };
  },
};

export default leaderboardApi;
