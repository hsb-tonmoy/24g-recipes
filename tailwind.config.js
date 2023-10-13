/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Brandon Grotesque', 'sans-serif'],
        secondary: ['Writable Story', 'sans-serif']
      },
      backgroundImage: {
        desktop: "url('/src/assets/bg_desktop.png')",
        tablet: "url('/src/assets/bg_tablet.png')",
        mobile: "url('/src/assets/bg_mobile.png')"
      }
    }
  },
  plugins: []
}
