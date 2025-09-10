module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#555879',       // Dark Blue Gray
        secondary: '#98A1BC',     // Light Blue Gray
        accent: '#DED3C4',        // Light Beige
        lightAccent: '#F4EBD3',   // Very Light Beige
      }
    }
  },
  plugins: [],
}
