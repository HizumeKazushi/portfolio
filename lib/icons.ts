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
  type LucideProps,
  type LucideIcon,
} from 'lucide-react';
import { createElement, forwardRef } from 'react';

const SpotifyIcon = forwardRef<SVGSVGElement, LucideProps>(function SpotifyIcon(props, ref) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props,
    },
    createElement('circle', { cx: 12, cy: 12, r: 9 }),
    createElement('path', { d: 'M7.5 9.25c3.7-1.25 6.95-.9 9 1' }),
    createElement('path', { d: 'M8.2 12.15c2.85-.8 5.35-.55 7.05.75' }),
    createElement('path', { d: 'M8.95 14.95c2-.45 3.75-.28 5.05.48' }),
  );
});

const XLogoIcon = forwardRef<SVGSVGElement, LucideProps>(function XLogoIcon(props, ref) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1200 1227',
      fill: 'currentColor',
      ...props,
    },
    createElement('path', {
      d: 'M714.163 519.284 1160.89 0H1055.06L667.137 450.887 357.328 0H0L468.492 681.821 0 1226.37H105.866L515.191 750.218 842.672 1226.37H1200L714.137 519.284H714.163ZM568.876 688.382 521.4 620.49 143.69 80.473h162.62L611.148 516.569 658.624 584.461 1054.48 1150.7H891.86L568.876 688.408V688.382Z',
    }),
  );
});

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
  x: XLogoIcon,
  linkedin: Linkedin,
  dribbble: Dribbble,
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  spotify: SpotifyIcon,

  // Profile icons
  user: User,
};

// Get icon component by name
export function getIcon(name: string): LucideIcon {
  return iconMap[name.toLowerCase()] || Sparkles;
}

// Available icon names for reference
export const availableIcons = Object.keys(iconMap);
