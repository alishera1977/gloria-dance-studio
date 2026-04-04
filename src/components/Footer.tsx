import gloriaLogo from "@/assets/gloria-logo-light.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={gloriaLogo} alt="Глория" className="h-14 w-auto object-contain" loading="lazy" />
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Танцевальная студия Глория. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
