/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // colors: {
      //   primary1: '#001219',
      //   primary2: '#005f73',
      //   primary3: '#0a9396',
      //   primary4: '#94d2bd',
      //   primary5: '#e9d8a6',
      //   secondary1: '#ee9b00',
      //   secondary2: '#ca6702',
      //   secondary3: '#bb3e03',
      //   secondary4: '#ae2012',
      //   secondary5: '#9b2226',
      //   secondary6: '#000000',
      // },
      animation: {
        'text-gradient': 'text-gradient 3s linear infinite',
      },
      keyframes: {
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
      },
    },
  },
  plugins: [],
}
