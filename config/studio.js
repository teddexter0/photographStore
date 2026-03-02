/**
 * PHOTOGRAPHY STUDIO CONFIG — Single source of truth
 * Change this file to white-label for a new client.
 */

export const studioConfig = {
  name: "Lens & Light Studio",
  tagline: "Moments Made Permanent",
  phone: "+254 700 000 000",
  whatsapp: "+254700000000",
  email: "hello@lensandlight.co.ke",
  instagram: "@lensandlight",
  address: "Rupa Mall, 2nd Floor, Eldoret",
  googleAnalyticsId: "",
  services: [
    {
      name: "Portraits",
      price: "From KES 8,000",
      description: "Professional headshots and personal portraits. 1-2hr session, 30+ edited photos.",
      emoji: "📸",
    },
    {
      name: "Weddings",
      price: "From KES 35,000",
      description: "Full day coverage, 200+ edited photos, online gallery included.",
      emoji: "💍",
    },
    {
      name: "Events",
      price: "From KES 15,000",
      description: "Corporate events, parties, and celebrations. 100+ edited photos.",
      emoji: "🎉",
    },
    {
      name: "Passport / ID",
      price: "KES 300 – 500",
      description: "Walk-ins welcome. Ready in minutes. No booking needed.",
      emoji: "🪪",
    },
    {
      name: "Corporate",
      price: "From KES 25,000",
      description: "Brand imagery, product shoots, and commercial photography.",
      emoji: "🏢",
    },
    {
      name: "Products",
      price: "From KES 10,000",
      description: "Clean product photography for e-commerce and marketing.",
      emoji: "📦",
    },
  ],
  colors: {
    primary: "#0F0F0F",
    accent: "#C9A96E",
    bg: "#141414",
    text: "#F0EDE8",
  },
  // Manual season override
  // Options: "default" | "valentine" | "christmas" | "easter"
  season: "default",
};
