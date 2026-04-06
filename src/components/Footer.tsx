import gloriaLogo from "@/assets/gloria-logo-light.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={gloriaLogo} alt="Глория" className="h-14 w-auto object-contain" loading="lazy" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-body text-sm text-muted-foreground text-center">
            г. Новосибирск, ДК Прогресс, Красный проспект 167, офис 310
          </p>
          <a
            href="https://vk.ru/club236813855"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Мы ВКонтакте — Танцевальная студия Глория
          </a>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Танцевальная студия Глория. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
