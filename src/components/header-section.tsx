'use client';

import { useEffect, useState, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';

const navLinks = [
  { href: '#features', label: 'Funcionalidades' },
  { href: '#pricing', label: 'Preços' },
  { href: '#cta', label: 'Contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Altura do header (h-20 = 5rem = 80px)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        'backdrop-saturate-150',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Nome */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3">
          <Image
            src="/logo_1.png"
            alt="ShapeZap IA Logo"
            width={500}
            height={500}
            className="h-40 w-40 rounded-full object-cover"
          />
        </Link>

        {/* Navegação */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative group"
            >
              <span
                className="
                  text-sm font-medium text-foreground/80 
                  transition-colors duration-300 group-hover:text-primary
                "
              >
                {link.label}
              </span>

              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0 bg-primary 
                  transition-all duration-300 group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
