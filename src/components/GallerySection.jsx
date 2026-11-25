import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { siteData } from '../data/siteData';

export function GallerySection() {
  const photos = siteData.photoCatalog;
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const prevIndex = (activeIndex - 1 + photos.length) % photos.length;
  const nextIndex = (activeIndex + 1) % photos.length;

  const goPrev = () => setActiveIndex(prevIndex);
  const goNext = () => setActiveIndex(nextIndex);

  const activePhoto = photos[activeIndex];
  const prevPhoto = photos[prevIndex];
  const nextPhoto = photos[nextIndex];

  return (
    <section
      id="ambiente"
      ref={sectionRef}
      className="relative scroll-mt-24 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] text-ink text-balance">
              Espaço aconchegante e muito agradável para voltar mais vezes
            </h2>
            <p className="text-base sm:text-lg text-ink-muted text-pretty">
              Conheça de perto nossa fachada botânica, os murais pintados à mão, as mesas e a
              vitrine do dia no Setor Central.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Foto anterior do ambiente"
              className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-surface text-ink transition-colors hover:border-accent/60 hover:text-accent active:scale-95 cursor-pointer"
            >
              <CaretLeft size={20} weight="bold" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Próxima foto do ambiente"
              className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-surface text-ink transition-colors hover:border-accent/60 hover:text-accent active:scale-95 cursor-pointer"
            >
              <CaretRight size={20} weight="bold" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Center-Focus Carousel Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Preview Card (Desktop only) */}
          <button
            type="button"
            onClick={goPrev}
            aria-label={`Ver foto anterior: ${prevPhoto.titulo}`}
            className="hidden lg:block lg:col-span-3 rounded-[2rem] p-1.5 bg-white/[0.02] ring-1 ring-white/10 opacity-60 hover:opacity-90 transition-opacity cursor-pointer text-left"
          >
            <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] bg-surface aspect-[4/5]">
              <img
                src={prevPhoto.url}
                alt={prevPhoto.alt}
                width={640}
                height={800}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </button>

          {/* Center Hero Slide with Slow Focus Zoom */}
          <div className="lg:col-span-6 rounded-[2rem] p-2 bg-white/[0.04] ring-1 ring-accent/35 shadow-[0_32px_90px_rgba(0,0,0,0.65)]">
            <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <div className="relative overflow-hidden aspect-[4/4.2] sm:aspect-[16/13]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto.id}
                    initial={shouldReduceMotion ? false : { opacity: 0.45, scale: 0.98 }}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : {
                            opacity: 1,
                            scale: inView ? 1.07 : 1,
                          }
                    }
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.3 }}
                    transition={{
                      opacity: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                      scale: { duration: 9, ease: 'linear' },
                    }}
                    className="h-full w-full"
                  >
                    <img
                      src={activePhoto.url}
                      alt={activePhoto.alt}
                      width={1080}
                      height={1080}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Clean Caption Outside Photo Frame */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-white/10 bg-bg/75 px-6 py-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                    {activePhoto.titulo}
                  </h3>
                  <p className="text-sm text-ink-muted">{activePhoto.subtitulo}</p>
                </div>
                <span className="text-xs font-bold tabular-nums tracking-wider text-accent shrink-0">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Preview Card (Desktop only) */}
          <button
            type="button"
            onClick={goNext}
            aria-label={`Ver próxima foto: ${nextPhoto.titulo}`}
            className="hidden lg:block lg:col-span-3 rounded-[2rem] p-1.5 bg-white/[0.02] ring-1 ring-white/10 opacity-60 hover:opacity-90 transition-opacity cursor-pointer text-left"
          >
            <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] bg-surface aspect-[4/5]">
              <img
                src={nextPhoto.url}
                alt={nextPhoto.alt}
                width={640}
                height={800}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </button>
        </div>

        {/* Interactive Slide Selectors */}
        <div className="flex items-center justify-center gap-2.5" role="tablist" aria-label="Selecionar fotografia">
          {photos.map((photo, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={photo.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Mostrar ${photo.titulo}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'w-9 bg-accent'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
