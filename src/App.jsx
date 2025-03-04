import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { ColorModeContext, useMode } from './theme';
import Navbar from './Compoments/NAvbar';
import { Route, Routes } from 'react-router-dom';
import {
	AboutPage,
	BlogPage,
	ContactPage,
	HomePage,
	PortfolioPage,
	ServicePage,
} from './Route';
import ScrollToTop from 'react-scroll-to-top';

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Navbar />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about_us" element={<AboutPage />} />
					<Route path="/contact_us" element={<ContactPage />} />
					<Route path="/service" element={<ServicePage />} />
					<Route path="/portfolio" element={<PortfolioPage />} />
					<Route path="/blog" element={<BlogPage />} />
				</Routes>
				<ScrollToTop smooth />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
