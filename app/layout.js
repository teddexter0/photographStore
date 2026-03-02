import './globals.css'
import { studioConfig } from '../config/studio'
import { detectSeason } from '../lib/season'
import WhatsAppFloat from '../components/WhatsAppFloat'
import SeasonalBanner from '../components/SeasonalBanner'

export const metadata = {
  title: `${studioConfig.name} — ${studioConfig.tagline}`,
  description: `Professional photography in Eldoret. ${studioConfig.tagline}. Weddings, portraits, events & more.`,
}

export default function RootLayout({ children }) {
  const season = studioConfig.season !== 'default' ? studioConfig.season : detectSeason()

  return (
    <html lang="en" data-season={season}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Karla:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <SeasonalBanner />
        {children}
        <WhatsAppFloat phone={studioConfig.whatsapp} />
      </body>
    </html>
  )
}
