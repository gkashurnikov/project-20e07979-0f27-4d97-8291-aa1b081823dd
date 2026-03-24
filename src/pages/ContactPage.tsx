import { useState } from "react";
import { Send } from "lucide-react";
import Layout from "@/components/Layout";

const programOptions = [
  "Бизнес-игры и симуляции",
  "Плейбэк-воркшоп",
  "Outdoor: Стационарный лагерь",
  "Outdoor: Парусная регата",
  "Outdoor: Многодневный поход",
  "Outdoor: Off-road экспедиция",
  "Outdoor: Гибридный формат",
  "Не определились — нужна консультация",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    program: "",
    groupSize: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <section className="pt-32 pb-8 sm:pt-40 bg-nature-dark">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Контакты</p>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-primary-foreground mb-4">
            Обсудим вашу программу
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-base sm:text-lg leading-relaxed pb-8">
            Заполните форму или свяжитесь с нами напрямую. Мы ответим в течение одного рабочего дня.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {submitted ? (
                <div className="glass-card rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-accent" size={28} />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-2">Заявка отправлена!</h2>
                  <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Имя *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="email@company.ru"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Телефон</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Компания</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="Название компании"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Тип программы</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      >
                        <option value="">Выберите программу</option>
                        {programOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Размер группы</label>
                      <input
                        type="text"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="Примерное количество участников"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Описание задачи</label>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                      placeholder="Расскажите о задачах, которые хотите решить..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-colors"
                  >
                    Отправить заявку
                    <Send className="ml-2" size={16} />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-heading font-bold text-foreground mb-3">Контактная информация</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground block">Email</span>
                    info@transformplay.ru
                  </div>
                  <div>
                    <span className="font-medium text-foreground block">Телефон</span>
                    +7 (495) 123-45-67
                  </div>
                  <div>
                    <span className="font-medium text-foreground block">Адрес</span>
                    Москва, Россия
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">Время ответа</h3>
                <p className="text-muted-foreground text-sm">
                  Мы отвечаем на заявки в течение одного рабочего дня. Для срочных вопросов звоните по телефону.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
