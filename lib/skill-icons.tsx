import { Code2, Github, type LucideIcon } from 'lucide-react';
import type { SVGProps } from 'react';

type SkillIcon = LucideIcon | ((props: SVGProps<SVGSVGElement>) => React.ReactElement);

type SkillIconConfig = {
  icon: SkillIcon;
  className: string;
};

function GoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M2.5 11h9M1 16h8.5M3.5 21h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <text
        x="13.5"
        y="21"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="13"
        fontWeight="800"
        letterSpacing="-1"
      >
        Go
      </text>
    </svg>
  );
}

function MySqlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 9.5c0-2.2 4.5-4 10-4s10 1.8 10 4v13c0 2.2-4.5 4-10 4s-10-1.8-10-4v-13Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M6 9.5c0 2.2 4.5 4 10 4s10-1.8 10-4M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="currentColor" strokeWidth="2" />
      <text x="9.5" y="25" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="7" fontWeight="800">
        My
      </text>
    </svg>
  );
}

function RedisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M5 10.5 16 5l11 5.5L16 16 5 10.5Z" fill="currentColor" opacity="0.95" />
      <path d="M5 16.5 16 22l11-5.5M5 21.5 16 27l11-5.5" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="m13.2 8.6 5.8 2.9-5.8 2.9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DockerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M5 18h19.5c2.6 0 4.3-1.1 5.5-3.1.1 5.9-4 10.1-11.4 10.1H12.5C8 25 5.3 22.6 5 18Z" fill="currentColor" />
      <path d="M7 12h4v4H7v-4Zm5 0h4v4h-4v-4Zm5 0h4v4h-4v-4Zm-5-5h4v4h-4V7Zm5 0h4v4h-4V7Zm5 5h4v4h-4v-4Z" fill="currentColor" />
      <path d="M25 14.5c1-1.3 2.7-1.7 4-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="6" y="6" width="20" height="20" rx="3" transform="rotate(45 16 16)" fill="currentColor" />
      <path d="M12 11.5v8.2M12 11.5l7.8 7.8M12 11.5h6.5" stroke="white" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="11.5" r="2" fill="white" />
      <circle cx="12" cy="20.5" r="2" fill="white" />
      <circle cx="20" cy="19.5" r="2" fill="white" />
    </svg>
  );
}

function NotionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M7 5.5 22.5 4 26 7.2v19.3L10.5 28 6 24.7V8.2l1-2.7Z" fill="currentColor" />
      <path d="M10.5 9.3v16L24 24V8L10.5 9.3Z" fill="white" />
      <path d="M12.8 21.8V11h2.4l5.2 7.8V11h2.1v10.8h-2.2l-5.4-8v8h-2.1Z" fill="currentColor" />
    </svg>
  );
}

const defaultIcon: SkillIconConfig = {
  icon: Code2,
  className: 'bg-gray/10 text-gray dark:bg-gray-light/10 dark:text-gray-light',
};

const skillIconMap: Record<string, SkillIconConfig> = {
  docker: {
    icon: DockerIcon,
    className: 'bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300',
  },
  git: {
    icon: GitIcon,
    className: 'bg-orange/10 text-orange dark:bg-orange/15 dark:text-orange',
  },
  github: {
    icon: Github,
    className: 'bg-black/10 text-black dark:bg-white/10 dark:text-white',
  },
  go: {
    icon: GoIcon,
    className: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300',
  },
  mysql: {
    icon: MySqlIcon,
    className: 'bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300',
  },
  notion: {
    icon: NotionIcon,
    className: 'bg-zinc-500/10 text-zinc-700 dark:bg-zinc-300/10 dark:text-zinc-200',
  },
  redis: {
    icon: RedisIcon,
    className: 'bg-red-500/10 text-red-600 dark:bg-red-400/10 dark:text-red-300',
  },
};

export function getSkillIconConfig(skillName: string): SkillIconConfig {
  return skillIconMap[skillName.toLowerCase()] || defaultIcon;
}
