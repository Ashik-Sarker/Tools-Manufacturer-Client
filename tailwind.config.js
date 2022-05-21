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
      },
      },
    ],
  },
  plugins: [require("daisyui")],
}
