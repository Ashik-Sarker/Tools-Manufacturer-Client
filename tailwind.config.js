module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
      mytheme: {
        "primary": "#0FCFEC",
        "secondary": "#28aaa9",
        "accent": "#00033e",
        "neutral": "#3A4256",
        "base-100": "#ffffff",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
      },
    ],
  },
  plugins: [require("daisyui")],
}
