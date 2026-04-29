import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

/**
 * SkillBar Component - Animated Progress Bar
 * Design Philosophy: Smooth animation on scroll into view
 * - Animates from 0 to target level when element becomes visible
 * - Uses Intersection Observer for performance
 */

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let currentLevel = 0;
    const increment = level / 30;
    const timer = setInterval(() => {
      currentLevel += increment;
      if (currentLevel >= level) {
        setAnimatedLevel(level);
        clearInterval(timer);
      } else {
        setAnimatedLevel(Math.round(currentLevel));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isVisible, level]);

  return (
    <div ref={ref} style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-slate-700">{name}</span>
        <span className="text-sm text-blue-600 font-semibold">{animatedLevel}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500"
          style={{ width: `${animatedLevel}%` }}
        ></div>
      </div>
    </div>
  );
}
