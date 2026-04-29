import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

/**
 * ScrollToTop Component - Floating Button
 * Design Philosophy: Subtle, appears only when needed
 * - Shows when user scrolls down
 * - Smooth scroll back to top
 * - Smooth fade in/out animation
 */

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center animate-fade-in-up z-40"
          aria-label="العودة إلى الأعلى"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
