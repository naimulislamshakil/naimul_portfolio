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
							<Tab className="text" label="Frameworks" value="4" />
							<Tab className="text" label="Cloud" value="5" />
						</TabList>
					</Box>

					<TabPanel value="1">
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={2} md={1}>
								<Tooltip title="React.JS">
									<img
										src={React}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Vue.JS">
									<img
										src={Vue}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Javascript">
									<img
										src={Javascript}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Material Ui">
									<img
										src={Mui}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1} mt={2}>
								<Tooltip title="Tailwind CSS">
									<img
										src={Tailwind}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1} mt={1}>
								<Tooltip title="Bootstrap">
									<img
										src={Bootstrap}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Next.JS">
									<img
										src={Next}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Woocommerce">
									<img
										src={Woocommerce}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Webflow">
									<img
										src={Webflow}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
							<Grid item xs={2} md={1}>
								<Tooltip title="Shopify">
									<img
										src={Shopify}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
						</Grid>
					</TabPanel>
					<TabPanel value="2">
						<Grid container spacing={2}>
							<Grid item xs={2} md={1}>
								<Tooltip title="Node.JS">
									<img
										src={Node}
										style={{ width: '80%', borderRadius: '10px' }}
										alt={imgAltText}
									/>
								</Tooltip>
							</Grid>
						</Grid>
					</TabPanel>
					<TabPanel value="3">Item Three</TabPanel>
				</TabContext>
			</Box>
		</Container>
	);
};

export default Technology;
