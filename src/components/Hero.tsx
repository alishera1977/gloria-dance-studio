import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dance.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Бальные танцы"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Танцевальная студия
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-7xl md:text-9xl font-light text-gradient-gold mb-8 leading-tight"
        >
          Глория
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-2xl md:text-3xl italic text-foreground/80 mb-4"
        >
          Грация. Страсть. Уверенность.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Бальные танцы для детей и взрослых. Превратите свою жизнь в вальс.
        </motion.p>

        <motion.a
          href="#programs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-glow transition-colors duration-300"
        >
          Записаться
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
