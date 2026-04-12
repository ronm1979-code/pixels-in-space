import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.akamai.steamstatic.com" },
      { protocol: "https", hostname: "steamcdn-a.akamaihd.net" },
      { protocol: "https", hostname: "media.rawg.io" },
      { protocol: "https", hostname: "images.igdb.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "shared.akamai.steamstatic.com" },
      { protocol: "https", hostname: "store.steampowered.com" },
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "media.rockstargames.com" },
      { protocol: "https", hostname: "supercell.com" },
      { protocol: "https", hostname: "images.tynker.com" },
      { protocol: "https", hostname: "www.videogameschronicle.com" },
      { protocol: "https", hostname: "1000logos.net" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "gmedia.playstation.com" },
      { protocol: "https", hostname: "blog.playstation.com" },
      { protocol: "https", hostname: "www.serebii.net" },
      { protocol: "https", hostname: "monstervine.com" },
      { protocol: "https", hostname: "www.gematsu.com" },
      { protocol: "https", hostname: "assetsio.gnwcdn.com" },
      { protocol: "https", hostname: "images.nintendolife.com" },
      { protocol: "https", hostname: "assets.nintendo.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "cloudbase.gg" },
      { protocol: "https", hostname: "images.launchbox-app.com" },
      { protocol: "https", hostname: "worthplaying.com" },
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
    ],
  },
};

export default nextConfig;
