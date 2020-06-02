module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      body: ['Myriad Set Pro']
    },
    extend: {
      colors: {
        jacksons_purple: {
          '100': '#2D3494',
          '200': '#323790',
        },
        'ghost-white': '#F6F7FB',
        'studio': '#7A539D'
      },
      zIndex: {
        '-1': '-1'
      },
      borderRadius: {
        'semi-card': '15px',
        'card': '25px'
      },
      spacing: {
        '7': '1.75rem',
        '18': '4.5rem',
        '28': '7rem'
      },
      maxWidth: {
        '7xl': '82.5rem'
      }
    },
  },

  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  corePlugins: {
    container: false
  },
  plugins: [

    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '1180px',
          },
        }
      })
    },

  ]
}