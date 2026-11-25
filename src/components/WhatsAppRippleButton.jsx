import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { WhatsappLogo, CalendarCheck } from '@phosphor-icons/react';

export function WhatsAppRippleButton({
  href,
  label = 'Agendar Mesa no WhatsApp',
  variant = 'primary',
  className = '',
  compact = false,
}) {
  const buttonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [holding, setHolding] = useState(false);
  const [waves, setWaves] = useState([]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 220, damping: 24 });
  const glowY = useSpring(pointerY, { stiffness: 220, damping: 24 });

  const updatePointer = (clientX, clientY) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    pointerX.set(clientX - rect.left);
    pointerY.set(clientY - rect.top);
  };

  const spawnWave = (clientX, clientY) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setWaves((prev) => [...prev.slice(-4), { id, x, y }]);
  };

  const handlePointerDown = (e) => {
    setHolding(true);
    updatePointer(e.clientX, e.clientY);
    spawnWave(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    updatePointer(e.clientX, e.clientY);
    if (holding && Math.random() < 0.28) {
      spawnWave(e.clientX, e.clientY);
    }
  };

  const handlePointerEnd = () => {
    setHolding(false);
  };

  const baseStyles =
    variant === 'primary'
      ? 'bg-accent text-bg hover:bg-accent-bright shadow-[0_10px_32px_rgba(212,175,55,0.22)]'
      : 'bg-surface-elevated text-ink ring-1 ring-accent/35 hover:ring-accent/70';

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
      className={`group relative inline-flex items-center justify-between gap-3 overflow-hidden rounded-full font-body font-bold tracking-wide transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] whitespace-nowrap cursor-pointer ${
        compact ? 'pl-5 pr-2 py-2 text-sm' : 'pl-6 pr-2.5 py-2.5 text-sm sm:text-base'
      } ${baseStyles} ${className}`}
    >
      {/* Expanding coffee-gold waves when clicking and holding while gliding */}
      {!shouldReduceMotion && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
          style={{
            left: glowX,
            top: glowY,
            width: holding ? 140 : 0,
            height: holding ? 140 : 0,
            opacity: holding ? 0.35 : 0,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />
      )}

      {waves.map((wave) => (
        <motion.span
          key={wave.id}
          aria-hidden="true"
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#3B1F0A]/40 bg-[#6F4E37]/20"
          style={{ left: wave.x, top: wave.y, width: 32, height: 32 }}
          initial={{ scale: 0.4, opacity: 0.85 }}
          animate={{ scale: 6.2, opacity: 0 }}
          transition={{ duration: 0.95, ease: [0.23, 1, 0.32, 1] }}
          onAnimationComplete={() =>
            setWaves((prev) => prev.filter((item) => item.id !== wave.id))
          }
        />
      ))}

      <span className="relative z-10 flex items-center gap-2">
        <WhatsappLogo size={compact ? 18 : 20} weight="fill" aria-hidden="true" />
        <span>{label}</span>
      </span>

      <span
        className={`relative z-10 flex items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 ${
          compact ? 'size-8' : 'size-9 sm:size-10'
        } ${variant === 'primary' ? 'bg-bg/15 text-bg' : 'bg-accent/15 text-accent'}`}
      >
        <CalendarCheck
          size={compact ? 16 : 18}
          weight="regular"
          className="icon-pulse-3s"
          aria-hidden="true"
        />
      </span>
    </a>
  );
}
