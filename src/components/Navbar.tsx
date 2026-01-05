'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out " + (isHidden ? "-translate-y-full" : "translate-y-0") + " " + (isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm" : "bg-transparent")}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 gradient-violet group-hover:scale-110 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className={"text-xl font-bold transition-colors duration-300 " + (isScrolled ? "text-gray-900" : "text-white")}>
                Reflect
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={"relative font-medium transition-colors duration-200 " + (pathname === link.href ? "text-violet-600" : (isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-100 hover:text-white"))}
                >
                  {link.label}
                  <span className={"absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 ease-out " + (pathname === link.href ? "scale-x-100" : "scale-x-0 hover:scale-x-100")} />
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/signin" className={"font-medium transition-colors duration-200 " + (isScrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-100 hover:text-white")}>
                Sign in
              </Link>
              <Link href="/signup" className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 transition-all duration-200">
                Get Started
              </Link>
            </div>

            <button className={"md:hidden p-2 rounded-lg transition-colors duration-200 " + (isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10")} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={"fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out " + (isMobileMenuOpen ? "bg-black/50 backdrop-blur-sm opacity-100 pointer-events-auto" : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none")} onClick={() => setIsMobileMenuOpen(false)} />

      <div className={"fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 md:hidden bg-white shadow-2xl transition-transform duration-300 ease-out " + (isMobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4 flex-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={"text-lg font-medium transition-all duration-200 " + (pathname === link.href ? "text-violet-600 pl-4" : "text-gray-700 hover:text-violet-600 hover:pl-4")}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 pt-6 border-t border-gray-100">
            <Link href="/signin" className="block w-full text-center py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
              Sign in
            </Link>
            <Link href="/signup" className="block w-full text-center py-3 px-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
