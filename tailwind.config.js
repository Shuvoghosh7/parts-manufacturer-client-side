module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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

          "warning": "#DF7E07",

          "error": "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}