/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Main Brand (Purple)
        primary: {
          DEFAULT: "#9b36e2",
          light: "#e9d5f7",
          dark: "#4a1a6c",
        },
        background: {
          light: "#f7f6f8",
          dark: "#1a1121",
        },
        surface: {
          light: "#ffffff",
          dark: "#2d2438",
        },
        text: {
          main: "#150e1b",
          sub: "#5c4f66",
          light: "#f0eef2", // Dark mode main text
          dark: "#ada3b8",  // Dark mode sub text
        },

        // Accents
        accent: {
          sage: "#8da399",
          lavender: "#dcd6e5",
          muted: "#dcd6e8",
          warm: "#f3eee8",
        },
        success: "#36e29b",

        // Reflection Screen Specifics
        reflection: {
          primary: "#5D8AA8",
          secondary: "#D8CFC4",
          bg: {
            light: "#FDFBF7",
            dark: "#1C1C1E",
          },
          surface: {
            light: "#F2EFE9",
            dark: "#2C2C2E",
          },
          text: {
            main: "#4A4A4A",
            light: "#8E8E93",
          },
        },

        // Circle Creation Specifics
        circle: {
          primary: "#7d9e84",
          dark: "#5e7a63",
          bg: {
            light: "#f4f7f5",
            dark: "#1a211c",
          },
          surface: {
            light: "#ffffff", // Same as main
            dark: "#242e26",
          },
        },

        // Welcome Screen Specifics
        welcome: {
          bg: {
            light: "#fefbf6",
            dark: "#1a1121", // Same as main
          },
          text: {
            main: "#2d2436",
            sub: "#6b5d78",
          }
        }
      },
      fontFamily: {
        display: ["Inter"], // Note: Custom fonts require loading via expo-font
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
}
