import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Главная" },
  { to: "/games", label: "Бизнес-игры" },
  { to: "/playback", label: "Плейбэк" },
  { to: "/outdoor", label: "Outdoor" },
  { to: "/contact", label: "Контакты" },
];

const Footer = () => {
  return (
    <footer className="bg-nature-deep text-primary-foreground/80">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="font-heading font-bold text-xl text-primary-foreground tracking-tight">
              PLAY<span className="text-accent">2</span>CHANGE
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Трансформация бизнеса через игровые форматы, симуляции и иммерсивные программы с измеримым результатом.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Контакты</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <span>info@transformplay.ru</span>
              <span>+7 (495) 123-45-67</span>
              <span>Москва, Россия</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Play2Change. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
