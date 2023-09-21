/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#059dff",
          secondary: "#E8481D",
          neutral: "#FFFFFF",
          "base-100": "#0B0016",
        }
      }
    ]
  }
}
