import {
	Box,
	Container,
	Grid,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { imgAltText } from '../data/Testimonial';
import React from '../assets/download (1).png';
import Vue from '../assets/download (2).png';
import Javascript from '../assets/download (4).png';
import Mui from '../assets/download 31.png';
import Tailwind from '../assets/download (34).png';
import Bootstrap from '../assets/download (33).png';
import Next from '../assets/download (12).png';
import Woocommerce from '../assets/download (29).png';
import Shopify from '../assets/download (30).png';
import Node from '../assets/download (8).png';
import Express from '../assets/download (11).png';
import Express2 from '../assets/download (32).png';
import Python from '../assets/download (10).png';
import Php from '../assets/download (9).png';
import Nest from '../assets/download (14).png';
import Mongo from '../assets/download (23).png';
import Firebase from '../assets/download (25).png';
import DynamoDB from '../assets/download (24).png';
import AWS from '../assets/download (26).png';
import AWS2 from '../assets/download (15).png';
import GoogleCloud from '../assets/download (27).png';
import PostgreSQL2 from '../assets/download (16).png';
import PostgreSQL from '../assets/download.png';
import Webflow from '../assets/images-removebg-preview.png';

const Technology = () => {
	const theme = useTheme();
	const [value, setValue] = useState('1');
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Container maxWidth="xl" sx={{ py: 5 }}>
			<Typography
				variant="h2"
				fontWeight={700}
				sx={{
					color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
				}}
				textAlign="center"
			>
				Technologies and Platforms We Use.
			</Typography>

			<Box sx={{ width: '100%', typography: 'body1', mt: 3 }}>
				<TabContext value={value}>
					<Box>
						<TabList
							centered={!isMobile}
							variant={isMobile ? 'scrollable' : 'standard'}
							scrollButtons="auto"
							onChange={handleChange}
							aria-label="lab API tabs example"
							TabIndicatorProps={{
								style: {
									background:
										theme.palette.mode === 'light' ? '#141414' : '#fff	',
								},
							}}
						>
							<Tab className="text" label="Frontend" value="1" />
							<Tab className="text" label="Backend" value="2" />
							<Tab className="text" label="Database" value="3" />
							<Tab className="text" label="Cloud" value="5" />
						</TabList>
					</Box>

					<TabPanel value="1">
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={2} md={1}>
								<Tooltip title="React.JS">
									<img
										src={React}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Vue.JS">
									<img
										src={Vue}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Javascript">
									<img
										src={Javascript}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Material Ui">
									<img
										src={Mui}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1} mt={2}>
								<Tooltip title="Tailwind CSS">
									<img
										src={Tailwind}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1} mt={1}>
								<Tooltip title="Bootstrap">
									<img
										src={Bootstrap}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Next.JS">
									<img
										src={Next}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Woocommerce">
									<img
										src={Woocommerce}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Webflow">
									<img
										src={Webflow}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Shopify">
									<img
										src={Shopify}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
						</Grid>
					</TabPanel>
					<TabPanel value="2">
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={2} md={1}>
								<Tooltip title="Node.JS">
									<img
										src={Node}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Express.JS">
									{theme.palette.mode === 'light' ? (
										<img
											src={Express}
											style={{ width: '100%', borderRadius: '10px' }}
											alt={imgAltText}
										/>
									) : (
										<img
											src={Express2}
											style={{ width: '100%', borderRadius: '10px' }}
											alt={imgAltText}
										/>
									)}
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Python">
									<img
										src={Python}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="PhP">
									<img
										src={Php}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Nest.JS">
									<img
										src={Nest}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
						</Grid>
					</TabPanel>
					<TabPanel value="3">
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={2} md={1}>
								<Tooltip title="MongoDB">
									<img
										src={Mongo}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Firebase">
									<img
										src={Firebase}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="DynamoDB">
									<img
										src={DynamoDB}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="PostgreSQL">
									{theme.palette.mode === 'light' ? (
										<img
											src={PostgreSQL2}
											style={{ width: '100%', borderRadius: '10px' }}
											alt={imgAltText}
										/>
									) : (
										<img
											src={PostgreSQL}
											style={{ width: '100%', borderRadius: '10px' }}
											alt={imgAltText}
										/>
									)}
								</Tooltip>
							</Grid>
						</Grid>
					</TabPanel>

					<TabPanel value="5">
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={2} md={1}>
								<Tooltip title="AWS">
									{theme.palette.mode === 'light' ? (
										<img
											src={AWS}
											style={{ width: '100%', borderRadius: '10px' }}
											alt={imgAltText}
										/>
									) : (
										<img
											src={AWS2}
											style={{ width: '100%', borderRadius: '10px' }}
											alt={imgAltText}
										/>
									)}
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Google Cloud">
									<img
										src={GoogleCloud}
										style={{ width: '100%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
						</Grid>
					</TabPanel>
				</TabContext>
			</Box>
		</Container>
	);
};

export default Technology;
