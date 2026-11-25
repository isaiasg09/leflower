import {
  MapPin,
  Phone,
  InstagramLogo,
  ShoppingBagOpen,
  ArrowUpRight,
} from '@phosphor-icons/react';
import { siteData } from '../data/siteData';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/logo-leflower.png"
                alt="Logotipo Le Flower Café e Chocolate"
                width={84}
                height={73}
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
              <div>
                <p className="font-display text-2xl font-semibold text-ink">
                  {siteData.nome}
                </p>
                <p className="text-sm text-botanical">
                  Setor Central · {siteData.cidadeExibicao}
                </p>
              </div>
            </div>
            <p className="max-w-[42ch] text-sm leading-relaxed text-ink-muted text-pretty">
              Cafés especiais, croissants, trufas, doces e salgados preparados com atenção de
              chef no coração de Goiânia.
            </p>
          </div>

          {/* Contact & Address */}
          <div className="md:col-span-4 space-y-3 text-sm">
            <p className="font-bold text-ink uppercase tracking-wider text-xs">
              Endereço & Contato
            </p>
            <a
              href={siteData.link_google_maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-ink-muted hover:text-accent transition-colors"
            >
              <MapPin size={18} weight="regular" className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <span>{siteData.endereco}</span>
            </a>
            <a
              href={`tel:${siteData.telefone_internacional.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 text-ink-muted hover:text-accent transition-colors tabular-nums"
            >
              <Phone size={18} weight="regular" className="text-accent shrink-0" aria-hidden="true" />
              <span>{siteData.telefone}</span>
            </a>
            <p className="text-xs text-ink-muted pt-1 tabular-nums">
              Seg a Sáb: 10:00 às 18:30 · Domingo: Fechado
            </p>
          </div>

          {/* Conditional Social / Delivery Links */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <p className="font-bold text-ink uppercase tracking-wider text-xs">
              Canais Oficiais
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={siteData.link_google_maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
                </a>
              </li>

              {siteData.instagram && (
                <li>
                  <a
                    href={siteData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors"
                  >
                    <InstagramLogo size={16} weight="regular" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                </li>
              )}

              {siteData.ifood && (
                <li>
                  <a
                    href={siteData.ifood}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors"
                  >
                    <ShoppingBagOpen size={16} weight="regular" aria-hidden="true" />
                    <span>iFood</span>
                  </a>
                </li>
              )}

              {siteData.anota_ai && (
                <li>
                  <a
                    href={siteData.anota_ai}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors"
                  >
                    <ShoppingBagOpen size={16} weight="regular" aria-hidden="true" />
                    <span>Anota AI</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} {siteData.nome}. Todos os direitos reservados.</p>
          <p>{siteData.cidadeExibicao}</p>
        </div>
      </div>
    </footer>
  );
}
