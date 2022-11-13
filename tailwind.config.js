module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/topBanner3.jpg')",
        
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#FFEDD5",

          "neutral": "#8391AD",
          
          "base-100": "#FFFFFF",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#323848",

          "error": "#FA5C5C",
          "successs":"#5433FF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}