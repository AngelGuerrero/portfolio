module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: [
          'header header header',
          'left   main   right',
          'footer footer footer'
        ]
      },
      gridTemplateColumns: {
        layout: '200px auto 200px'
      },
      gridTemplateRows: {
        layout: `60px
                 auto
                 60px`
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        transparent: 'transparent',
        'custom-main': {
          100: '#ccced0',
          200: '#999ca1',
          300: '#666b72',
          400: '#333943',
          500: '#000814',
          600: '#000610',
          700: '#00050c',
          800: '#000308',
          900: '#000204'
        },
        'custom-accent': {
          100: '#d8fff2',
          200: '#b1ffe5',
          300: '#89ffd8',
          400: '#62ffcb',
          500: '#3bffbe',
          600: '#2fcc98',
          700: '#239972',
          800: '#18664c',
          900: '#0c3326'
        },
        'custom-emphasis': {
          100: '#ffdaef',
          200: '#ffb4e0',
          300: '#ff8fd0',
          400: '#ff69c1',
          500: '#ff44b1',
          600: '#cc368e',
          700: '#99296a',
          800: '#661b47',
          900: '#330e23'
        },
        'custom-contrast': {
          100: '#fffadf',
          200: '#fff5bf',
          300: '#fff19f',
          400: '#ffec7f',
          500: '#ffe75f',
          600: '#ccb94c',
          700: '#998b39',
          800: '#665c26',
          900: '#332e13'
        },
        'custom-contrast-secondary': {
          100: '#fff8d3',
          200: '#fff1a7',
          300: '#feea7c',
          400: '#fee350',
          500: '#fedc24',
          600: '#cbb01d',
          700: '#988416',
          800: '#66580e',
          900: '#332c07'
        },
        'custom-green': {
          100: '#ddfaed',
          200: '#bbf5db',
          300: '#99f1ca',
          400: '#77ecb8',
          500: '#55e7a6',
          600: '#44b985',
          700: '#338b64',
          800: '#225c42',
          900: '#112e21'
        },
        'custom-blue': {
          100: '#ccf7ff',
          200: '#99efff',
          300: '#66e8ff',
          400: '#33e0ff',
          500: '#00d8ff',
          600: '#00adcc',
          700: '#008299',
          800: '#005666',
          900: '#002b33'
        }
      },
      backgroundColor: theme => theme('colors'),
      backgroundImage: {
        none: 'none',
        'hero-texture':
          'linear-gradient(45deg, #05132b, #14294e, #2e68d4, #845ec2, #d65db1, #831c64, #ff6f91, #ff9671, #ffe75f, #92ff5f)',
        pattern: 'url(~/assets/images/pattern.svg)',
        'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
        'gradient-to-tr':
          'linear-gradient(to top right, var(--gradient-color-stops))',
        'gradient-to-r':
          'linear-gradient(to right, var(--gradient-color-stops))',
        'gradient-to-br':
          'linear-gradient(to bottom right, var(--gradient-color-stops))',
        'gradient-to-b':
          'linear-gradient(to bottom, var(--gradient-color-stops))',
        'gradient-to-bl':
          'linear-gradient(to bottom left, var(--gradient-color-stops))',
        'gradient-to-l':
          'linear-gradient(to left, var(--gradient-color-stops))',
        'gradient-to-tl':
          'linear-gradient(to top left, var(--gradient-color-stops))'
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        400: '400%'
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none'
      },
      fontFamily: {
        'cy-regular': ['Cy'],
        'cy-bold': ['Cy Extra Bold'],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      },
      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite'
      },
      keyframes: {
        spin: {
          to: { transform: 'rotate(360deg)' }
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' }
        },
        pulse: {
          '50%': { opacity: '.5' }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        }
      }
    }
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')]
}
