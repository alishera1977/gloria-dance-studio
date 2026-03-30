const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-xl text-foreground">Глория</p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Танцевальная студия Глория. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
