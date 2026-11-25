import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from 'motion/react';
import { Star, SealCheck } from '@phosphor-icons/react';
import { siteData } from '../data/siteData';

function GoldGlowReviewCard({ review, featured = false }) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(160);
  const mouseY = useMotionValue(90);

  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, rgba(212, 175, 55, 0.16), transparent 72%)`;

  const handlePointerMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className="group relative rounded-[2rem] p-1.5 bg-white/[0.03] ring-1 ring-white/12 transition-colors duration-300 hover:ring-accent/55"
    >
      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(2rem-0.375rem)] bg-surface p-6 sm:p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
        {/* Pointer-driven golden ambient sheen on hover */}
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotlight }}
          />
        )}

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1 text-accent" aria-label="Nota 5 de 5 estrelas">
              {Array.from({ length: review.nota }).map((_, i) => (
                <Star key={i} size={16} weight="fill" aria-hidden="true" />
              ))}
            </div>
            <span className="rounded-full border border-accent/25 bg-bg/60 px-3 py-1 text-[11px] font-bold tracking-wider text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/15">
              Top do top
            </span>
          </div>

          <p
            className={`text-ink leading-relaxed text-pretty ${
              featured ? 'font-display text-lg sm:text-xl italic leading-[1.45] pb-1' : 'text-sm sm:text-base'
            }`}
          >
            “{review.texto}”
          </p>
        </div>

        <footer className="relative z-10 mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <span className="font-bold text-sm text-ink">{review.autor}</span>
          <span className="inline-flex items-center gap-1 text-xs text-botanical">
            <SealCheck size={14} weight="fill" aria-hidden="true" />
            Google Maps
          </span>
        </footer>
      </div>
    </motion.article>
  );
}

export function ReviewsSection() {
  const [featuredReview, ...otherReviews] = siteData.avaliacoes;

  return (
    <section id="avaliacoes" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Rating Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] text-ink text-balance">
              Bom custo benefício e nota máxima em Goiânia
            </h2>
            <p className="text-base sm:text-lg text-ink-muted text-pretty max-w-[54ch]">
              Cada avaliação no Google Maps reflete o carinho na cozinha, os preços justos e a
              atenção pessoal em cada visita.
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="inline-flex items-center gap-5 rounded-[1.5rem] border border-accent/30 bg-surface px-6 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <span className="font-display text-5xl font-semibold tabular-nums text-accent">
                {siteData.nota},0
              </span>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-accent" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} weight="fill" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-ink-muted tabular-nums">
                  {siteData.total_avaliacoes} avaliações reais · Top do top
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spotlight Quote + 2x2 Real Reviews */}
        <div className="space-y-6">
          <GoldGlowReviewCard review={featuredReview} featured />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherReviews.map((review) => (
              <GoldGlowReviewCard key={review.autor} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
