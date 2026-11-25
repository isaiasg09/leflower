import { Component, Suspense, lazy, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import { Star, ArrowDownRight } from '@phosphor-icons/react';
import { siteData } from '../data/siteData';
import { WhatsAppRippleButton } from './WhatsAppRippleButton';
import { SteamOverlay } from './SteamOverlay';

const GoldenDustCanvas = lazy(() => import('./GoldenDustCanvas'));

class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function AmbientGoldFallback() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          'radial-gradient(circle at 72% 38%, rgba(212, 175, 55, 0.14), transparent 45%), radial-gradient(circle at 22% 72%, rgba(166, 156, 107, 0.1), transparent 40%)',
      }}
    />
  );
}

export function Hero() {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    const check = () => {
      const wideEnough = window.innerWidth >= 768;
      if (!wideEnough) {
        setEnable3D(false);
        return;
      }
      try {
        const canvas = document.createElement('canvas');
        const gl =
          canvas.getContext('webgl2') || canvas.getContext('webgl');
        setEnable3D(Boolean(gl));
      } catch {
        setEnable3D(false);
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [shouldReduceMotion]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const rawMainY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const rawInsetY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const mainY = useSpring(rawMainY, { stiffness: 120, damping: 24 });
  const insetY = useSpring(rawInsetY, { stiffness: 120, damping: 24 });

  const heroDrink = siteData.photoCatalog[0];
  const heroInterior = siteData.photoCatalog[3];

  return (
    <section
      id="topo"
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center pt-24 pb-14 lg:pb-16 overflow-hidden"
    >
      <AmbientGoldFallback />
      {enable3D && (
        <WebGLErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <GoldenDustCanvas />
          </Suspense>
        </WebGLErrorBoundary>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Copy Stack (strictly 4 text elements) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Element 1: Eyebrow Rating Pill */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-surface/90 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent"
            >
              <span className="flex items-center gap-0.5 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} weight="fill" />
                ))}
              </span>
              <span className="tabular-nums font-bold">
                {siteData.nota},0 no Google
              </span>
            </motion.div>

            {/* Element 2: Headline with mask reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.72, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-ink text-balance"
              >
                O café mais{' '}
                <em className="italic font-normal text-accent inline-block pb-1">
                  requintado
                </em>{' '}
                de Goiânia
              </motion.h1>
            </div>

            {/* Element 3: Subheadline */}
            <motion.p
              initial={shouldReduceMotion ? false : { y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-[46ch] text-base sm:text-lg leading-relaxed text-ink-muted text-pretty"
            >
              Experimente salgados, doces e o masterchef Rogério em um ambiente único no Centro.
            </motion.p>

            {/* Element 4: CTAs */}
            <motion.div
              initial={shouldReduceMotion ? false : { y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <WhatsAppRippleButton
                href={siteData.whatsappAgendamento}
                label="Agendar Mesa no WhatsApp"
              />

              <a
                href="#menu"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-surface/85 px-6 py-3.5 text-sm font-bold text-ink transition-colors duration-200 hover:border-accent/50 hover:text-accent active:scale-[0.97] whitespace-nowrap"
              >
                <span>Ver Menu Completo</span>
                <ArrowDownRight
                  size={16}
                  weight="regular"
                  className="text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </div>

          {/* Right 2.5D Layered Double-Bezel Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              style={shouldReduceMotion ? undefined : { y: mainY }}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-[430px] rounded-[2rem] p-2 bg-white/[0.03] ring-1 ring-accent/25 shadow-[0_32px_90px_rgba(0,0,0,0.65)]"
            >
              <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] aspect-[4/5]">
                <img
                  src={heroDrink.url}
                  alt={heroDrink.alt}
                  width={1080}
                  height={1080}
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/20"
                />
                <SteamOverlay />
              </div>

              {/* 2.5D Secondary Parallax Inset (Interior with Chandelier & Chef) */}
              <motion.div
                style={shouldReduceMotion ? undefined : { y: insetY }}
                className="hidden sm:block absolute -left-10 -bottom-6 w-40 rounded-2xl p-1.5 bg-bg/95 ring-1 ring-accent/35 shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
              >
                <div className="overflow-hidden rounded-[calc(1rem-0.25rem)] bg-surface aspect-square">
                  <img
                    src={heroInterior.url}
                    alt={heroInterior.alt}
                    width={320}
                    height={320}
                    loading="eager"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
