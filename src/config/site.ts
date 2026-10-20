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
  tagline: "Codes, Fish Index & Progression Guides",
  description: "Your ultimate guide to Harpoon a Fish on Roblox! Explore working codes, the fish index, harpoon upgrades, aquarium growth, sea monsters, and progression strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://harpoonafish.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://harpoonafish.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/113384248926706/Harpoon-a-Fish",
  heroVideoId: "Ld73nCcJ7z8", // How to Play Harpoon a Fish Roblox Full Guide
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
