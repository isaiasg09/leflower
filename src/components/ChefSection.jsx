import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import { Quotes, Sparkle } from '@phosphor-icons/react';
import { siteData } from '../data/siteData';
import { WhatsAppRippleButton } from './WhatsAppRippleButton';

export function ChefSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawMedallionY = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const medallionY = useSpring(rawMedallionY, { stiffness: 120, damping: 24 });

  const interiorPhoto = siteData.photoCatalog[3];
  const crestPhoto = siteData.photoCatalog[4];

  return (
    <section
      id="chef"
      ref={sectionRef}
      className="relative scroll-mt-24 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Portrait */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="rounded-[2rem] p-2 bg-white/[0.03] ring-1 ring-accent/20 shadow-[0_28px_80px_rgba(0,0,0,0.55)]"
            >
              <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] aspect-[4/5]">
                <img
                  src={interiorPhoto.url}
                  alt={interiorPhoto.alt}
                  width={1080}
                  height={1080}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Parallax Crest Inset */}
            <motion.div
              style={shouldReduceMotion ? undefined : { y: medallionY }}
              className="hidden sm:block absolute -right-6 -bottom-8 w-44 rounded-2xl p-1.5 bg-bg/95 ring-1 ring-accent/30 shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
            >
              <div className="overflow-hidden rounded-[calc(1rem-0.25rem)] bg-surface aspect-square">
                <img
                  src={crestPhoto.url}
                  alt={crestPhoto.alt}
                  width={360}
                  height={360}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Narrative */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] text-ink text-balance">
              Hospitalidade e{' '}
              <em className="italic font-normal text-accent inline-block pb-1">
                requinte
              </em>{' '}
              conduzidos por Rogério
            </h2>

            {/* Double-Bezel Quote Card */}
            <div className="rounded-[2rem] p-1.5 bg-white/[0.03] ring-1 ring-accent/25">
              <blockquote className="rounded-[calc(2rem-0.375rem)] bg-surface p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <Quotes size={24} weight="fill" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-botanical">
                    Avaliação 5 estrelas
                  </span>
                </div>
                <p className="font-display text-xl sm:text-2xl italic leading-[1.35] text-ink pb-1">
                  “Atendimento excelente e um gentleman nível masterchef”
                </p>
                <footer className="text-sm text-ink-muted">
                  Silvynha Passarinho, cliente no Google Maps
                </footer>
              </blockquote>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-ink-muted text-pretty max-w-[54ch]">
              No coração do Setor Central, cada mesa é preparada com cuidado artesanal, entre
              pinturas botânicas de lírios, iluminação dourada e o atendimento próximo do
              proprietário Rogério.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-4">
                <div className="flex items-center gap-2 text-accent mb-1">
                  <Sparkle size={16} weight="fill" aria-hidden="true" />
                  <span className="text-sm font-bold text-ink">Atendimento de Chef</span>
                </div>
                <p className="text-sm text-ink-muted text-pretty">
                  Preparo atencioso de cafés, doces e salgados diretamente no balcão.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-4">
                <div className="flex items-center gap-2 text-botanical mb-1">
                  <Sparkle size={16} weight="fill" aria-hidden="true" />
                  <span className="text-sm font-bold text-ink">Refúgio Botânico</span>
                </div>
                <p className="text-sm text-ink-muted text-pretty">
                  Salão íntimo com paredes ilustradas e atmosfera calma no Centro.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <WhatsAppRippleButton
                href={siteData.whatsappAgendamento}
                label="Agendar Mesa no WhatsApp"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
