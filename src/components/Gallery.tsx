import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const images = [
  { src: gallery1, alt: "Победители турнира с кубком и медалями" },
  { src: gallery2, alt: "Награждение на региональном турнире по танцевальному спорту" },
  { src: gallery3, alt: "Юные танцоры с дипломами на соревнованиях" },
  { src: gallery4, alt: "Тренер с воспитанниками и их наградами" },
  { src: gallery5, alt: "Танцевальные пары на церемонии награждения" },
  { src: gallery6, alt: "Победители турнира на пьедестале" },
  { src: gallery7, alt: "Танцоры с медалями на соревнованиях" },
  { src: gallery8, alt: "Юные танцовщицы с дипломами" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Наши достижения
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-gradient-gold">
            Галерея
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-sm" ref={emblaRef}>
            <div className="flex gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] min-w-0 cursor-pointer group"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
