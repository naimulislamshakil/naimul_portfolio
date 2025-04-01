import { Helmet } from 'react-helmet';

const MetaTags = ({ title, description }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content="Naimul - Full Stack Web Developer" />
			<meta
				name="keywords"
				content="Full Stack Web Developer,Django, Python, Web Development, React, Node.js, Frontend, Backend, JavaScript, Portfolio"
			/>
		</Helmet>
	);
};

export const HomeMeta = () => (
	<MetaTags
		title="Full Stack Web Developer | Naimul"
		description="I'm Naimul, a Full Stack Web Developer creating high-performance websites and web applications. Let's build something amazing together!"
	/>
);

export const AboutMeta = () => (
	<MetaTags
		title="About Me | Full Stack Web Developer"
		description="Learn more about Naimul, a skilled Full Stack Web Developer with a passion for building modern, scalable, and high-quality web solutions."
	/>
);

export const ServicesMeta = () => (
	<MetaTags
		title="Web Development Services | Full Stack Web Developer"
		description="Professional Full Stack Web Development services tailored to your business needs. From frontend to backend, I deliver top-notch web solutions."
	/>
);

export const PortfolioMeta = () => (
	<MetaTags
		title="My Work | Full Stack Web Developer Portfolio"
		description="Explore my portfolio showcasing dynamic and responsive web projects. See how I craft seamless user experiences with modern technologies."
	/>
);

export const ContactMeta = () => (
	<MetaTags
		title="Contact Me | Full Stack Web Developer"
		description="Looking for a reliable Full Stack Web Developer? Let's connect! Contact me today to discuss your web development project."
	/>
);
