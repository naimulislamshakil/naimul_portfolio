import { Box, Container, Typography, useTheme } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';

const Technology = () => {
	const theme = useTheme();
	const [value, setValue] = useState('1');

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
							centered
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

					<TabPanel value="1">Item One</TabPanel>
					<TabPanel value="2">Item Two</TabPanel>
					<TabPanel value="3">Item Three</TabPanel>
				</TabContext>
			</Box>
		</Container>
	);
};

export default Technology;
