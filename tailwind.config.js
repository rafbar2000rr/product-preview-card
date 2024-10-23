// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {colors:
//       {
//         darkcyan:'hsl(158, 36%, 37%)',
//         cream:'hsl(30, 38%, 92%)',
//         verydarkblue: 'hsl(212, 21%, 14%)',
//         darkgrayishblue: 'hsl(228, 12%, 48%)',
//         white: 'hsl(0, 0%, 100%)',
//       },
    
//     fontFamily: {
     
//       montserrat: ['Montserrat', 'sans-serif'],
//       fraunces: ['Fraunces', 'serif'],
//     },
//     screens: {
//       'custom':'376px', // Define custom breakpoint for 375px
//     },
//   },
// },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkcyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        verydarkblue: 'hsl(212, 21%, 14%)',
        darkgrayishblue: 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      screens: {
        'custom':'768px', // Define custom breakpoint for 376px
      },
    },
  },
  plugins: [],
}
