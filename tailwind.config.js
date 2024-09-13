/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "decor-yellow": "url('/src/assets/icons/decor-yellow.svg')",
      "slider-button": "url('/src/assets/icons/arrow.svg')",
      "banner-gradient":
        "linear-gradient(360deg, #e0c340 0%, #dfc23e 3.93%, #e1c441 7.23%, #e3c743 10.23%, #e4c542 13.14%, #e6c744 16.22%, #e7c845 19.84%, #e5c643 24.38%, #e6c945 31%, #e3c743 37.19%, #e9ca48 43.33%, #edce49 50.36%, #f0d44c 56.57%, #f4d84f 62.71%, #f6da52 67.12%, #f7db53 73.77%, #f9dd55 79.08%, #f9df56 85.64%, #fae157 93.5%, #f9df56 100%)",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}
