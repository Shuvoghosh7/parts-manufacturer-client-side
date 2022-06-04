module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/bg1.jpg')",
        
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
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}