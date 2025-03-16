import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import Banner from '../assets/banner.jpg';
import { tokens } from '../theme';

const WhyChoseMe = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
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

					<Box pr={3} pt={2}>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅ <span style={{ fontWeight: 600 }}>4+ Years of Experience</span>{' '}
							– Skilled in React, MERN Stack, and Full Stack development.
						</Typography>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅ <span style={{ fontWeight: 600 }}>Custom Web Solutions</span> –
							I build tailored web apps that fit your business needs perfectly.
						</Typography>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅{' '}
							<span style={{ fontWeight: 600 }}>
								Modern & Scalable Development
							</span>{' '}
							– Fast, responsive, and user-friendly applications that grow with
							your business.
						</Typography>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅ <span style={{ fontWeight: 600 }}>End-to-End Development</span>{' '}
							– From design to backend, I handle everything so you don’t have
							to.
						</Typography>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅{' '}
							<span style={{ fontWeight: 600 }}>
								Clear & Reliable Communication
							</span>{' '}
							– I keep you updated every step of the way. No surprises!
						</Typography>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅ <span style={{ fontWeight: 600 }}>Fast & Secure Websites</span>{' '}
							– Optimized for speed, SEO-friendly, and built with top security
							practices.
						</Typography>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅{' '}
							<span style={{ fontWeight: 600 }}>
								{' '}
								Problem-Solver & Bug Fixer
							</span>{' '}
							– I troubleshoot and fix issues fast to keep everything running
							smoothly.
						</Typography>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅{' '}
							<span style={{ fontWeight: 600 }}>
								Ongoing Support & Maintenance
							</span>{' '}
							– Need updates or improvements? I’ve got you covered.
						</Typography>
						<Typography sx={{ color: `${colors.grey[200]}` }}>
							✅{' '}
							<span style={{ fontWeight: 600 }}>100% Client Satisfaction</span>{' '}
							– I don’t stop until you love the final product.
						</Typography>
					</Box>

					<Button
						variant="contained"
						// onClick={() => goToAboutMe()}
						sx={{
							mt: 2,
							fontWeight: 500,
							fontSize: 14,
							fontFamily: 'Poppins',
							padding: '10px 30px',
							background: theme.palette.mode === 'light' ? '#141414' : '#fff	',
							color: theme.palette.mode === 'light' ? '#fff' : '#141414',
						}}
					>
						See My Real Client Feedback
					</Button>
				</Grid>
				<Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
					<img src={Banner} style={{ width: '100%', borderRadius: '10px' }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default WhyChoseMe;
