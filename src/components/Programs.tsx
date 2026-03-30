import { motion } from "framer-motion";
import kidsImage from "@/assets/kids-dance.jpg";
import soloImage from "@/assets/solo-dance.jpg";
import couplesImage from "@/assets/couples-dance.jpg";

const programs = [
  {
    title: "Дети",
    subtitle: "от 5 до 15 лет",
    description: "Воспитываем чемпионов. С нуля до первого кубка. Ваш ребёнок научится побеждать — и не только на паркете.",
    image: kidsImage,
    price: "3 500 ₽",
    sessions: "8 занятий в месяц",
  },
  {
    title: "Соло",
    subtitle: "женщины 35+",
    description: "Хотите королевскую осанку? Выходите на паркет. Превратите каждый день в танец — грация, уверенность, свобода.",
    image: soloImage,
    price: "3 500 ₽",
    sessions: "4 занятия в месяц",
  },
  {
    title: "Пары",
    subtitle: "18+ с нуля",
    description: "Влюбитесь заново — в партнёра и в себя. Не просто шаги под музыку, это диалог без слов.",
    image: couplesImage,
    price: "3 500 ₽",
    sessions: "4 занятия в месяц",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Направления
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-gradient-gold">
            Наши программы
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-gradient-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/30" />
              </div>

              <div className="p-8">
                <h3 className="font-heading text-3xl text-foreground mb-1">
                  {program.title}
                </h3>
                <p className="font-body text-sm text-primary/70 uppercase tracking-wider mb-4">
                  {program.subtitle}
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading text-2xl text-foreground">{program.price}</p>
                  <p className="font-body text-xs text-muted-foreground">{program.sessions}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
