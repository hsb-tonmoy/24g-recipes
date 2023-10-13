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
        desktop: "url('/src/images/bg_desktop.png')",
        tablet: "url('/src/images/bg_tablet.png')",
        mobile: "url('/src/images/bg_mobile.png')"
      }
    }
  },
  plugins: []
}
