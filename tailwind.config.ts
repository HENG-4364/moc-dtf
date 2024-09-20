/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  important: true,
  theme: {
  	screens: {
  		xs: '540px',
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px',
  		lg_992: '992px'
  	},
  	fontFamily: {
  		libre_franklin: ["var(--font-libre_franklin)"]
  	},
  	container: {
  		center: 'true',
  		padding: {
  			DEFAULT: '12px',
  			sm: '1rem',
  			lg: '45px',
  			xl: '5rem',
  			'2xl': '13rem'
  		}
  	},
  	extend: {
  		colors: {
  			dark: '#3c4858',
  			black: '#161c2d',
  			'dark-footer': '#192132',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
  			DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
  			md: '0 5px 13px rgb(60 72 88 / 0.20)',
  			lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
  			xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
  			'2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
  			inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
  			testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)'
  		},
  		fontSize: {
  			base: ["15px", "28px"],
  			lg: ["17px", "28px"]
  		},
  		spacing: {
  			'0.75': '0.1875rem',
  			'3.25': '0.8125rem'
  		},
  		maxWidth: '({ theme, breakpoints }) => ({\\r\\n        1200: "71.25rem",\\r\\n        992: "60rem",\\r\\n        768: "45rem",\\r\\n      })',
  		zIndex: {
  			'1': '1',
  			'2': '2',
  			'3': '3',
  			'999': '999'
  		},
  		fontFamily: {
  			arial: ["Arial", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
