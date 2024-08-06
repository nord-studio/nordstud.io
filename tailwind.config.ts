import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
	content: [
    './components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
			spacing: {
				"screen-w-nav": "calc(100vh - 61px)",
				snug: "calc(100vh - 61px - 2rem)",
			},
			fontFamily: {
				inter: ["var(--font-inter)", ...fontFamily.sans],
				sora: ["var(--font-sora)", ...fontFamily.sans],
				literata: ["var(--font-literata)", ...fontFamily.serif],
				mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
			},
		},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config