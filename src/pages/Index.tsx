import { Link } from "react-router-dom";
import { Target, Users, Compass, ArrowRight, Lightbulb, TrendingUp, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-mountains.jpg";
import businessGameImg from "@/assets/business-game.jpg";
import sailingImg from "@/assets/sailing.jpg";
import campfireImg from "@/assets/campfire.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Горы в тумане"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-nature-deep/60" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-up">
          <p className="text-accent font-semibold text-sm sm:text-base tracking-widest uppercase mb-4">
            Бизнес-трансформация через опыт
          </p>
          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Игры и симуляции —{" "}
            <span className="text-accent">инструменты</span>{" "}
            реальных изменений
          </h1>
          <p className="text-primary-foreground/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Каждый формат имеет измеримый бизнес-результат, который команда может применить сразу после сессии. Это не развлечение — это серьёзная работа.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-colors"
            >
              Обсудить программу
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/games"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Узнать о форматах
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Наш подход</p>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-foreground mb-4">
              Почему игра — это серьёзный бизнес-инструмент
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы используем игровые механики, симуляции и иммерсивные форматы не для развлечения, а для решения конкретных бизнес-задач. Каждая программа имеет чёткие KPI и применимые результаты.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, title: "Осознание через опыт", desc: "Участники проживают ситуации, а не слушают лекции. Это создаёт глубокие инсайты и готовность к изменениям." },
              { icon: TrendingUp, title: "Измеримый результат", desc: "Каждая программа привязана к бизнес-метрикам: эффективность команды, скорость принятия решений, качество коммуникации." },
              { icon: Shield, title: "Безопасная среда", desc: "Игровой формат позволяет экспериментировать без рисков. Ошибки становятся источником обучения, а не потерь." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-amber font-semibold text-sm tracking-widest uppercase mb-3">Для кого</p>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-foreground">
              Кому подходят наши программы
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Команды", desc: "Для команд от 8 до 200 человек, которым нужно выстроить взаимодействие, доверие и общее видение." },
              { icon: Target, title: "Лидеры", desc: "Для руководителей, которые хотят развить управленческие навыки в условиях, приближенных к реальным вызовам." },
              { icon: Compass, title: "Корпорации", desc: "Для компаний, проходящих трансформацию: слияния, изменение культуры, выход на новые рынки." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-4">
                  <item.icon className="text-amber" size={24} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Tiles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Форматы</p>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-foreground">
              Выберите свой формат трансформации
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: businessGameImg, title: "Бизнес-игры и симуляции", desc: "Стратегические игры для отработки реальных бизнес-сценариев", to: "/games" },
              { img: campfireImg, title: "Плейбэк-театр", desc: "Театральный формат для глубокой работы с командной динамикой", to: "/playback" },
              { img: sailingImg, title: "Outdoor-программы", desc: "Походы, регаты и экспедиции как метафора бизнес-вызовов", to: "/outdoor" },
            ].map((item, i) => (
              <Link key={i} to={item.to} className="group relative rounded-xl overflow-hidden hover-lift aspect-[4/3]">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={1280} height={720} />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-deep/90 via-nature-deep/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-bold text-lg text-primary-foreground mb-1">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                  <span className="inline-flex items-center text-accent text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                    Подробнее <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div className="bg-nature-dark section-padding">
          <div className="container-wide text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-primary-foreground mb-4">
              Готовы к трансформации?
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Расскажите о своих задачах — мы предложим оптимальный формат программы для вашей команды.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors"
            >
              Обсудить программу
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
