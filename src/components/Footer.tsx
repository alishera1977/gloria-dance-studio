import gloriaLogo from "@/assets/gloria-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={gloriaLogo} alt="Глория" className="h-8 w-8" loading="lazy" />
          <p className="font-heading text-xl text-foreground">Глория</p>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Танцевальная студия Глория. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
