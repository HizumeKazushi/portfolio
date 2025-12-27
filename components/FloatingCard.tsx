import { getIcon } from '@/lib/icons';

interface FloatingCardProps {
  title: string;
  subtitle: string;
  icon: string;
  color: 'orange' | 'pink';
  delay?: number;
}

export default function FloatingCard({ title, subtitle, icon, color, delay = 0 }: FloatingCardProps) {
  const colorClasses = {
    orange: 'bg-gradient-to-br from-orange to-orange-dark',
    pink: 'bg-gradient-to-br from-pink to-purple-500',
  };

  const IconComponent = getIcon(icon);

  return (
    <div
      className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-float group"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 ${colorClasses[color]} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 flex-shrink-0`}
        >
          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base md:text-lg text-black dark:text-white mb-1 break-words">{title}</h3>
          <p className="text-xs md:text-sm text-gray dark:text-gray-light leading-relaxed break-words">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
