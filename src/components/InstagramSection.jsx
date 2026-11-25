import { motion, useReducedMotion } from 'motion/react';
import { InstagramLogo, ArrowUpRight } from '@phosphor-icons/react';
import { instagramGallery, siteData } from '../data/siteData';

export function InstagramSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="instagram" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-[2rem] p-2 bg-white/[0.03] ring-1 ring-accent/25 shadow-[0_28px_80px_rgba(0,0,0,0.5)]"
        >
          <div className="rounded-[calc(2rem-0.5rem)] bg-surface p-6 sm:p-10 lg:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Profile & Editorial Copy */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg p-1 ring-2 ring-accent/60">
                    <img
                      src="/logo-crest.png"
                      alt="Perfil @leflowercafe"
                      width={40}
                      height={40}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base text-ink">{siteData.instagramHandle}</p>
                    <p className="text-xs font-bold tabular-nums text-botanical">
                      {siteData.instagramSeguidores} seguidores
                    </p>
                  </div>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.12] text-ink text-balance">
                  Bastidores, fornadas e cafés de{' '}
                  <em className="italic font-normal text-accent inline-block pb-1">
                    encher os olhos
                  </em>
                </h2>

                <p className="max-w-[44ch] text-sm sm:text-base leading-relaxed text-ink-muted text-pretty">
                  Acompanhe no Instagram os bolos recheados do dia, os preparos de Rogério e as
                  novidades servidas no nosso cantinho no Setor Central.
                </p>

                <div className="pt-1">
                  <a
                    href={siteData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between gap-3 rounded-full bg-accent pl-6 pr-2.5 py-2.5 text-sm sm:text-base font-bold text-bg shadow-[0_10px_32px_rgba(212,175,55,0.22)] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-accent-bright active:scale-[0.97] whitespace-nowrap cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <InstagramLogo size={20} weight="fill" aria-hidden="true" />
                      <span>Seguir {siteData.instagramHandle}</span>
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full bg-bg/15 text-bg transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                      <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Staggered 2x2 Mosaic */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 sm:py-3">
                {instagramGallery.map((photo, index) => {
                  const staggerClass =
                    index % 2 === 1 ? 'sm:translate-y-3' : 'sm:-translate-y-3';
                  return (
                    <a
                      key={photo.id}
                      href={siteData.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${photo.titulo} no Instagram ${siteData.instagramHandle}`}
                      className={`group relative overflow-hidden rounded-2xl bg-bg ring-1 ring-white/10 transition-colors duration-300 hover:ring-accent/60 aspect-[4/4.3] cursor-pointer ${staggerClass}`}
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        width={600}
                        height={645}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-bg/55 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                      >
                        <InstagramLogo size={28} weight="fill" />
                        <ArrowUpRight size={22} weight="bold" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
