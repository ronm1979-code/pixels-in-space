export const RSS_SOURCES = [
  {
    name: "IGN",
    url: "https://feeds.feedburner.com/ign/all",
    category: "news",
  },
  {
    name: "GameSpot",
    url: "https://www.gamespot.com/feeds/mashup/",
    category: "news",
  },
  {
    name: "PC Gamer",
    url: "https://www.pcgamer.com/rss/",
    category: "news",
  },
  {
    name: "Eurogamer",
    url: "https://www.eurogamer.net/feed",
    category: "news",
  },
  {
    name: "Rock Paper Shotgun",
    url: "https://www.rockpapershotgun.com/feed",
    category: "news",
  },
  {
    name: "Polygon",
    url: "https://www.polygon.com/rss/index.xml",
    category: "news",
  },
];

export const API_CONFIG = {
  steam: {
    newsUrl: "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2",
    reviewsUrl: "https://store.steampowered.com/appreviews",
    topGamesUrl:
      "https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1",
  },
  rawg: {
    baseUrl: "https://api.rawg.io/api",
  },
  igdb: {
    tokenUrl: "https://id.twitch.tv/oauth2/token",
    baseUrl: "https://api.igdb.com/v4",
  },
};
