/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        jump: {
          "15%": {
            "border-bottom-right-radius": "3px",
          },
          "25%": {
            transform: "translateY(9px) rotate(22.5deg)",
          },
          "50%": {
            transform: "translateY(18px) scale(1, .9) rotate(45deg)",
            "border-bottom-right-radius": "40px",
          },
          "75%": {
            transform: "translateY(9px) rotate(67.5deg)",
          },
          "100%": {
            transform: "translateY(0) rotate(90deg)",
          },
        },
        shadow: {
          "0%, 100%": {
            transform: "scale(1, 1)",
          },
          "50%": {
            transform: "scale(1.2, 1)",
          },
        },
        rotBGimg: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shadow: "shadow 0.5s linear infinite",
        jump: "jump 0.5s linear infinite",
        rotBGimg: "rotBGimg 5s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".c-button": {
          color: "#000",
          fontWeight: "700",
          fontSize: "16px",
          textDecoration: "none",
          padding: "0.9em 1.6em",
          cursor: "pointer",
          display: "inline-block",
          verticalAlign: "middle",
          position: "relative",
          zIndex: "1",
        },
        ".c-button--gooey": {
          color: "hsl(var(--primary))",
          textTransform: "uppercase",
          letterSpacing: "2px",
          borderWidth: "4px",
          borderColor: "hsl(var(--primary))",
          borderRadius: "0",
          position: "relative",
          transition: "all 700ms ease",
        },
        ".c-button--gooey .c-button__blobs": {
          height: "100%",
          filter: "url(#goo)",
          overflow: "hidden",
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "-3px",
          right: "-1px",
          zIndex: "-1",
        },
        ".c-button--gooey .c-button__blobs div": {
          backgroundColor: "hsl(var(--primary))",
          width: "34%",
          height: "100%",
          borderRadius: "100%",
          position: "absolute",
          transform: "scale(1.4) translateY(125%) translateZ(0)",
          transition: "all 700ms ease",
        },
        ".c-button--gooey .c-button__blobs div:nth-child(1)": {
          left: "-5%",
        },
        ".c-button--gooey .c-button__blobs div:nth-child(2)": {
          left: "30%",
          transitionDelay: "60ms",
        },
        ".c-button--gooey .c-button__blobs div:nth-child(3)": {
          left: "66%",
          transitionDelay: "25ms",
        },
        ".c-button--gooey:hover": {
          color: "hsl(var(--primary-foreground))",
        },
        ".c-button--gooey:hover .c-button__blobs div": {
          transform: "scale(1.4) translateY(0) translateZ(0)",
        },
      });
    },
  ],
};
