import { WhatsappLogo } from '@phosphor-icons/react';
import { siteData } from '../data/siteData';

export function FloatingWhatsApp() {
  return (
    <a
      href={siteData.whatsappAgendamento}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar Mesa no WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-20 inline-flex items-center gap-2.5 rounded-full bg-accent px-4 py-3 text-sm font-bold text-bg shadow-[0_14px_36px_rgba(0,0,0,0.55)] ring-1 ring-accent-bright/40 transition-transform duration-200 hover:bg-accent-bright hover:scale-[1.03] active:scale-[0.97]"
    >
      <WhatsappLogo size={20} weight="fill" className="icon-pulse-3s" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
