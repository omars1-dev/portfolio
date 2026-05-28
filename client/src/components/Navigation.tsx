import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import React from "react";

/**
 * Navigation Component - Elegant Sticky Header
 * Design Philosophy: Modern minimalist with smooth scroll effects
 * - Elegant backdrop blur on scroll
 * - Animated underline on hover
 * - Mobile-responsive hamburger menu
 * - Dark mode support
 */

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "الرئيسية", href: "#hero" },
    { label: "التعليم", href: "#education" },
    { label: "المهارات", href: "#skills" },
    { label: "المشاريع", href: "#projects" },
    { label: "اللغات", href: "#languages" },
    { label: "التواصل", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 rtl ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50 shadow-elegant"
          : "bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 rtl">
          {/* Right Side - Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900 dark:text-white" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg hover:shadow-elegant transition-all duration-300 hover:scale-105">
              عم
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-slate-900 dark:text-white text-lg">عمر الزمر</span>
              <p className="text-xs text-slate-500 dark:text-slate-400">مهندس برمجيات</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleScroll}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-elegant font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleScroll}
                className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-elegant"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
