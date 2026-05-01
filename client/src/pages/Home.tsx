import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { SkillBar } from "@/components/SkillBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ContactForm } from "@/components/ContactForm";
import { AboutSection } from "@/components/AboutSection";
import { SkillsWithIcons } from "@/components/SkillsWithIcons";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Palette,
  Users,
  Clock,
  Zap,
  Facebook,
  ArrowDown,
} from "lucide-react";

/**
 * Design Philosophy: Modern Minimalism with Elegant Touches
 * - Clean white background with deep blue primary color (#1E40AF)
 * - Professional typography using Poppins for headings, Inter for body
 * - Elegant animations and hover effects with backdrop blur
 * - Responsive grid layouts with smooth transitions
 * - Dark mode support throughout
 */

export default function Home() {
  const projects = [
    {
      title: "نظام إدارة المهام",
      description: "تطبيق ويب لإدارة المهام اليومية مع نظام تسجيل دخول كامل",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      github: "#",
      demo: "#",
    },
    {
      title: "مدونة تقنية",
      description: "منصة تدوين بسيطة تدعم نظام CRUD للمقالات",
      technologies: ["Laravel", "Tailwind CSS", "SQLite"],
      github: "#",
      demo: "#",
    },
    {
      title: "متجر إلكتروني مصغر",
      description: "واجهة متجر إلكتروني مع سلة مشتريات باستخدام JavaScript",
      technologies: ["React.js", "Context API", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "لوحة تحكم إدارية",
      description: "تصميم وبرمجة واجهة خلفية لإدارة المحتوى",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      github: "#",
      demo: "#",
    },
  ];

  const languages = [
    { name: "العربية", level: "اللغة الأم", flag: "🇾🇪" },
    { name: "الإنجليزية", level: "B2/C1 - متوسط إلى متقدم", flag: "🇬🇧" },
  ];

  const softSkills = [
    { name: "حل المشكلات", icon: Zap },
    { name: "العمل الجماعي", icon: Users },
    { name: "إدارة الوقت", icon: Clock },
    { name: "التكيف السريع", icon: Code2 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663133877285/6Rt5daCjd2PJWwges7CEeQ/hero-bg-1-adTUgTrtGXEey6aUzgCecn.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 border-4 border-blue-600 flex items-center justify-center shadow-elegant-lg animate-float overflow-hidden">
              <img
                src="/manus-storage/1000137522_623d01ba.png"
                alt="عمر الزمر"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            عمر الزمر
          </h1>
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent font-semibold mb-6">
            مهندس برمجيات
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            خريج جامعة إب - كلية العلوم والحاسوب، متخصص في تقنية المعلومات مع خبرة عملية في تطوير تطبيقات الويب الحديثة والأنظمة الإدارية
          </p>
          
          <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 mb-8">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-lg">اليمن - إب</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:omaralzomor2030@gmail.com" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 font-semibold">
              <Mail className="w-5 h-5" />
              تواصل معي
            </a>
            <a href="https://github.com/omaralzomor2030-eng" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 font-semibold">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          
          <div className="flex justify-center gap-6 text-slate-600 dark:text-slate-400">
            <a href="https://www.linkedin.com/in/عمر-الزمر-8293ab314/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-elegant hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/share/17D7ZNHbPq/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-elegant hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="mailto:omaralzomor2030@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-elegant hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection
        profileImage="/manus-storage/1000137522_623d01ba.png"
        universityLogo="/manus-storage/1000137523_9441093c.png"
      />

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-white dark:from-slate-900 to-slate-50 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">التعليم</h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-l-4 border-l-blue-600 hover:shadow-elegant-lg transition-all duration-300 animate-fade-in-up dark:bg-slate-800 dark:border-l-blue-400">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src="/manus-storage/1000137523_9441093c.png"
                    alt="جامعة إب"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">جامعة إب</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">كلية العلوم والحاسوب</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  <strong>التخصص:</strong> بكالوريوس تقنية معلومات
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>سنة التخرج المتوقعة:</strong> 2027
                </p>
              </div>
              
              <div>
                <p className="text-slate-900 dark:text-white font-semibold mb-3">المقررات الدراسية الرئيسية:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "الذكاء الاصطناعي",
                    "تنقيب البيانات",
                    "هياكل البيانات",
                    "قواعد البيانات",
                    "الرسم بالحاسب",
                    "الشبكات",
                    "برمجة الويب",
                    "C# متقدم",
                    "تحليل وتصميم النظم",
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:shadow-elegant transition-all duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section with Icons */}
      <section
        id="skills"
        className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663133877285/6Rt5daCjd2PJWwges7CEeQ/skills-bg-HqfdwiyM8x5MDEUaJKLCHj.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">المهارات التقنية</h2>
          
          <SkillsWithIcons />

          {/* Soft Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">المهارات الشخصية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={idx}
                    className="p-6 text-center hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-300 animate-scale-in dark:bg-slate-800 dark:border-slate-700"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white">{skill.name}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-slate-50 dark:from-slate-800 to-white dark:to-slate-900 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663133877285/6Rt5daCjd2PJWwges7CEeQ/projects-bg-ir6Z9CpWYave8hRk5R4Kw2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">المشاريع</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-elegant-xl transition-all duration-300 animate-fade-in-up dark:bg-slate-800 dark:border-slate-700 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 group-hover:h-2 transition-all duration-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:shadow-elegant transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:shadow-elegant transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      كود
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      معاينة
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">اللغات</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {languages.map((lang, idx) => (
              <Card
                key={idx}
                className="p-6 text-center hover:shadow-elegant-lg transition-all duration-300 animate-fade-in-up dark:bg-slate-800 dark:border-slate-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4 animate-float">{lang.flag}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{lang.name}</h3>
                <p className="text-slate-600 dark:text-slate-300">{lang.level}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 dark:from-slate-800 to-white dark:to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">تواصل معي</h2>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 عمر الزمر. جميع الحقوق محفوظة | تم بناء هذا الموقع باستخدام React و Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
