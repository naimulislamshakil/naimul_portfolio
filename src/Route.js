import { lazy } from 'react';

const HomePage = lazy(() => import('./Pages/HomePage.jsx'));
const AboutPage = lazy(() => import('./Pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./Pages/ContactPage.jsx'));
const ServicePage = lazy(() => import('./Pages/ServicePage.jsx'));
const PortfolioPage = lazy(() => import('./Pages/PortfolioPage.jsx'));
const BlogPage = lazy(() => import('./Pages/BlogPage.jsx'));

export {
	HomePage,
	AboutPage,
	ContactPage,
	ServicePage,
	PortfolioPage,
	BlogPage,
};
