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

          "primary": "#176F6B",

          "secondary": "#FFC000",

          "accent": "#FFEDD5",

          "neutral": "#4B5563",

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