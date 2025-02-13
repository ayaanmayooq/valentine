import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "valentine-pink": "#ffe4e6",  // Soft pastel pink
        "valentine-red": "#ff6b6b",   // Vibrant romantic red
        "valentine-rose": "#ffb6c1",  // Warm rose pink
        "valentine-white": "#fff5f7", // Gentle white with a pinkish hue
        "valentine-lilac": "#dda0dd", // Light lilac purple for accents
        "valentine-wine": "#b23a48",  // Deep wine red for contrast
        "valentine-coral": "#ff8c69", // Coral pink for lively elements
        "valentine-gold": "#ffc107",  // Gold for subtle sparkle or highlights
        "valentine-chocolate": "#7b3f00", // Rich chocolate for grounding elements
        "valentine-cream": "#fdf3e7", // Cream for a soft neutral background
        "valentine-gray": "#e0d7df",  // Muted gray for subtle borders
        "valentine-mauve": "#e0b0ff", // Pale mauve for gentle transitions
        "spotify-top": "#952444",   // Mauve for the top section
        "spotify-bottom": "#7a1231", // Darker mauve for the bottom section
      },
    },
  },
  plugins: [],
} satisfies Config;
