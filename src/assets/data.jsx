const goodColors = [
  // Classic & Common Solids
  "#009966", // Emerald Green (earthy green)
  "#4682B4", // Steel Blue Metallic (Strong, deep blue with metallic
  "#E6E6FA", // Lavender White (Soft, slightly off-white)
  "#000000", // Black (Classic, timeless)
  "#36454F", // Charcoal Gray (Dark, sophisticated)
  "#800000", // Maroon (Deep, rich red)
  "#000080", // Navy Blue (Dark, elegant blue)
  "#808080", // Gray (Neutral, versatile)
  "#FFD700", // Gold (Bright, luxurious yellow)
  "#C0C0C0", // Silver (Bright, reflective gray)

  // Modern Metallics & Pearls (approximated with hex codes)
  "#A9A9A9", // Dark Gray Metallic (Common, sleek)
  "#C0C0C0", // Silver Metallic (Timeless, reflects light well)
  "#F5F5DC", // Pearl White (Soft, creamy white with subtle shimmer)
  "#4682B4", // Steel Blue Metallic (Strong, deep blue with metallic sheen)
  "#8B0000", // Dark Red Metallic (Deep, lustrous red)
  "#5F9EA0", // Cadet Blue Metallic (Unique, muted blue-green)
  "#6B8E23", // Olive Drab (Subtle, rugged green)
  "#DAA520", // Goldenrod (Warm, understated gold/bronze)
  "#708090", // Slate Gray Metallic (Slightly bluish-gray, sophisticated)
  "#BDB76B", // Dark Khaki (Earth tone, military-inspired)
];

const carTelemetry = [
  { label: "TOP SPEED", value: "180 MPH", trend: "+2%" },
  { label: "0-60 MPH", value: "3.1 SEC", trend: "FAST" },
  { label: "RANGE", value: "320 MI", trend: "88%" },
  { label: "DRIVE", value: "AWD", trend: "ACTIVE" },
  { label: "BATTERY", value: "OPTIMAL", trend: "100%" },
];

const BASE = import.meta.env.BASE_URL;

const songs = [
  { name: "FootPrint Arts", audio: `${BASE}music/song2.mp3`, image: `${BASE}images/user-1.png`, artist: "Emily Johnson" },
  { name: "Engine Beats", audio: `${BASE}music/song2.mp3`, image: `${BASE}images/user-4.png`, artist: "DJ Torque" },
  { name: "DJ Beatz - Chill Mix", audio: `${BASE}music/song2.mp3`, image: `${BASE}images/user-3.png`, artist: null },
  { name: "Get Up - Amapiano Mix", audio: `${BASE}music/song2.mp3`, image: `${BASE}images/user-2.png`, artist: "The Vibrants" },
  { name: "AfroBeat - Niger Vibes", audio: `${BASE}music/song3.mp3`, image: `${BASE}images/user-3.png`, artist: "DJ Wakanda" },
  { name: "Amapiano Vibe", audio: `${BASE}music/song1.mp3`, image: `${BASE}images/user-4.png`, artist: "South African DJ" },
];

// data.jsx
const CAR_DATA = {
  Polestar: { name: "Polestar 2", desc: "Performance Electric Sedan", model: "Polestar_Car", available: true },
  BYD:   { name: "BYD Seal",     desc: "Performance Electric Sedan", model: "BYD",          available: false },
  SUV:   { name: "Hyundai SUV",  desc: "Luxury Family Travel",        model: "Hyundai_SUV",  available: false },
  Volvo: { name: "Volvo EX30",   desc: "Fully electric crossover",    model: "Volvo",        available: false },
};

export { goodColors, carTelemetry, songs, CAR_DATA };
