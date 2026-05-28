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
  Cpu,
  Gamepad2,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import profileImg from "@/assets/profile.png";
import universityLogoImg from "@/assets/university-logo.png";

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
      title: "تصنيف الأغذية بالذكاء الاصطناعي",
      description: "نموذج NLP متقدم يستخدم DistilBERT لتصنيف المنتجات الغذائية من قائمة المكونات بدقة 87%",
      shortDesc: "تصنيف ذكي للمنتجات الغذائية باستخدام NLP",
      technologies: ["Python", "NLP", "DistilBERT", "Hugging Face"],
      github: "https://github.com/omars1-dev/food-classification-nlp",
      demo: "https://huggingface.co/Omarrs11/food-classifier-model",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "نظام الاستنتاج المنظوري العصبي",
      description: "نموذج ذكاء اصطناعي يولد مناظر ثلاثية الأبعاد لجسم بشري من صورة واحدة باستخدام Conditioned U-Net",
      shortDesc: "توليد مناظر ثلاثية الأبعاد من صورة واحدة",
      technologies: ["Python", "Deep Learning", "Computer Vision", "Hugging Face"],
      github: "https://github.com/omars1-dev/Neural-Pose-Interpreter",
      demo: "https://huggingface.co/Omarrs11/Humanoid-model",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "حراج الإلكترونيات",
      description: "منصة إعلانات تفاعلية لبيع وشراء الأجهزة الإلكترونية المستعملة مع تخزين محلي للبيانات",
      shortDesc: "منصة إعلانات للأجهزة الإلكترونية المستعملة",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      github: "https://github.com/omars1-dev/Hrag",
      demo: "https://omars1-dev.github.io/Hrag/",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "لعبة Omar Al-Zomor",
      description: "لعبة ثنائية الأبعاد مشوقة بلغة C++ مع نظام تصادم متقدم وصعوبة متدرجة ديناميكياً",
      shortDesc: "لعبة ثنائية الأبعاد بـ C++ مع رسوميات متقدمة",
      technologies: ["C++", "BGI Graphics", "Collision Detection"],
      github: "https://github.com/omars1-dev/Omar-Alzomor-Game",
      demo: "#",
      icon: Gamepad2,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "تحليل نظام إدارة الفندق",
      description: "تحليل شامل لنظام فندق حقيقي يتضمن DFD و ERD واقتراحات تحسين الأداء والأمان",
      shortDesc: "تحليل نظام فندق مع مخططات احترافية",
      technologies: ["System Analysis", "DFD", "ERD", "Database Design"],
      github: "https://github.com/omars1-dev/hotel-management-system-analysis",
      demo: "#",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
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
                src={profileImg}
                alt="عمر الزمر"
                loading="eager"
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
            خريج جامعة إب - كلية الحاسبات والعلوم التطبيقية، متخصص في تقنية المعلومات مع خبرة عملية في تطوير تطبيقات الويب الحديثة والأنظمة الذكية
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
            <a href="https://github.com/omars1-dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 font-semibold">
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
        profileImage={profileImg}
        universityLogo={universityLogoImg}
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
                    src={universityLogoImg}
                    alt="جامعة إب"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">جامعة إب</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">كلية الحاسبات والعلوم التطبيقية</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  <strong>التخصص:</strong> بكالوريوس تقنية معلومات
                </p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <Card
                  key={idx}
                  className="overflow-hidden hover:shadow-elegant-xl transition-all duration-300 animate-fade-in-up dark:bg-slate-800 dark:border-slate-700 group flex flex-col h-full"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Header with Icon and Gradient */}
                  <div className={`bg-gradient-to-r ${project.color} p-6 flex items-center justify-between text-white group-hover:scale-105 transition-transform duration-300`}>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.shortDesc}</p>
                    </div>
                    <Icon className="w-12 h-12 opacity-80 flex-shrink-0" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed flex-grow line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium hover:shadow-elegant transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:shadow-elegant transition-all duration-300 hover:scale-105 text-sm font-semibold"
                      >
                        <Github className="w-4 h-4" />
                        كود
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm font-semibold"
                        >
                          <ExternalLink className="w-4 h-4" />
                          معاينة
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
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
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-1000 text-white py-16 border-t border-slate-800 dark:border-slate-700">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* About */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-3 text-white">عمر الزمر</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                مهندس برمجيات متخصص في تطوير تطبيقات الويب والذكاء الاصطناعي
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">الروابط السريعة</h3>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#hero" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">الرئيسية</a>
                <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">المشاريع</a>
                <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">المهارات</a>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">التواصل</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-white">تابعني</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://github.com/omars1-dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 text-slate-300 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/عمر-الزمر-8293ab314/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 text-slate-300 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/share/17D7ZNHbPq/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 text-slate-300 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:omaralzomor2030@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 text-slate-300 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

          {/* Bottom Footer */}
          <div className="text-center">
            <p className="text-slate-500 text-sm">
              © 2026 عمر الزمر. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
