import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Clock,
  Phone,
  ArrowUpRight,
  CaretDown,
} from '@phosphor-icons/react';
import { siteData } from '../data/siteData';
import { WhatsAppRippleButton } from './WhatsAppRippleButton';

function GoianiaVectorMap() {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, amount: 0.35 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      ref={mapRef}
      className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-[#13161D] p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
    >
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            Rota para o Setor Central
          </p>
          <p className="text-xs text-ink-muted">Goiânia, GO · CEP 74023-030</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
          <MapPin size={14} weight="fill" aria-hidden="true" />
          R. 6, 01
        </span>
      </div>

      <svg
        viewBox="0 0 540 270"
        className="mt-4 w-full h-auto"
        role="img"
        aria-label="Mapa estilizado do Setor Central de Goiânia indicando a rota até a Rua 6 número 01"
      >
        <defs>
          <radialGradient id="leflower-pin-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Urban blocks of Setor Central */}
        <g stroke="rgba(232,237,245,0.08)" strokeWidth="1.2" fill="rgba(26,29,36,0.65)">
          <rect x="24" y="24" width="110" height="58" rx="10" />
          <rect x="156" y="24" width="128" height="58" rx="10" />
          <rect x="306" y="24" width="112" height="58" rx="10" />
          <rect x="436" y="24" width="82" height="58" rx="10" />

          <rect x="24" y="106" width="110" height="62" rx="10" />
          <rect x="156" y="106" width="128" height="62" rx="10" />
          <rect x="306" y="106" width="112" height="62" rx="10" />
          <rect x="436" y="106" width="82" height="62" rx="10" />

          <rect x="24" y="192" width="110" height="56" rx="10" />
          <rect x="156" y="192" width="128" height="56" rx="10" />
          <rect x="306" y="192" width="212" height="56" rx="10" />
        </g>

        {/* Main avenues */}
        <g stroke="rgba(166, 156, 107, 0.28)" strokeWidth="3">
          <line x1="12" y1="94" x2="528" y2="94" />
          <line x1="12" y1="180" x2="528" y2="180" />
          <line x1="145" y1="12" x2="145" y2="258" />
          <line x1="295" y1="12" x2="295" y2="258" />
        </g>

        {/* Street labels */}
        <g fill="#A6B0C2" fontSize="10" fontFamily="Lato, sans-serif">
          <text x="26" y="90">Av. Anhanguera</text>
          <text x="164" y="176">Rua 6 · Setor Central</text>
          <text x="299" y="38">Av. Goiás</text>
        </g>

        {/* Visitor Origin Dot */}
        <circle cx="64" cy="218" r="6" fill="#A69C6B" />
        <circle cx="64" cy="218" r="12" fill="none" stroke="#A69C6B" strokeOpacity="0.45" />
        <g transform="translate(20, 234)">
          <rect width="108" height="24" rx="12" fill="#0F1115" stroke="rgba(166,156,107,0.45)" />
          <text
            x="54"
            y="16"
            textAnchor="middle"
            fill="#E8EDF5"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="Lato, sans-serif"
          >
            Você no Centro
          </text>
        </g>

        {/* Golden Dashed Route drawn on scroll */}
        <motion.path
          d="M 64 218 L 145 218 L 145 180 L 295 180 L 295 94 L 388 94"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8 8"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 1 : 0.35 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: shouldReduceMotion ? 1 : 0 }
          }
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* Destination Glow & Pin */}
        <circle cx="388" cy="94" r="34" fill="url(#leflower-pin-glow)" />
        <circle cx="388" cy="94" r="9" fill="#D4AF37" stroke="#0F1115" strokeWidth="3" />
        <g transform="translate(316, 40)">
          <rect width="144" height="30" rx="15" fill="#0F1115" stroke="#D4AF37" strokeOpacity="0.7" />
          <text
            x="72"
            y="19"
            textAnchor="middle"
            fill="#E8EDF5"
            fontSize="11"
            fontWeight="700"
            fontFamily="Lato, sans-serif"
          >
            Le Flower · R. 6, 01
          </text>
        </g>
      </svg>
    </div>
  );
}

export function LocationSection() {
  const [openFaq, setOpenFaq] = useState(siteData.faqItems[0].id);
  const shouldReduceMotion = useReducedMotion();
  const facadePhoto = siteData.photoCatalog[2];

  return (
    <section id="localizacao" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Vector Map + Real Facade Photo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-[2rem] p-2 bg-white/[0.03] ring-1 ring-accent/25 shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
              <GoianiaVectorMap />
            </div>

            <div className="rounded-[2rem] p-2 bg-white/[0.03] ring-1 ring-white/12">
              <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-[calc(2rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <div className="sm:col-span-5 overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-52">
                  <img
                    src={facadePhoto.url}
                    alt={facadePhoto.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="sm:col-span-7 flex flex-col justify-center p-6 space-y-2">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {facadePhoto.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted text-pretty">
                    {facadePhoto.subtitulo}. Um ponto acolhedor fácil de reconhecer ao chegar na
                    Rua 6, número 01.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Address, Real Hours & Direct Conversion */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] text-ink text-balance">
                Visite a Le Flower no Setor Central
              </h2>
              <p className="text-base text-ink-muted text-pretty">
                {siteData.endereco}
              </p>
            </div>

            {/* Hours Card */}
            <div className="rounded-[2rem] p-1.5 bg-white/[0.03] ring-1 ring-white/12">
              <div className="rounded-[calc(2rem-0.375rem)] bg-surface p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] space-y-4">
                <div className="flex items-center gap-2.5 text-accent">
                  <Clock size={20} weight="regular" aria-hidden="true" />
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Horário de Funcionamento
                  </h3>
                </div>

                <dl className="space-y-2.5 text-sm">
                  {siteData.horariosFormatados.map((item) => (
                    <div
                      key={item.dia}
                      className="flex items-center justify-between gap-4 border-b border-white/6 pb-2 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-ink-muted">{item.dia}</dt>
                      <dd
                        className={`tabular-nums font-bold ${
                          item.fechado ? 'text-ink-muted' : 'text-ink'
                        }`}
                      >
                        {item.horario}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="pt-2 border-t border-white/10 flex items-center gap-2.5 text-sm text-ink">
                  <Phone size={18} weight="regular" className="text-accent shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${siteData.telefone_internacional.replace(/\s+/g, '')}`}
                    className="tabular-nums font-bold hover:text-accent transition-colors"
                  >
                    {siteData.telefone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <WhatsAppRippleButton
                href={siteData.whatsappAgendamento}
                label="Agendar Mesa no WhatsApp"
              />
              <a
                href={siteData.link_google_maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:border-accent/55 hover:text-accent active:scale-[0.97] whitespace-nowrap"
              >
                <span>Abrir no Google Maps</span>
                <ArrowUpRight size={16} weight="regular" className="text-accent" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Accessible FAQ Accordion (matches JSON-LD FAQPage) */}
        <div className="mx-auto max-w-4xl space-y-6 pt-4">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink text-center text-balance">
            Dúvidas frequentes antes da sua visita
          </h3>

          <div className="space-y-3">
            {siteData.faqItems.map((item) => {
              const isOpen = openFaq === item.id;
              const panelId = `${item.id}-panel`;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-surface/80 overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaq(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold text-base text-ink transition-colors hover:text-accent cursor-pointer"
                  >
                    <span>{item.pergunta}</span>
                    <CaretDown
                      size={18}
                      weight="bold"
                      aria-hidden="true"
                      className={`shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                        className="px-6 pb-5 text-sm sm:text-base leading-relaxed text-ink-muted text-pretty"
                      >
                        {item.resposta}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
