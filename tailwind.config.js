/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        panel: "rgba(9, 23, 45, 0.86)",
        line: "rgba(148, 197, 255, 0.16)",
        cyanSoft: "#67e8f9",
        blueTech: "#38bdf8"
      },
      boxShadow: {
        glow: "0 0 22px rgba(34, 211, 238, 0.18)"
      }
    }
  },
  plugins: []
};
