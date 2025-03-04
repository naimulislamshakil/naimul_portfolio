import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// color design tokens export
export const tokens = (mode) => ({
	...(mode === 'dark'
		? {
				grey: {
					100: '#e0e0e0',
					200: '#c2c2c2',
					300: '#a3a3a3',
					400: '#858585',
					500: '#666666',
					600: '#525252',
					700: '#3d3d3d',
					800: '#292929',
					900: '#141414',
				},
				greenAccent: {
					100: '#dbf5ee',
					200: '#b7ebde',
					300: '#94e2cd',
					400: '#70d8bd',
					500: '#4cceac',
					600: '#3da58a',
					700: '#2e7c67',
					800: '#1e5245',
					900: '#0f2922',
				},
				blueAccent: {
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				},
				purpleAccent: {
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
				},
				primary: {
					100: '#d0d1d5',
					200: '#a1a4ab',
					300: '#727681',
					400: '#1F2A40',
					500: '#141b2d',
					600: '#101624',
					700: '#0c101b',
					800: '#080b12',
					900: '#040509',
				},
		  }
		: {
				primary: {
					100: '#040509',
					200: '#080b12',
					300: '#0c101b',
					400: '#f2f0f0',
					500: '#141b2d',
					600: '#1F2A40',
					700: '#727681',
					800: '#a1a4ab',
					900: '#d0d1d5',
				},
				grey: {
					100: '#141414',
					200: '#292929',
					300: '#3d3d3d',
					400: '#525252',
					500: '#666666',
					600: '#858585',
					700: '#a3a3a3',
					800: '#c2c2c2',
					900: '#f5f5f5',
				},
				greenAccent: {
					100: '#0f2922',
					200: '#1e5245',
					300: '#2e7c67',
					400: '#3da58a',
					500: '#4cceac',
					600: '#70d8bd',
					700: '#94e2cd',
					800: '#b7ebde',
					900: '#dbf5ee',
				},
				blueAccent: {
					100: '#1e3a8a',
					200: '#1e40af',
					300: '#1d4ed8',
					400: '#2563eb',
					500: '#3b82f6',
					600: '#60a5fa',
					700: '#93c5fd',
					800: '#bfdbfe',
					900: '#dbeafe',
				},
				purpleAccent: {
					100: '#581c87',
					200: '#6b21a8',
					300: '#7e22ce',
					400: '#9333ea',
					500: '#a855f7',
					600: '#c084fc',
					700: '#d8b4fe',
					800: '#e9d5ff',
					900: '#f3e8ff',
				},
		  }),
});

export const themeSettings = (mode) => {
	const colors = tokens(mode);
	return {
		palette: {
			mode: mode,
			...(mode === 'dark'
				? {
						// Dark mode palette
						primary: {
							main: colors.blueAccent[500],
						},
						secondary: {
							main: colors.purpleAccent[500],
						},
						neutral: {
							dark: colors.grey[700],
							main: colors.grey[500],
							light: colors.grey[100],
						},
						background: {
							default: colors.grey[900],
						},
				  }
				: {
						// Light mode palette
						primary: {
							main: colors.blueAccent[500],
						},
						secondary: {
							main: colors.purpleAccent[500],
						},
						neutral: {
							dark: colors.grey[700],
							main: colors.grey[500],
							light: colors.grey[100],
						},
						background: {
							default: '#fcfcfc',
						},
				  }),
		},
		typography: {
			fontFamily: ['Source Sans 3', 'serif'].join(','),
			fontSize: 12,
			h1: {
				fontFamily: ['Source Sans 3', 'serif'].join(','),
				fontSize: 40,
			},
			h2: {
				fontFamily: ['Source Sans 3', 'serif'].join(','),
				fontSize: 32,
			},
			h3: {
				fontFamily: ['Source Sans 3', 'serif'].join(','),
				fontSize: 24,
			},
			h4: {
				fontFamily: ['Source Sans 3', 'serif'].join(','),
				fontSize: 20,
			},
			h5: {
				fontFamily: ['Source Sans 3', 'serif'].join(','),
				fontSize: 16,
			},
			h6: {
				fontFamily: ['Source Sans 3', 'serif'].join(','),
				fontSize: 14,
			},
		},
	};
};

// context for color mode
export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState('dark');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colorMode];
};
