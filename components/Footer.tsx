import { portfolioData } from '@/data/portfolio';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-[#0d0d0d] text-white py-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-light">{portfolioData.footer.text}</div>

          {/* Links */}
          <div className="flex gap-8">
            {portfolioData.footer.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-light hover:text-orange transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className="flex items-center gap-2 text-gray-light hover:text-orange transition-colors duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
