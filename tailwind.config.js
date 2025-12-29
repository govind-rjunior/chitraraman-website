/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fef7ed',
          100: '#fdecd4',
          200: '#fad5a8',
          300: '#f6b871',
          400: '#f19038',
          500: '#ed7214',
          600: '#de580a',
          700: '#b8400b',
          800: '#933310',
          900: '#772c10',
          950: '#401406',
        },
        maroon: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9ba',
          400: '#ed7896',
          500: '#e04d75',
          600: '#cb2d5d',
          700: '#ab204b',
          800: '#8f1d42',
          900: '#7a1c3d',
          950: '#440a1d',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f5efe0',
          300: '#ede2c8',
          400: '#e2cea6',
          500: '#d5b686',
          600: '#c49b67',
          700: '#a57d52',
          800: '#876646',
          900: '#6f543c',
          950: '#3b2b1e',
        },
        temple: {
          gold: '#d4a847',
          copper: '#b87333',
          bronze: '#cd7f32',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        display: ['Georgia', 'Cambria', 'serif'],
      },
      backgroundImage: {
        'texture': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a847' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
