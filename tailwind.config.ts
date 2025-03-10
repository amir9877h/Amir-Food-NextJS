import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'primary-main': '#FF00A6',
  			'primary-dark': '#E00096',
  			'primary-light': '#FF38AC',
  			'primary-overlay': '#FFFFFF',
  			'primary-alphaLight': 'rgba(255,0,166,0.06)',
  			'primary-alphaMedium': 'rgba(255,0,166,0.12)',
  			'primary-alphaHigh': 'rgba(255,0,166,0.24)',
  			'secondary-main': '#00B862',
  			'secondary-dark': '#008542',
  			'secondary-light': '#18C775',
  			'secondary-overlay': '#FFFFFF',
  			'secondary-alphaLight': 'rgba(0,133,66,0.06)',
  			'secondary-alphaMedium': 'rgba(0,133,66,0.1)',
  			'secondary-alphaHigh': 'rgba(0,133,66,0.2)',
  			'black-alphaMedium': '#0000003D',
  			'surface-main': '#F9FAFB',
  			'surface-dark': '#EBEDF0',
  			'surface-light': '#FFFFFF',
  			'surface-overlay': '#e7e8e9',
  			'surface-alphaLight': 'rgba(249,250,251,0.06)',
  			'surface-alphaMedium': 'rgba(249,250,251,0.12)',
  			'surface-alphaHigh': 'rgba(249,250,251,0.24)',
  			'carbon-main': '#3A3D42',
  			'carbon-dark': '#181B1F',
  			'carbon-light': '#53565C',
  			'carbon-overlay': '#FFFFFF',
  			'carbon-alphaLight': 'rgba(58,61,66,0.06)',
  			'carbon-alphaMedium': 'rgba(58,61,66,0.12)',
  			'carbon-alphaHigh': 'rgba(24,28,32,0.2)',
  			'alert-main': '#FA284B',
  			'alert-dark': '#E00025',
  			'alert-light': '#FF3D5D',
  			'alert-overlay': '#FFFFFF',
  			'alert-alphaLight': 'rgba(250,40,75,0.04)',
  			'alert-alphaMedium': 'rgba(250,40,75,0.12)',
  			'alert-alphaHigh': 'rgba(250,40,75,0.24)',
  			'attention-main': '#FACB0F',
  			'attention-dark': '#9E6900',
  			'attention-light': '#FFD83D',
  			'attention-overlay': '#000000',
  			'attention-alphaLight': 'rgba(250,203,15,0.1)',
  			'attention-alphaMedium': 'rgba(250,203,15,0.2)',
  			'attention-alphaHigh': 'rgba(250,203,15,0.36)',
  			'inactive-main': '#EDEFF0',
  			'inactive-dark': '#A6AAAD',
  			'inactive-light': '#EDEFF0',
  			'inactive-overlay': '#EDEFF0',
  			'inactive-alphaLight': '#EDEFF0',
  			'inactive-alphaMedium': '#EDEFF0',
  			'inactive-alphaHigh': '#EDEFF0',
  			white2: '#f4f4f4',
  			'gray1-color': '#9d9fa4',
  			'gray2-color': '#ddd',
  			'gray3-color': '#babac0',
  			'gray4-color': '#a0a0a5',
  			'gray5-color': '#a3a3a3',
  			'gray6-color': '#e6e6e6',
  			'golden-yellow-color': '#fd0',
  			'tangerine-yellow-color': '#ffce00',
  			'snappExpress-color': '#ff661f',
  			'modal-backdrop': '#40404066',
  			'body-color': '#F9FAFB',
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
  			'shadows-inset': 'inset 0px 1px 6px rgba(0,0,0,0.04)',
  			'shadows-small': '0px 1px 0px rgba(58,61,66,0.06),0px 2px 8px -2px rgba(0,0,0,0.05)',
  			'shadows-medium': '0px 1px 0px rgba(58,61,66,0.06),0px 4px 16px -8px rgba(0,0,0,0.2)',
  			'shadows-high': '0px 1px 0px rgba(58,61,66,0.06),0px 8px 32px -16px rgba(0,0,0,0.3)',
  			'shadows-modal': '0px 2px 8px rgba(0,0,0,0.08),0px 8px 32px rgba(0,0,0,0.16)',
  			head: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
