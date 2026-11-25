import { useEffect, useRef, useState } from 'react';

export function SteamOverlay() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 h-[44%] overflow-hidden ${
        visible ? '' : 'steam-paused'
      }`}
    >
      <svg
        viewBox="0 0 260 180"
        className="mx-auto h-full w-48 sm:w-56 opacity-75"
        fill="none"
      >
        <defs>
          <filter id="leflower-steam-filter" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.022 0.045"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="16"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="5.5" />
          </filter>
          <linearGradient id="leflower-steam-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#E8EDF5" stopOpacity="0" />
            <stop offset="35%" stopColor="#E8EDF5" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#D4AF37" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#E8EDF5" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g filter="url(#leflower-steam-filter)">
          <path
            className="steam-wisp-1"
            d="M112 162 C102 128, 128 96, 114 60 C104 34, 122 18, 118 4"
            stroke="url(#leflower-steam-grad)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            className="steam-wisp-2"
            d="M148 166 C158 130, 134 98, 146 64 C156 36, 138 20, 142 6"
            stroke="url(#leflower-steam-grad)"
            strokeWidth="13"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
