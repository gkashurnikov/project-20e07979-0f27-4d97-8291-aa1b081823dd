import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Puzzle, Brain, Target, Users, BarChart3, Zap, Lightbulb, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import businessGameImg from "@/assets/business-game.jpg";

const games = [
  {
    icon: Puzzle,
    title: "Стратегическая симуляция",
    short: "Моделирование рыночной конкуренции и стратегического планирования",
    full: "Участники управляют виртуальными компаниями в конкурентной среде, принимая решения о продуктах, ценообразовании, инвестициях и маркетинге.",
    tasks: ["Стратегическое мышление", "Принятие решений в условиях неопределённости", "Межфункциональное взаимодействие"],
    format: "1–2 дня, 20–100 участников",
  },
  {
    icon: Brain,
    title: "Переговорная игра",
    short: "Отработка навыков ведения сложных переговоров",
    full: "Многосторонние переговоры с противоречивыми интересами сторон. Участники учатся находить win-win решения в условиях давления.",
    tasks: ["Навыки переговоров", "Управление конфликтами", "Эмоциональный интеллект"],
    format: "4–8 часов, 12–40 участников",
  },
  {
    icon: Target,
    title: "Игра на принятие решений",
    short: "Тренировка скорости и качества управленческих решений",
    full: "Серия бизнес-кейсов с ограниченным временем на анализ и принятие решений. Моделирование реальных управленческих дилемм.",
    tasks: ["Скорость принятия решений", "Аналитическое мышление", "Работа с данными"],
    format: "4–6 часов, 15–50 участников",
  },
  {
    icon: Users,
    title: "Командная синергия",
    short: "Выявление и усиление командных ролей и взаимодействия",
    full: "Игра, в которой успех возможен только при эффективном распределении ролей и координации действий всех участников.",
    tasks: ["Командное взаимодействие", "Распределение ролей", "Доверие в команде"],
    format: "1 день, 10–60 участников",
  },
  {
    icon: BarChart3,
    title: "Финансовая грамотность",
    short: "Понимание финансовых потоков и P&L через игровой формат",
    full: "Участники управляют бюджетом компании, учатся читать финансовую отчётность и принимать инвестиционные решения.",
    tasks: ["Финансовое планирование", "Понимание P&L", "Инвестиционные решения"],
    format: "1 день, 15–40 участников",
  },
  {
    icon: Zap,
    title: "Инновационный спринт",
    short: "Генерация и быстрое прототипирование бизнес-идей",
    full: "Игровой формат Design Sprint, в котором команды за ограниченное время проходят путь от идеи до прототипа решения.",
    tasks: ["Креативное мышление", "Быстрое прототипирование", "Презентация идей"],
    format: "1–2 дня, 15–60 участников",
  },
  {
    icon: Lightbulb,
    title: "Лидерский вызов",
    short: "Развитие лидерских компетенций через экстремальные сценарии",
    full: "Серия вызовов, требующих от участников проявления различных стилей лидерства в меняющихся условиях.",
    tasks: ["Ситуативное лидерство", "Мотивация команды", "Принятие ответственности"],
    format: "1–2 дня, 10–30 участников",
  },
  {
    icon: Layers,
    title: "Трансформация культуры",
    short: "Диагностика и изменение корпоративной культуры",
    full: "Игра-диагностика, которая визуализирует текущую культуру компании и помогает спроектировать желаемую.",
    tasks: ["Диагностика культуры", "Ценности и поведение", "Управление изменениями"],
    format: "1–2 дня, 20–80 участников",
  },
];

const GamesPage = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <img src={businessGameImg} alt="Бизнес-игры" className="absolute inset-0 w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-nature-deep/70" />
        <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Бизнес-игры</p>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-primary-foreground mb-4 max-w-2xl">
            Игры и симуляции для бизнеса
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-base sm:text-lg leading-relaxed">
            Каждая игра — это модель реальной бизнес-ситуации. Участники получают опыт, который можно применить на следующий день в офисе.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 hover-lift cursor-pointer group"
                onClick={() => setSelectedGame(i)}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <game.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{game.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{game.short}</p>
                <span className="text-accent text-sm font-semibold inline-flex items-center">
                  Подробнее <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={selectedGame !== null}
        onClose={() => setSelectedGame(null)}
        title={selectedGame !== null ? games[selectedGame].title : ""}
      >
        {selectedGame !== null && (
          <div>
            <p className="text-foreground leading-relaxed mb-4">{games[selectedGame].full}</p>
            <h4 className="font-heading font-bold text-sm text-foreground mb-2 uppercase tracking-wider">Бизнес-задачи</h4>
            <ul className="space-y-1.5 mb-4">
              {games[selectedGame].tasks.map((task, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {task}
                </li>
              ))}
            </ul>
            <div className="p-3 rounded-lg bg-secondary text-sm text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">Формат: </span>{games[selectedGame].format}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-colors"
            >
              Заказать программу
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default GamesPage;
