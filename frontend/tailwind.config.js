/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1621",
          alt: "#121D2B",
          card: "#152233",
          line: "#24374C",
        },
        paper: "#EDEAE2",
        muted: "#8B98A8",
        teal: "#5FB8AA",
        amber: "#E8A854",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(143,171,178,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(143,171,178,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};
