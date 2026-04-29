import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

/**
 * ContactForm Component - Elegant Contact Form
 * Design Philosophy: Modern, accessible, with smooth interactions
 * - Form validation
 * - Success feedback
 * - Smooth animations
 * - Dark mode support
 */

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }
    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "الموضوع مطلوب";
    }
    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - in production, you would send to a backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Save to localStorage as backup
      const messages = JSON.parse(
        localStorage.getItem("contactMessages") || "[]"
      );
      messages.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("contactMessages", JSON.stringify(messages));

      // Open email client
      const mailtoLink = `mailto:omaralzomor2030@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `الاسم: ${formData.name}\nالبريد: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="animate-fade-in-up">
        <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-4 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100">
              تم استقبال رسالتك بنجاح!
            </h3>
          </div>
          <p className="text-green-700 dark:text-green-200">
            شكراً لتواصلك معي. سأرد على رسالتك في أقرب وقت ممكن.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="lg:col-span-1 space-y-6">
        <div className="animate-fade-in-up">
          <div className="flex items-start gap-4 p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                البريد الإلكتروني
              </p>
              <a
                href="mailto:omaralzomor2030@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                omaralzomor2030@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-start gap-4 p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                الموقع
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                اليمن - إب
              </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="flex items-start gap-4 p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                متاح للعمل
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                عمل حر وتدريب تعاوني
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card className="p-8 shadow-elegant-lg animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                الاسم الكامل
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أدخل اسمك الكامل"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-elegant ${
                  errors.name
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.name && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-elegant ${
                  errors.email
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.email && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                الموضوع
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="موضوع الرسالة"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-elegant ${
                  errors.subject
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.subject && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                الرسالة
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="اكتب رسالتك هنا..."
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-elegant resize-none ${
                  errors.message
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.message && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-elegant-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  إرسال الرسالة
                </>
              )}
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}
