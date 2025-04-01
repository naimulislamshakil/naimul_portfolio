import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = () => {
	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Naimul - Full Stack Web Developer',
		url: 'https://naimulislamshakil.me',
		description:
			'I am a professional Full Stack Web Developer specializing in React, Node.js, and MongoDB.',
		author: {
			'@type': 'Person',
			name: 'Naimul',
		},
		inLanguage: 'en',
		publisher: {
			'@type': 'Organization',
			name: 'Naimul',
			logo: {
				'@type': 'ImageObject',
				url: 'https://naimulislamshakil.me/logo.png',
			},
		},
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: [
				{
					'@type': 'WebPage',
					name: 'Home',
					url: 'https://naimulislamshakil.me',
					description:
						'Welcome to my portfolio. I build modern, fast, and SEO-friendly websites.',
				},
				{
					'@type': 'WebPage',
					name: 'About Me',
					url: 'https://naimulislamshakil.me/about-me',
					description:
						'Learn more about Naimul, a Full Stack Web Developer with expertise in React, Node.js, and MongoDB.',
				},
				{
					'@type': 'WebPage',
					name: 'Services',
					url: 'https://naimulislamshakil.me/services',
					description:
						'Explore my professional web development services, including front-end, back-end, and full-stack development.',
				},
				{
					'@type': 'WebPage',
					name: 'Portfolio',
					url: 'https://naimulislamshakil.me/portfolio',
					description:
						'Check out my past projects showcasing modern web development solutions.',
				},
				{
					'@type': 'WebPage',
					name: 'Contact',
					url: 'https://naimulislamshakil.me/contact',
					description:
						'Get in touch with me for web development projects and collaborations.',
				},
			],
		},
	};

	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(schemaData)}</script>
		</Helmet>
	);
};

export default SchemaMarkup;
