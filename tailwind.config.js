module.exports = {
  purge: [],
  theme: {
    // 1em = 16px
    // [1200 - 1800] where normal styles apply

    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '128': '32rem',
      '30vw': '30vw',
      '35vw': '35vw',

    },
    fontFamily: {
      body: ['Myriad Pro']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.6rem',
      '4lg': '1.8rem',
      '4xl': '2rem',
      '5lg': '2.5rem',
      '5xl': '3rem',
      '6lg': '4rem',
      '6xl': '4.5rem',
    },

    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      '0': '0',
      auto: 'auto',
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '30rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5lg': '60rem',
      '5xl': '62rem',
      '6xl': '72rem',
      '10xl': '132rem',
      full: '100%',
      ...breakpoints(theme('screens')),
    }),
    maxHeight: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '30rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5lg': '60rem',
      '5xl': '62rem',
      '6xl': '72rem',
      '10xl': '132rem',
      full: '100%',
      ...breakpoints(theme('screens')),
    }),
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      '0': '0',
      full: '100%',
    },


    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),
    screens: {
      'huge-desktop': {
        // >1920px
        min: '120em',
      },
      'big-desktop': {
        // <1920px
        max: '120em',
      },
      'desktop': {
        // <1800px
        max: '112.5em',
      },
      'laptop': {
        // <13660px
        max: '85.375em'
      },
      'tab-land': {
        // <1200px
        max: '75em'
      },
      'tab-port': {
        //<900px
        max: '56.25em'
      },
      'tab-mini': {
        //<768px
        max: '48em'
      },
      'phone': {
        // <600px
        max: '37.5em'
      },
      'min-phone': {
        // <350px
        max: '21.875em'
      },
      'phone-up': {
        // <600px
        min: '37.5em'
      }

    },
    extend: {
      colors: {
        jp: {
          '100': '#2D3494',
          '200': '#323790'
        },
        'light': '#F6F7FB',
        studio: '#7A539D'
      },
      boxShadow: {
        card: '-2px 8px 10px rgba(0, 0, 0, 0.25)'
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2'
      },
      borderRadius: {
        'semi-card': '15px',
        card: '25px'
      },
      boxShadow: {
        card: '-2px 8px 10px rgba(0, 0, 0, 0.25)'
      },
    },
  },

  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',

          '@screen huge-desktop': {
            maxWidth: '1400px'
          },
          '@screen big-desktop': {
            maxWidth: '1180px'
          },
          '@screen desktop': {
            maxWidth: '900px'
          },
          '@screen tab-land': {
            maxWidth: '900px'
          },
          '@screen tab-port': {
            maxWidth: '100%'
          },
          '@screen phone': {
            maxWidth: '100%'
          },

        }
      });
    }
  ],
}
