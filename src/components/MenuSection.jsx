import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Coffee, Play, X, Sparkle } from '@phosphor-icons/react';
import { siteData } from '../data/siteData';
import { WhatsAppRippleButton } from './WhatsAppRippleButton';

export function MenuSection() {
  const [selectedDish, setSelectedDish] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedDish) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedDish(null);
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedDish]);

  const featuredItem = siteData.menuItems[0];
  const secondaryItems = siteData.menuItems.slice(1);

  return (
    <section id="menu" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Stacked Header (only 2nd eyebrow on entire page) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl space-y-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-botanical/40 bg-surface px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] text-botanical font-bold">
            Menu de Autor
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] text-ink text-balance">
            Croissants, trufas e salgados com ótimo sabor
          </h2>
          <p className="text-base sm:text-lg text-ink-muted text-pretty max-w-[55ch]">
            Toque em qualquer especialidade abaixo para explorar o close-up em movimento e
            conferir os favoritos das avaliações em Goiânia.
          </p>
        </motion.div>

        {/* Asymmetric 3-Cell Bento Grid (exact cell count = 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Cell 1: Tall Featured Beverages Card */}
          <motion.button
            type="button"
            onClick={() => setSelectedDish(featuredItem)}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="group lg:col-span-5 lg:row-span-2 text-left rounded-[2rem] p-2 bg-white/[0.03] ring-1 ring-accent/25 hover:ring-accent/60 shadow-[0_24px_64px_rgba(0,0,0,0.45)] cursor-pointer focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(2rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <div className="relative overflow-hidden aspect-[4/4.3] lg:aspect-auto lg:h-[380px] w-full">
                <img
                  src={featuredItem.imageUrl}
                  alt={featuredItem.imageAlt}
                  width={1080}
                  height={1080}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                />
                {/* Fluid crema golden wave at bottom edge of image */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 overflow-hidden opacity-85"
                >
                  <svg
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                    className="crema-wave-track h-full w-[200%]"
                  >
                    <path
                      d="M0,32 C150,8 300,52 450,28 C600,6 750,48 900,28 C1050,8 1150,44 1200,30 L1200,60 L0,60 Z"
                      fill="#1A1D24"
                    />
                    <path
                      d="M0,32 C150,8 300,52 450,28 C600,6 750,48 900,28 C1050,8 1150,44 1200,30"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2.2"
                      strokeOpacity="0.65"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                      <Coffee size={15} weight="fill" aria-hidden="true" />
                      {featuredItem.categoria}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/70 px-3 py-1 text-xs font-bold text-ink ring-1 ring-white/10 group-hover:ring-accent/50">
                      <Play size={12} weight="fill" className="text-accent" aria-hidden="true" />
                      Close-up
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink text-balance">
                    {featuredItem.titulo}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-ink-muted text-pretty">
                    {featuredItem.descricao}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-3">
                  <p className="text-xs italic text-botanical">{featuredItem.destaqueReview}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-elevated px-3 py-1 text-xs text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.button>

          {/* Cells 2 & 3: Stacked Horizontal Cards */}
          {secondaryItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setSelectedDish(item)}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 24,
                delay: idx * 0.08,
              }}
              className="group lg:col-span-7 text-left rounded-[2rem] p-2 bg-white/[0.03] ring-1 ring-white/12 hover:ring-accent/55 shadow-[0_20px_54px_rgba(0,0,0,0.4)] cursor-pointer focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-[calc(2rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] h-full">
                <div className="sm:col-span-5 overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-full">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    width={1080}
                    height={1080}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                  />
                </div>

                <div className="sm:col-span-7 flex flex-col justify-between p-6 sm:p-7 space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-botanical">
                        <Sparkle size={14} weight="fill" aria-hidden="true" />
                        {item.categoria}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/70 px-3 py-1 text-xs font-bold text-ink ring-1 ring-white/10 group-hover:ring-accent/50">
                        <Play size={12} weight="fill" className="text-accent" aria-hidden="true" />
                        Close-up
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-ink text-balance">
                      {item.titulo}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-ink-muted text-pretty">
                      {item.descricao}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2.5">
                    <p className="text-xs italic text-accent">{item.destaqueReview}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-surface-elevated px-3 py-1 text-xs text-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Interactive Dish Close-up Loop Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedDish(null)}
            className="fluid-glass fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[2rem] p-2 bg-white/[0.06] ring-1 ring-accent/40 shadow-[0_32px_100px_rgba(0,0,0,0.8)]"
            >
              <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] bg-bg shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <div className="relative h-72 sm:h-80 overflow-hidden bg-surface">
                  <img
                    src={selectedDish.imageUrl}
                    alt={selectedDish.imageAlt}
                    referrerPolicy="no-referrer"
                    className="macro-loop h-full w-full object-cover object-[center_35%]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/35"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedDish(null)}
                    aria-label="Fechar detalhes do prato"
                    className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-bg/85 text-ink ring-1 ring-white/20 transition-colors hover:text-accent cursor-pointer"
                  >
                    <X size={20} weight="bold" aria-hidden="true" />
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      Close-up em Movimento · {selectedDish.categoria}
                    </span>
                    <h3
                      id="dish-modal-title"
                      className="font-display text-2xl sm:text-3xl font-semibold text-ink"
                    >
                      {selectedDish.titulo}
                    </h3>
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed text-pretty">
                      {selectedDish.descricao}
                    </p>
                  </div>

                  <p className="rounded-2xl border border-accent/20 bg-surface/70 px-4 py-3 text-sm italic text-ink">
                    {selectedDish.destaqueReview}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <WhatsAppRippleButton
                      href={siteData.whatsappAgendamento}
                      label="Agendar Mesa no WhatsApp"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedDish(null)}
                      className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-ink-muted transition-colors hover:text-ink cursor-pointer"
                    >
                      Voltar ao menu
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
