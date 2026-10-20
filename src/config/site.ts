export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Harpoon a Fish Wiki",
  shortName: "Harpoon a Fish",
  logoText: "H",
  tagline: "Fish Index, Codes & Progression Guides",
  description: "Explore 1,800+ fish, harpoon upgrades, aquarium growth, sea monsters, and progression strategies in Harpoon a Fish on Roblox.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://harpoonafish.top",
  supportEmail: "support@harpoonafish.top",
  gameUrl: "https://www.roblox.com/games/113384248926706/Harpoon-a-Fish",
  heroVideoId: "Ld73nCcJ7z8", // How to Play Harpoon a Fish Roblox Full Guide (VendoPlus)
  social: {
    discord: "https://www.roblox.com/communities/876860520",
    youtube: "https://www.youtube.com/watch?v=Ld73nCcJ7z8",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
