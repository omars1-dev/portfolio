import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { SkillBar } from "@/components/SkillBar";
import { ScrollToTop } from "@/components/ScrollToTop";
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
} from "lucide-react";

/**
 * Design Philosophy: Modern Minimalism with Bold Accents
 * - Clean white background with deep blue primary color (#1E40AF)
 * - Professional typography using Poppins for headings, Inter for body
 * - Subtle animations and hover effects
 * - Responsive grid layouts
 */

export default function Home() {
  const skills = [
    { category: "لغات البرمجة", items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 80 },
      { name: "C#", level: 75 },
      { name: "Python", level: 70 },
    ]},
    { category: "أطر العمل والمكتبات", items: [
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 80 },
      { name: "React.js", level: 70 },
      { name: "Laravel", level: 65 },
    ]},
    { category: "قواعد البيانات", items: [
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 70 },
    ]},
    { category: "أدوات المطور", items: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 50 },
      { name: "Figma", level: 75 },
    ]},
  ];

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
    <div className="min-h-screen bg-white">
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
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-4 border-blue-600 flex items-center justify-center">
              <span className="text-5xl">👨‍💻</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            عمر الزمر
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            مهندس برمجيات
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            خريج جامعة إب - كلية العلوم والحاسوب، متخصص في تقنية المعلومات مع خبرة عملية في تطوير تطبيقات الويب الحديثة والأنظمة الإدارية
          </p>
          
          <div className="flex items-center justify-center gap-2 text-slate-600 mb-8">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-lg">اليمن - إب</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:omaralzomor2030@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Mail className="w-5 h-5" />
              تواصل معي
            </a>
            <a href="https://github.com/omaralzomor2030-eng" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          
          <div className="flex justify-center gap-6 text-slate-600">
            <a href="https://www.linkedin.com/in/عمر-الزمر-8293ab314/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/share/17D7ZNHbPq/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="mailto:omaralzomor2030@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">التعليم</h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900">جامعة إب</h3>
                  <p className="text-blue-600 font-semibold">كلية العلوم والحاسوب</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-600 mb-2">
                  <strong>التخصص:</strong> بكالوريوس تقنية معلومات
                </p>
                <p className="text-slate-600">
                  <strong>سنة التخرج المتوقعة:</strong> 2027
                </p>
              </div>
              
              <div>
                <p className="text-slate-900 font-semibold mb-3">المقررات الدراسية الرئيسية:</p>
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
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
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

      {/* Skills Section */}
      <section id="skills"
        className="py-20 bg-white relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663133877285/6Rt5daCjd2PJWwges7CEeQ/skills-bg-HqfdwiyM8x5MDEUaJKLCHj.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">المهارات التقنية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600 rounded"></div>
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">المهارات الشخصية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={idx}
                    className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="font-semibold text-slate-900">{skill.name}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects"
        className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663133877285/6Rt5daCjd2PJWwges7CEeQ/projects-bg-ir6Z9CpWYave8hRk5R4Kw2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">المشاريع</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      كود
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
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
      <section id="languages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">اللغات</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {languages.map((lang, idx) => (
              <Card
                key={idx}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{lang.flag}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{lang.name}</h3>
                <p className="text-slate-600">{lang.level}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">تواصل معي</h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 animate-fade-in-up">
              <p className="text-slate-600 text-center mb-8 text-lg">
                أنا متاح للعمل الحر والتدريب التعاوني. لا تتردد في التواصل معي لأي استفسار أو فرصة عمل
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:omaralzomor2030@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">البريد الإلكتروني</p>
                    <p className="text-slate-600">omaralzomor2030@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/omaralzomor2030-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Github className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">GitHub</p>
                    <p className="text-slate-600">omaralzomor2030-eng</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/عمر-الزمر-8293ab314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">LinkedIn</p>
                    <p className="text-slate-600">عمر الزمر</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 عمر الزمر. جميع الحقوق محفوظة | تم بناء هذا الموقع باستخدام React و Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
