import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Target, Zap } from "lucide-react";

/**
 * AboutSection Component - Professional About Me Section
 * Design Philosophy: Elegant, informative, with visual hierarchy
 * - Profile image with shadow and border
 * - Professional bio text
 * - Key highlights with icons
 * - Responsive layout
 */

interface AboutSectionProps {
  profileImage: string;
  universityLogo: string;
}

export function AboutSection({ profileImage, universityLogo }: AboutSectionProps) {
  const highlights = [
    {
      icon: Code2,
      title: "مطور ويب",
      description: "متخصص في بناء تطبيقات ويب حديثة وفعالة",
    },
    {
      icon: Lightbulb,
      title: "مبتكر",
      description: "أحب حل المشاكل المعقدة بطرق إبداعية",
    },
    {
      icon: Target,
      title: "موجه للنتائج",
      description: "ملتزم بتقديم حلول عالية الجودة",
    },
    {
      icon: Zap,
      title: "متعلم سريع",
      description: "دائماً أتابع أحدث التقنيات والأدوات",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          نبذة عني
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image and University Logo */}
          <div className="flex flex-col items-center gap-8 animate-fade-in-up">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt="عمر الزمر"
                className="relative w-64 h-80 rounded-2xl object-cover shadow-elegant-xl border-4 border-blue-100 dark:border-blue-900/30 hover:shadow-elegant-xl transition-all duration-300"
              />
            </div>

            {/* University Logo */}
            <Card className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-2 border-blue-100 dark:border-blue-900/30 hover:shadow-elegant transition-all duration-300 w-full max-w-xs">
              <div className="flex flex-col items-center gap-3">
                <img
                  src={universityLogo}
                  alt="جامعة إب"
                  className="w-24 h-24 object-contain"
                />
                <div className="text-center">
                  <p className="font-bold text-slate-900 dark:text-white">جامعة إب</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    كلية الحاسبات والعلوم التطبيقية
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Bio and Highlights */}
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {/* Bio Text */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                مرحباً، أنا عمر الزمر
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  أنا مهندس برمجيات شغوف بتطوير تطبيقات الويب الحديثة والأنظمة الإدارية الفعالة. خريج جامعة إب من كلية الحاسبات والعلوم التطبيقية بتخصص تقنية معلومات، حيث اكتسبت معرفة عميقة في أساسيات البرمجة وتطوير الويب.
                </p>
                <p>
                  أتمتع بخبرة عملية في استخدام تقنيات حديثة مثل React.js و Tailwind CSS و Laravel، مع قدرة قوية على حل المشاكل المعقدة وتطبيق أفضل الممارسات البرمجية. أؤمن بأهمية كتابة كود نظيف وسهل الصيانة يتبع معايير الصناعة.
                </p>
                <p>
                  أنا متحمس للتعلم المستمر والبقاء على اطلاع بأحدث التطورات التكنولوجية. أحب العمل في بيئات تعاونية وأستمتع بتبادل المعرفة والأفكار مع الفريق لتحقيق أهداف مشتركة.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, idx) => {
                const Icon = highlight.icon;
                return (
                  <Card
                    key={idx}
                    className="p-4 hover:shadow-elegant transition-all duration-300 dark:bg-slate-800 dark:border-slate-700 group"
                    style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white text-sm">
                          {highlight.title}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
