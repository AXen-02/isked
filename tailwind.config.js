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
    rotate: {
      "-60": "-60deg",
      60: "60deg",
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
        pulse00: {
          "0%": {
            WebkitTransform: "scale(1)",
            transform: "scale(1)",
          },
          "50%": {
            WebkitTransform: "scale(0.01)",
            transform: "scale(0.01)",
          },
          "100%": {
            WebkitTransform: "scale(1)",
            transform: "scale(1)",
          },
        },
        fade00: {
          "0%": {
            background: "#252525",
          },
          "50%": {
            background: "hsl(var(--primary))",
          },
          "100%": {
            background: "hsl(var(--muted))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shadow: "shadow 0.5s linear infinite",
        jump: "jump 0.5s linear infinite",
        rotBGimg: "rotBGimg 5s linear infinite",
        pulse00: "pulse00 2s infinite",
        fade00: "fade00 2s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        // GOOEY BUTTON
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
        // LOGO BUTTON
        ".l-button": {
          margin: "0",
          height: "auto",
          background: "transparent",
          padding: "0",
          border: "none",
        },
        ".l-button": {
          "--border-right": "4px",
          "--text-stroke-color": "hsl(var(--secondary-foreground))",
          "--animation-color": "hsl(var(--primary))",
          "--fs-size": "3em",
          letterSpacing: "3px",
          textDecoration: "none",
          fontSize: "var(--fs-size)",
          fontFamily: "Arial",
          position: "relative",
          textTransform: "lowercase",
          color: "transparent",
          WebkitTextStroke: "1px var(--text-stroke-color)",
        },
        ".hover-text": {
          position: "absolute",
          boxSizing: "border-box",
          content: "attr(data-text)",
          color: "var(--animation-color)",
          width: "0%",
          inset: "0",
          borderRight: "var(--border-right) solid var(--animation-color)",
          overflow: "hidden",
          transition: "1s",
          WebkitTextStroke: "1px var(--animation-color)",
        },
        ".l-button:hover .hover-text": {
          width: "100%",
          filter: "drop-shadow(0 0 23px var(--animation-color))",
        },
        // HEXA LOADER
        ".socket": {
          width: "200px",
          height: "200px",
          position: "absolute",
          left: "50vw",
          transform: "translateX(-50%)",
          top: "50vh",
          transform: "translateY(-50%)",
        },
        ".hex-brick": {
          background: "hsl(var(--primary))",
          width: "30px",
          height: "17px",
          position: "absolute",
          top: "5px",
          animation: "fade00 2s infinite",
        },
        ".h2": {
          transform: "rotate(60deg)",
        },
        ".h3": {
          transform: "rotate(-60deg)",
        },
        ".gel": {
          height: "30px",
          width: "30px",
          transition: "all .3s",
          WebkitTransition: "all .3s",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".center-gel": {
          marginLeft: "-15px",
          marginTop: "-15px",
          animation: "pulse00 2s infinite",
        },
        ".c1": {
          marginLeft: "-47px",
          marginTop: "-15px",
        },
        ".c2": {
          marginLeft: "-31px",
          marginTop: "-43px",
        },
        ".c3": {
          marginLeft: "1px",
          marginTop: "-43px",
        },
        ".c4": {
          marginLeft: "17px",
          marginTop: "-15px",
        },
        ".c5": {
          marginLeft: "-31px",
          marginTop: "13px",
        },
        ".c6": {
          marginLeft: "1px",
          marginTop: "13px",
        },
        ".c7": {
          marginLeft: "-63px",
          marginTop: "-43px",
        },
        ".c8": {
          marginLeft: "33px",
          marginTop: "-43px",
        },
        ".c9": {
          marginLeft: "-15px",
          marginTop: "41px",
        },
        ".c10": {
          marginLeft: "-63px",
          marginTop: "13px",
        },
        ".c11": {
          marginLeft: "33px",
          marginTop: "13px",
        },
        ".c12": {
          marginLeft: "-15px",
          marginTop: "-71px",
        },

        ".c13": {
          marginLeft: "-47px",
          marginTop: "-71px",
        },

        ".c14": {
          marginLeft: " 17px",
          marginTop: "-71px",
        },

        ".c15": {
          marginLeft: "-47px",
          marginTop: "41px",
        },

        ".c16": {
          marginLeft: " 17px",
          marginTop: "41px",
        },

        ".c17": {
          marginLeft: "-79px",
          marginTop: "-15px",
        },

        ".c18": {
          marginLeft: " 49px",
          marginTop: "-15px",
        },

        ".c19": {
          marginLeft: "-63px",
          marginTop: "-99px",
        },

        ".c20": {
          marginLeft: " 33px",
          marginTop: "-99px",
        },

        ".c21": {
          marginLeft: "1px",
          marginTop: "-99px",
        },

        ".c22": {
          marginLeft: "-31px",
          marginTop: "-99px",
        },

        ".c23": {
          marginLeft: "-63px",
          marginTop: "69px",
        },

        ".c24": {
          marginLeft: " 33px",
          marginTop: "69px",
        },

        ".c25": {
          marginLeft: "1px",
          marginTop: "69px",
        },

        ".c26": {
          marginLeft: "-31px",
          marginTop: "69px",
        },

        ".c27": {
          marginLeft: "-79px",
          marginTop: "-15px",
        },

        ".c28": {
          marginLeft: "-95px",
          marginTop: "-43px",
        },

        ".c29": {
          marginLeft: "-95px",
          marginTop: "13px",
        },

        ".c30": {
          marginLeft: " 49px",
          marginTop: "41px",
        },

        ".c31": {
          marginLeft: "-79px",
          marginTop: "-71px",
        },

        ".c32": {
          marginLeft: "-111px",
          marginTop: "-15px",
        },

        ".c33": {
          marginLeft: " 65px",
          marginTop: "-43px",
        },

        ".c34": {
          marginLeft: " 65px",
          marginTop: "13px",
        },

        ".c35": {
          marginLeft: "-79px",
          marginTop: "41px",
        },

        ".c36": {
          marginLeft: " 49px",
          marginTop: "-71px",
        },

        ".c37": {
          marginLeft: " 81px",
          marginTop: "-15px",
        },
        ".r1": {
          animationName: "pulse00",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationDelay: ".2s",
          WebkitAnimationName: "pulse00",
          WebkitAnimationDuration: "2s",
          WebkitAnimationIterationCount: "infinite",
          WebkitAnimationDelay: ".2s",
        },
        ".r2": {
          animationName: "pulse00",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationDelay: ".4s",
          WebkitAnimationName: "pulse00",
          WebkitAnimationDuration: "2s",
          WebkitAnimationIterationCount: "infinite",
          WebkitAnimationDelay: ".4s",
        },
        ".r3": {
          animationName: "pulse00",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationDelay: ".6s",
          WebkitAnimationName: "pulse00",
          WebkitAnimationDuration: "2s",
          WebkitAnimationIterationCount: "infinite",
          WebkitAnimationDelay: ".6s",
        },
        ".r1 > .hex-brick": {
          animationName: "fade00",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationDelay: ".2s",
          WebkitAnimationName: "fade00",
          WebkitAnimationDuration: "2s",
          WebkitAnimationIterationCount: "infinite",
          WebkitAnimationDelay: ".2s",
        },
        ".r2 > .hex-brick": {
          animationName: "fade00",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationDelay: ".4s",
          WebkitAnimationName: "fade00",
          WebkitAnimationDuration: "2s",
          WebkitAnimationIterationCount: "infinite",
          WebkitAnimationDelay: ".4s",
        },
        ".r3 > .hex-brick": {
          animationName: "fade00",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationDelay: ".6s",
          WebkitAnimationName: "fade00",
          WebkitAnimationDuration: "2s",
          WebkitAnimationIterationCount: "infinite",
          WebkitAnimationDelay: ".6s",
        },
      });
    },
  ],
};
