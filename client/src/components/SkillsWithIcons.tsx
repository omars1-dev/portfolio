import { Card } from "@/components/ui/card";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiCplusplus,
  SiPython,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiLaravel,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
} from "react-icons/si";
import { Code } from "lucide-react";

/**
 * SkillsWithIcons Component - Modern Skills Display with Icons
 * Design Philosophy: Clean, modern grid layout with hover effects
 * - Professional icons for each skill
 * - Smooth hover animations
 * - Organized by category
 * - Responsive design
 */

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    icon: React.ComponentType<any>;
    color: string;
  }>;
}

export function SkillsWithIcons() {
  const skillCategories: SkillCategory[] = [
    {
      title: "لغات البرمجة",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34C26" },
        { name: "CSS3", icon: SiCss, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "C#", icon: SiCplusplus, color: "#239120" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ],
    },
    {
      title: "أطر العمل والمكتبات",
      skills: [
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      ],
    },
    {
      title: "قواعد البيانات",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#00758F" },
        { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      ],
    },
    {
      title: "أدوات المطور",
      skills: [
        { name: "Git", icon: SiGit, color: "#F1502F" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "VS Code", icon: Code, color: "#007ACC" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="space-y-12">
        {skillCategories.map((category, categoryIdx) => (
          <div key={categoryIdx}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 rounded"></div>
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, skillIdx) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={skillIdx}
                    className="p-6 flex flex-col items-center justify-center text-center hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700 group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${skillIdx * 50}ms` }}
                  >
                    <div className="mb-3 p-4 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 group-hover:scale-110 transition-transform duration-300">
                      <div style={{ color: skill.color }}>
                        <Icon size={32} className="drop-shadow-lg" />
                      </div>
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">
                      {skill.name}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
