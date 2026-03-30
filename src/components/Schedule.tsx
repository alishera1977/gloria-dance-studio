import { motion } from "framer-motion";

const scheduleData = [
  { days: "Понедельник · Среда · Пятница", time: "17:00 — 20:00" },
  { days: "Вторник · Четверг", time: "18:00 — 20:00" },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 px-6 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Когда мы танцуем
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-gradient-gold">
            Расписание
          </h2>
        </motion.div>

        <div className="space-y-6">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center justify-between p-8 border border-border rounded-lg hover:border-primary/30 transition-colors duration-300"
            >
              <p className="font-heading text-2xl text-foreground mb-2 md:mb-0">
                {item.days}
              </p>
              <p className="font-body text-lg text-primary font-semibold tracking-wider">
                {item.time}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="font-heading text-2xl md:text-3xl italic text-foreground/70 leading-relaxed">
            «Позвольте себе эту искру.<br/>Бальные танцы — это спорт, искусство и дисциплина»
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Schedule;
