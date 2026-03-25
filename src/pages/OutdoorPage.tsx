import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Tent, Sailboat, Mountain, Truck, Shuffle, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import campfireImg from "@/assets/campfire.jpg";

const formats = [
  {
    icon: Tent,
    title: "Стационарный лагерь",
    short: "Базовый лагерь с программой командных вызовов",
    full: "Лагерь с комфортным размещением, где команда проходит серию физических и интеллектуальных вызовов. Метафора: построение базы и операционная эффективность.",
    tasks: ["Командное взаимодействие", "Распределение ресурсов", "Коммуникация в условиях стресса"],
    format: "2–3 дня, 15–80 участников",
    fit: "Команды, которые хотят укрепить взаимодействие в комфортных условиях",
  },
  {
    icon: Sailboat,
    title: "Парусная регата / яхтинг",
    short: "Управление яхтой как модель управления бизнесом",
    full: "Команды управляют яхтами в реальной регате. Каждый элемент — от распределения ролей до навигации — является метафорой бизнес-процессов.",
    tasks: ["Лидерство в условиях неопределённости", "Быстрое принятие решений", "Доверие и делегирование"],
    format: "2–5 дней, 10–60 участников",
    fit: "Управленческие команды, нуждающиеся в развитии лидерских навыков",
  },
  {
    icon: Mountain,
    title: "Многодневный поход",
    short: "Командный поход как метафора долгосрочного проекта",
    full: "Многодневный маршрут с ежедневными бизнес-рефлексиями. Физические вызовы создают контекст для обсуждения командных процессов.",
    tasks: ["Стратегическое планирование", "Устойчивость и адаптивность", "Общее видение"],
    format: "3–7 дней, 10–30 участников",
    fit: "Команды топ-менеджеров, проходящие стратегическую трансформацию",
  },
  {
    icon: Truck,
    title: "Off-road экспедиция",
    short: "Экспедиция на внедорожниках с бизнес-задачами",
    full: "Команды преодолевают маршрут на внедорожниках, решая навигационные, логистические и командные задачи в условиях бездорожья.",
    tasks: ["Кризисное управление", "Координация между командами", "Ресурсное планирование"],
    format: "2–4 дня, 15–50 участников",
    fit: "Кросс-функциональные команды, работающие над сложными проектами",
  },
  {
    icon: Shuffle,
    title: "Гибридный формат",
    short: "Комбинация outdoor-активностей и бизнес-симуляций",
    full: "Индивидуально спроектированная программа, сочетающая элементы разных форматов: от кемпинга до парусного спорта, от бизнес-игр до рефлексивных сессий.",
    tasks: ["Комплексное развитие", "Адаптивность формата", "Максимальное вовлечение"],
    format: "2–5 дней, 10–100 участников",
    fit: "Компании с уникальными задачами, требующие индивидуального подхода",
  },
];

const OutdoorPage = () => {
  const [selectedFormat, setSelectedFormat] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <img src={campfireImg} alt="Outdoor" className="absolute inset-0 w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-nature-deep/70" />
        <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Outdoor-программы</p>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-primary-foreground mb-4 max-w-2xl">
            Природа как пространство для трансформации
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-base sm:text-lg leading-relaxed">
            Походы, регаты, экспедиции — не просто приключения, а мощные метафоры бизнес-вызовов с глубокой рефлексией и применимыми выводами.
          </p>
        </div>
      </section>

      {/* Format Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 hover-lift cursor-pointer group"
                onClick={() => setSelectedFormat(i)}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <f.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{f.short}</p>
                <span className="text-accent text-sm font-semibold inline-flex items-center">
                  Подробнее <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <HelpCircle className="text-amber" size={20} />
              <p className="text-amber font-semibold text-sm tracking-widest uppercase">Как выбрать формат</p>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
              Подберём оптимальный формат
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Какая задача стоит перед командой?", a: "Укрепление доверия → лагерь или поход. Развитие лидерства → регата. Кризисное управление → экспедиция." },
              { q: "Сколько участников?", a: "До 30 → поход или регата. 30–80 → лагерь или экспедиция. Больше → гибридный формат." },
              { q: "Сколько дней?", a: "2 дня → лагерь. 3–5 дней → регата, поход или экспедиция. Индивидуально → гибрид." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-lg p-5">
                <h4 className="font-heading font-bold text-sm text-foreground mb-1">{item.q}</h4>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-colors">
              Получить рекомендацию <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={selectedFormat !== null}
        onClose={() => setSelectedFormat(null)}
        title={selectedFormat !== null ? formats[selectedFormat].title : ""}
      >
        {selectedFormat !== null && (
          <div>
            <p className="text-foreground leading-relaxed mb-4">{formats[selectedFormat].full}</p>
            <h4 className="font-heading font-bold text-sm text-foreground mb-2 uppercase tracking-wider">Бизнес-задачи</h4>
            <ul className="space-y-1.5 mb-4">
              {formats[selectedFormat].tasks.map((task, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {task}
                </li>
              ))}
            </ul>
            <div className="p-3 rounded-lg bg-secondary text-sm text-muted-foreground mb-3">
              <span className="font-semibold text-foreground">Формат: </span>{formats[selectedFormat].format}
            </div>
            <div className="p-3 rounded-lg bg-secondary text-sm text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">Подходит для: </span>{formats[selectedFormat].fit}
            </div>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-colors">
              Заказать программу <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default OutdoorPage;
