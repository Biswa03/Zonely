/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'Raleway', 'Nunito', 'Roboto', 'sans-serif'],
        // sans: ['Arial', 'Helvetica', 'Tahoma', 'Verdana', 'sans-serif'],
        // sans: ['var(--font-geist-sans)', 'sans-serif'],
        serif: ['Georgia', 'Merriweather', 'Times New Roman', 'serif'],
        mono: ['Courier New', 'Lucida Console', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;