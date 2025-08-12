/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f8ff",
          100: "#e7f0ff",
          200: "#cfe1ff",
          300: "#a7c5ff",
          400: "#7ea6ff",
          500: "#4f84ff",
          600: "#2e63f7",
          700: "#214dc4",
          800: "#183a93",
          900: "#122a6b"
        }
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } }
      },
      animation: { float: "float 6s ease-in-out infinite" }
    }
  },
  plugins: []
}
