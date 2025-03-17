import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { tokens } from '../theme';
import { portfolioItems } from '../data/Protfolio';

const Portfolio = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [filter, setFilter] = useState('all');

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

			<Box className="portfolio-items">
				{filteredItems.map((item) => (
					<Box key={item.id} className="item">
						{item.title}
					</Box>
				))}
			</Box>
		</Container>
	);
};

export default Portfolio;
