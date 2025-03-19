import {
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Container,
	Grid,
	Typography,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { tokens } from '../theme';
import Project1 from '../assets/React Developer.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [filter, setFilter] = useState('all');

	const portfolioItems = [
		{
			id: 1,
			category: 'web',
			project: {
				alt: 'Full stack web developer',
				img: Project1,
				role: 'Full Stack Developer (Freelancer)',
				summary:
					'As part of a skilled 4-member team, I contributed to building CarDekho, a robust car buying and selling platform. I designed a responsive front-end with Next.js and TypeScript and developed efficient back-end services using Node.js and MongoDB. This collaborative effort resulted in a seamless, scalable, and feature-rich platform, empowering fast and user-friendly transactions for buyers and sellers.',
				Technologies: [
					'React',
					'Next.js',
					'Node.js',
					'Express.js',
					'Socket.io',
					'Material',
					'Mongoose',
					'MongoDB',
					'GraphQL',
					'Redux Toolkit',
					'Tailwind CSS',
					'UI/UX Design',
				],
				link: 'https://www.cardekho.com/',
			},
		},
		{
			id: 1,
			category: 'web',
			project: {
				alt: 'Full stack web developer',
				img: Project1,
				role: 'Full Stack Developer (Freelancer)',
				summary:
					'As part of a skilled 4-member team, I contributed to building CarDekho, a robust car buying and selling platform. I designed a responsive front-end with Next.js and TypeScript and developed efficient back-end services using Node.js and MongoDB. This collaborative effort resulted in a seamless, scalable, and feature-rich platform, empowering fast and user-friendly transactions for buyers and sellers.',
				Technologies: [
					'React',
					'Next.js',
					'Node.js',
					'Express.js',
					'Socket.io',
					'Material',
					'Mongoose',
					'MongoDB',
					'GraphQL',
					'Redux Toolkit',
					'Tailwind CSS',
					'UI/UX Design',
				],
				link: 'https://www.cardekho.com/',
			},
		},
		{
			id: 1,
			category: 'web',
			project: {
				alt: 'Full stack web developer',
				img: Project1,
				role: 'Full Stack Developer (Freelancer)',
				summary:
					'As part of a skilled 4-member team, I contributed to building CarDekho, a robust car buying and selling platform. I designed a responsive front-end with Next.js and TypeScript and developed efficient back-end services using Node.js and MongoDB. This collaborative effort resulted in a seamless, scalable, and feature-rich platform, empowering fast and user-friendly transactions for buyers and sellers.',
				Technologies: [
					'React',
					'Next.js',
					'Node.js',
					'Express.js',
					'Socket.io',
					'Material',
					'Mongoose',
					'MongoDB',
					'GraphQL',
					'Redux Toolkit',
					'Tailwind CSS',
					'UI/UX Design',
				],
				link: 'https://www.cardekho.com/',
			},
		},
	];

	// Filtering logic
	const filteredItems =
		filter === 'all'
			? portfolioItems
			: portfolioItems.filter((item) => item.category === filter);
	return (
		<Container maxWidth="xl" sx={{ my: 5 }}>
			<Typography
				variant="h2"
				fontWeight={700}
				sx={{
					color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
				}}
				textAlign="center"
			>
				Creative Digital Strategist for Impactful Results.
			</Typography>

			<Typography
				fontWeight={400}
				variant="body1"
				fontSize={16}
				sx={{
					color: `${colors.grey[200]}`,
					mt: '10px',
					textAlign: 'center',
				}}
			>
				I craft tailored strategies and cutting-edge solutions to empower
				businesses, enhance user engagement, and drive measurable success across
				digital platforms.
			</Typography>

			<Box textAlign="center" mt={3}>
				<Button
					variant="contained"
					sx={{
						mt: 1,
						fontWeight: 500,
						fontSize: 14,
						fontFamily: 'Poppins',
						padding: '10px 30px',
						background: theme.palette.mode === 'light' ? '#141414' : '#fff	',
						color: theme.palette.mode === 'light' ? '#fff' : '#141414',
					}}
					onClick={() => setFilter('all')}
				>
					All
				</Button>
				<Button
					variant="contained"
					sx={{
						ml: 1,
						mt: 1,
						fontWeight: 500,
						fontSize: 14,
						fontFamily: 'Poppins',
						padding: '10px 30px',
						background: theme.palette.mode === 'light' ? '#141414' : '#fff	',
						color: theme.palette.mode === 'light' ? '#fff' : '#141414',
					}}
					onClick={() => setFilter('ecom')}
				>
					E-Commerce Website
				</Button>
				<Button
					variant="contained"
					sx={{
						ml: 1,
						mt: 1,
						fontWeight: 500,
						fontSize: 14,
						fontFamily: 'Poppins',
						padding: '10px 30px',
						background: theme.palette.mode === 'light' ? '#141414' : '#fff	',
						color: theme.palette.mode === 'light' ? '#fff' : '#141414',
					}}
					onClick={() => setFilter('design')}
				>
					Booking Systems
				</Button>
				<Button
					variant="contained"
					sx={{
						ml: 1,
						mt: 1,
						fontWeight: 500,
						fontSize: 14,
						fontFamily: 'Poppins',
						padding: '10px 30px',
						background: theme.palette.mode === 'light' ? '#141414' : '#fff	',
						color: theme.palette.mode === 'light' ? '#fff' : '#141414',
					}}
					onClick={() => setFilter('app')}
				>
					Inventory Management Systems
				</Button>
				<Button
					variant="contained"
					sx={{
						ml: 1,
						mt: 1,
						fontWeight: 500,
						fontSize: 14,
						fontFamily: 'Poppins',
						padding: '10px 30px',
						background: theme.palette.mode === 'light' ? '#141414' : '#fff	',
						color: theme.palette.mode === 'light' ? '#fff' : '#141414',
					}}
					onClick={() => setFilter('app')}
				>
					Healthcare Applications
				</Button>
				<Button
					variant="contained"
					sx={{
						ml: 1,
						mt: 1,
						fontWeight: 500,
						fontSize: 14,
						fontFamily: 'Poppins',
						padding: '10px 30px',
						background: theme.palette.mode === 'light' ? '#141414' : '#fff	',
						color: theme.palette.mode === 'light' ? '#fff' : '#141414',
					}}
					onClick={() => setFilter('app')}
				>
					Startup Website
				</Button>
			</Box>

			<Grid container spacing={2} my={2} justifyContent="center">
				{filteredItems.map((item, i) => (
					<Grid key={i} item xs={12} md={6} lg={4}>
						<Card sx={{ width: '100%', borderRadius: '10px' }}>
							<CardContent>
								<Box>
									<img
										src={item?.project?.img}
										alt={item?.project?.alt}
										style={{ width: '100%' }}
									/>
								</Box>

								<Typography variant="body1" fontWeight={600}>
									{item?.project?.role}
								</Typography>

								<Box textAlign="start">
									{item?.project?.Technologies?.map((skill, i) => (
										<Chip
											sx={{ mt: 1, ml: 1 }}
											key={i}
											label={skill}
											variant="outlined"
										/>
									))}
								</Box>

								<Typography
									fontWeight={400}
									variant="body1"
									fontSize={16}
									sx={{
										color: `${colors.grey[200]}`,
										mt: '10px',
									}}
								>
									{item?.project?.summary}
								</Typography>

								<Link
									target="-"
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
									to={item?.project?.link}
								>
									<Button
										variant="contained"
										// onClick={() => goToAboutMe()}
										sx={{
											mt: 2,
											fontWeight: 500,
											fontSize: 14,
											fontFamily: 'Poppins',
											padding: '10px 30px',
											background:
												theme.palette.mode === 'light' ? '#141414' : '#fff	',
											color:
												theme.palette.mode === 'light' ? '#fff' : '#141414',
										}}
									>
										Visite Website
									</Button>
								</Link>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Portfolio;
