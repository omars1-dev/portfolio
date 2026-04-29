import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navigation Component - Sticky Header with Mobile Menu
 * Design Philosophy: Clean, minimal navigation with smooth interactions
 * - Sticky positioning on scroll
 * - Mobile-responsive hamburger menu
 * - Smooth scroll to sections
 */

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              عم
            </div>
            <span className="font-bold text-slate-900 hidden sm:inline">عمر الزمر</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleScroll}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleScroll}
                className="block px-4 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
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
