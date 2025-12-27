import {
  Code2,
  Sparkles,
  Palette,
  Rocket,
  Zap,
  Heart,
  Star,
  Globe,
  Layers,
  Box,
  Terminal,
  Database,
  Server,
  Cloud,
  Cpu,
  Smartphone,
  Monitor,
  Laptop,
  Mail,
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Instagram,
  Youtube,
  Facebook,
  User,
  type LucideIcon,
} from 'lucide-react';

// Available icons mapping for use in portfolio.js
export const iconMap: Record<string, LucideIcon> = {
  // General icons
  code: Code2,
  sparkles: Sparkles,
  design: Palette,
  palette: Palette,
  rocket: Rocket,
  zap: Zap,
  heart: Heart,
  star: Star,
  globe: Globe,
  layers: Layers,
  box: Box,

  // Tech icons
  terminal: Terminal,
  database: Database,
  server: Server,
  cloud: Cloud,
  cpu: Cpu,

  // Device icons
  smartphone: Smartphone,
  monitor: Monitor,
  laptop: Laptop,

  // Contact icons
  mail: Mail,

  // Social icons
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  dribbble: Dribbble,
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,

  // Profile icons
  user: User,
};

// Get icon component by name
export function getIcon(name: string): LucideIcon {
  return iconMap[name.toLowerCase()] || Sparkles;
}

// Available icon names for reference
export const availableIcons = Object.keys(iconMap);
