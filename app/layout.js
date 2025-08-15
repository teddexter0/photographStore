
// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Lumina Photography - Capturing Life\'s Beautiful Moments in Nairobi',
  description: 'Professional photography services in Nairobi. Weddings, portraits, events, commercial photography. Creative storytelling through lens.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}