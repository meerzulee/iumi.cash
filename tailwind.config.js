module.exports = {
	purge: [],
	theme: {
		fontFamily: {
			body: [ 'Myriad Set Pro' ]
		},
		extend: {
			colors: {
				jacksons_purple: {
					'100': '#2D3494',
					'200': '#323790'
				},
				'ghost-white': '#F6F7FB',
				studio: '#7A539D'
			},
			zIndex: {
				'-1': '-1'
			},
			borderRadius: {
				'semi-card': '15px',
				card: '25px'
			},
			spacing: {
				'7': '1.75rem',
				'18': '4.5rem',
				'28': '7rem'
			},
			boxShadow: {
				card: '-2px 8px 10px rgba(0, 0, 0, 0.25)'
			},
			maxWidth: {
				xs: '20rem',
				xs2: '21.375rem',
				xl: '38.75rem',
				'2xl': '43rem',
				'7xl': '82.5rem'
			},

			screens: {
				'big-desktop': {
					min: '1800px'
				},
				desktop: {
					max: '1800px'
				},
				'big-laptop': {
					max: '1600px'
				},
				laptop: {
					max: '1366px'
				},
				'laptop-only': {
					min: '1280px',
					max: '1366px'
				},
				xl: {
					min: '1281'
				},
				tablet: {
					max: '1279px'
				},
				'tablet-port': {
					max: '900px'
				},
				phone: {
					max: '600px'
				},
				iphone: {
					max: '450px'
				}
			}
		}
	},

	variants: {
		textColor: [ 'responsive', 'hover', 'focus', 'group-hover' ],
		boxShadow: [ 'responsive', 'hover', 'focus', 'active', 'group-hover' ]
	},
	corePlugins: {
		container: false
	},
	plugins: [
		function({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',

					'@screen big-desktop': {
						maxWidth: '1180px'
					},
					'@screen desktop': {
						maxWidth: '1180px'
					},
					'@screen big-laptop': {
						maxWidth: '1000px'
					},
					'@screen laptop': {
						maxWidth: '900px'
					},
					'@screen tablet': {
						maxWidth: '800px'
					},
					'@screen tablet-port': {
						maxWidth: '100%'
					}
				}
			});
		}
	]
};
