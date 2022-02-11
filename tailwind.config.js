const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'hero-background': "url('/home/home_head.webp')",
                'footer-background': "url('/home/home_footer.webp')",
                'tour-background': "url('/tours/tour_background_new.webp')",
                'tour-appeal': "url('/tours/tour_appeal.webp')",
                'hero-background_i': "url('/home/home_head.jpg')",
                'footer-background_i': "url('/home/home_footer.jpg')",
                'tour-background_i': "url('/tours/tour_background_new.jpg')",
                'tour-appeal_i': "url('/tours/tour_appeal.jpg')",
                'important-background': "url('/shapeImportant.svg')"
            })
        },
        colors: {
            background: {
                100: '#f1f5f9',
                200: '#f0eff0'
            },
            primary: {
                100: '#37BADB',
                200: '#3D98C1',
                300: '#27517A',
                800: '#3ACCA3',
                900: '#ffd800',
                910: '#FFE25A',
            },
            transparent: 'transparent',
            black: colors.black,
            white: colors.white,
            gray: colors.neutral,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            purple: colors.purple,
            blue: colors.blue,
            violet: colors.violet,
            green: colors.green,
            pink: colors.pink,
            fuchsia: colors.fuchsia,
            rose: colors.rose
        },
        fontFamily: {
            body: ['Mulish']
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
