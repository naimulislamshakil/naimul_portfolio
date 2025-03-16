import { Container, Grid, Typography, useTheme } from '@mui/material';
import Banner from '../assets/banner.jpg';

const WhyChoseMe = () => {
	const theme = useTheme();
	return (
		<Container maxWidth="xl" sx={{ pb: 5, mt: 5 }}>
			<Grid container spacing={2}>
				<Grid
					item
					xs={12}
					md={6}
					display="flex"
					alignItems="start"
					justifyContent="center"
					flexDirection="column"
					order={{ xs: 2, md: 1 }}
				>
					<Typography
						variant="h2"
						fontWeight={700}
						sx={{
							color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
						}}
						textTransform="capitalize"
					>
						Why you choose me as a <br /> Full stack developer.
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
					<img src={Banner} style={{ width: '100%', borderRadius: '10px' }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default WhyChoseMe;
