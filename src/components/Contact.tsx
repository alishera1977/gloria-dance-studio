import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Начните свой танец
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-gradient-gold mb-8">
            Записаться
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
            Не просто шаги под музыку — это диалог без слов. Запишитесь на пробное занятие и почувствуйте магию бального танца.
          </p>

          <p className="font-body text-muted-foreground text-base mb-4">
            📍 г. Новосибирск, ДК Прогресс, Красный проспект 167, офис 310
          </p>
          <p className="font-body text-muted-foreground text-base mb-12">
            📞 <a href="tel:+79139447232" className="hover:text-primary transition-colors">+7 913 944 72 32</a>
          </p>

          <motion.a
            href="https://vk.com/id640837880"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-glow transition-colors duration-300"
          >
            Связаться с нами
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
