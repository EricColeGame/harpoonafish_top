import type { LucideIcon } from "lucide-react";

type NavigationItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG: NavigationItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
