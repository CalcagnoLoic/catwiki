/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-sm": "url('/public/img/HeroImagesm.png')",
                "hero-md": "url('/public/img/HeroImagemd.png')",
                "hero-lg": "url('/public/img/HeroImagelg.png')",
            },
            colors: {
                "main-color": "rgba(41, 21, 7, 1)",
                "secondary-color": "rgba(41, 21, 7, 0.6)",
            }, 
            fontFamily: {
                "montserrat": "url('/src/assets/fonts/Montserrat/static/Montserrat-Regular.ttf'"
            }
        },
    },
    plugins: [],
};
