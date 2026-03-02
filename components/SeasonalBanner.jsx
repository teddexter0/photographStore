'use client';

import { useState } from 'react';
import { studioConfig } from '../config/studio';
import { detectSeason } from '../lib/season';

const BANNERS = {
  default: { message: '', visible: false },
  valentine: {
    message: "💕 Valentine's Shoot — Couple portraits, 20% off. Book now.",
    visible: true,
  },
  christmas: {
    message: '🎄 Christmas Mini Sessions — Family portraits, book your slot now.',
    visible: true,
  },
  easter: {
    message: '🌸 New season shoots — Outdoor portrait sessions open. Book today.',
    visible: true,
  },
};

export default function SeasonalBanner() {
  const [dismissed, setDismissed] = useState(false);
  const season = studioConfig.season !== 'default' ? studioConfig.season : detectSeason();
  const banner = BANNERS[season] || BANNERS.default;

  if (!banner.visible || dismissed) return null;

  return (
    <div className="seasonal-banner">
      <span>{banner.message}</span>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="ml-4 opacity-70 hover:opacity-100 font-bold text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
