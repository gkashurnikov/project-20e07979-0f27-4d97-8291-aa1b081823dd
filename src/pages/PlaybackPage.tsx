import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Theater, Users, Clock, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import campfireImg from "@/assets/campfire.jpg";

const PlaybackPage = () => {
  const [theatreModalOpen, setTheatreModalOpen] = useState(false);

  const timeline = [
    { day: "День 1", blocks: [
      { time: "10:00–12:00", title: "Знакомство с форматом", desc: "Введение в плейбэк-театр, разминка, первые этюды" },
      { time: "12:00–13:30", title: "Истории команды", desc: "Участники делятся реальными рабочими ситуациями" },
      { time: "14:30–17:00", title: "Разыгрывание историй", desc: "Актёры и участники совместно проживают ключевые моменты" },
      { time: "17:00–18:00", title: "Рефлексия", desc: "Обсуждение инсайтов и паттернов, выявленных в историях" },
    ]},
    { day: "День 2", blocks: [
      { time: "10:00–12:00", title: "Углубление", desc: "Работа с конфликтами, скрытыми динамиками и эмоциями" },
      { time: "12:00–13:30", title: "Командные вызовы", desc: "Моделирование сложных рабочих ситуаций через театр" },
      { time: "14:30–16:30", title: "Трансформация", desc: "Переписывание историй: новые стратегии поведения" },
      { time: "16:30–18:00", title: "Интеграция", desc: "Формулирование командных договорённостей и плана действий" },
    ]},
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <img src={campfireImg} alt="Плейбэк" className="absolute inset-0 w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-nature-deep/70" />
        <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Плейбэк-театр</p>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-primary-foreground mb-4 max-w-2xl">
            Плейбэк-воркшоп для команд
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-base sm:text-lg leading-relaxed">
            Театральный формат, который превращает реальные истории команды в инструмент изменений. Не шоу — а глубокая работа с командной динамикой.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-amber font-semibold text-sm tracking-widest uppercase mb-3">Философия</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
                Что такое Плейбэк-театр?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Плейбэк-театр — это форма импровизационного театра, где истории зрителей разыгрываются актёрами прямо на сцене. В бизнес-контексте это мощный инструмент для работы с командной культурой, конфликтами и доверием.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Playback_Theatre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent text-sm font-semibold hover:underline"
              >
                Узнать больше о Playback Theatre
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Theater className="text-accent" size={20} />
                </div>
                <h3 className="font-heading font-bold text-foreground">Наш театр</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Профессиональная труппа с опытом работы в корпоративном формате. Более 150 сессий для компаний из разных отраслей.
              </p>
              <button
                onClick={() => setTheatreModalOpen(true)}
                className="text-accent text-sm font-semibold inline-flex items-center hover:underline"
              >
                Подробнее о труппе <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Программа</p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
              2-дневный воркшоп
            </h2>
          </div>
          <div className="space-y-8">
            {timeline.map((day, di) => (
              <div key={di}>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Clock className="text-amber" size={20} />
                  {day.day}
                </h3>
                <div className="space-y-3">
                  {day.blocks.map((block, bi) => (
                    <div key={bi} className="glass-card rounded-lg p-4 flex gap-4">
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap pt-0.5">{block.time}</span>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{block.title}</h4>
                        <p className="text-muted-foreground text-sm">{block.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nature-dark section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-primary-foreground mb-4">
            Организуйте плейбэк-воркшоп для своей команды
          </h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
            Мы адаптируем программу под ваши задачи и контекст компании.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors">
            Оставить заявку <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      {/* Theatre Modal */}
      <Modal isOpen={theatreModalOpen} onClose={() => setTheatreModalOpen(false)} title="Наша труппа">
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            Наша труппа — это профессиональные актёры и фасилитаторы с сертификацией в методе Playback Theatre. Каждый из них имеет опыт работы как в театре, так и в корпоративной среде.
          </p>
          <div className="space-y-3">
            {[
              { icon: Users, text: "6 профессиональных актёров-фасилитаторов" },
              { icon: Theater, text: "Более 150 корпоративных сессий" },
              { icon: MessageSquare, text: "Работа на русском и английском языках" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                <item.icon className="text-accent flex-shrink-0" size={18} />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-colors mt-2">
            Связаться с нами <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </Modal>
    </Layout>
  );
};

export default PlaybackPage;
