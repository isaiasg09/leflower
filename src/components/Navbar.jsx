import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsappLogo, ArrowUpRight } from '@phosphor-icons/react';
import { siteData } from '../data/siteData';

const navLinks = [
  { label: 'O Chef', href: '#chef' },
  { label: 'Menu', href: '#menu' },
  { label: 'Ambiente', href: '#ambiente' },
  { label: 'Localização', href: '#localizacao' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-4 inset-x-4 z-40 mx-auto max-w-4xl">
        <nav
          aria-label="Navegação principal"
          className="fluid-glass flex h-16 items-center justify-between rounded-full border border-white/12 px-4 sm:px-5 shadow-[0_18px_48px_rgba(0,0,0,0.45)]"
        >
          <a
            href="#topo"
            className="flex items-center gap-2.5 rounded-full pr-2 transition-opacity hover:opacity-90"
            aria-label="Le Flower cafeteria, ir para o topo"
          >
            <img
              src="/logo-crest.png"
              alt="Brasão Le Flower cafeteria"
              width={40}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-ink whitespace-nowrap">
              Le Flower
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-normal text-ink-muted transition-colors duration-200 hover:text-accent whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={siteData.whatsappAgendamento}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-bg transition-transform duration-200 hover:bg-accent-bright active:scale-[0.97] whitespace-nowrap"
            >
              <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
              <span>Agendar Mesa</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-overlay"
              aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="relative flex size-11 items-center justify-center rounded-full border border-white/12 bg-surface/80 text-ink md:hidden cursor-pointer transition-transform active:scale-95"
            >
              <span
                className={`absolute h-[1.5px] w-5 bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-5 bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-[#0F1115]/96 backdrop-blur-3xl px-6 pt-28 pb-10 md:hidden"
          >
            <nav aria-label="Links do menu móvel" className="flex flex-col gap-5">
              {navLinks.map((item, idx) => (
                <div key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: 36, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{
                      duration: 0.42,
                      delay: 0.06 * idx,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="flex items-center justify-between border-b border-white/10 pb-4 font-display text-3xl text-ink transition-colors hover:text-accent"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={22} weight="light" className="text-accent" aria-hidden="true" />
                  </motion.a>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="space-y-4"
            >
              <a
                href={siteData.whatsappAgendamento}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wider text-bg active:scale-[0.98]"
              >
                <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
                <span>Agendar Mesa no WhatsApp</span>
              </a>
              <p className="text-center text-xs text-ink-muted">
                {siteData.endereco}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
