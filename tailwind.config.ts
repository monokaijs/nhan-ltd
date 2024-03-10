import type { Config } from "tailwindcss";

function generateScale(name: string) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}A-${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: generateScale("gray"),
      accent: "#B3FC03",
      transparent: 'transparent',
    },
    fontSize: {
      sm: "0.75rem",
      base: "0.875rem",
      lg: "1.224rem"
    },
    borderRadius: {
      sm: "1px",
      md: "2px",
      lg: "4px",
      xl: "8px",
      full: "9999px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-up-and-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-down-and-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(-1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up-and-fade":
          "slide-up-and-fade 0.25s cubic-bezier(0.16, 0, 0.13, 1)",
        "slide-down-and-fade":
          "slide-down-and-fade 0.25s cubic-bezier(0.16, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
