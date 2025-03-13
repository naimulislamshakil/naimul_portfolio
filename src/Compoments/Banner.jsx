import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	IconButton,
	Typography,
	useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpg';
import { tokens } from '../theme';

const Banner = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Container maxWidth="xl">
			<Grid
				container
				spacing={2}
				sx={{
					alignItems: 'center',
					height: '90vh',
					textAlign: 'start',
				}}
			>
				<Grid item xs={12} md={7} p={1} order={{ xs: 2, md: 1 }}>
					<Typography
						variant="h3"
						fontWeight={400}
						sx={{
							color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
						}}
					>
						Hello I’m Naimul Islam Shakil !
					</Typography>
					<Typography
						variant="h1"
						fontWeight={700}
						sx={{
							mt: '10px',
							color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
						}}
					>
						I’m a{' '}
						<span
							style={{
								color: theme.palette.mode === 'light' ? '#3B82F6' : '#6366F1	',
							}}
						>
							Full Stack Web Developer
						</span>
					</Typography>

					<Typography
						fontWeight={400}
						variant="body1"
						fontSize={16}
						sx={{ color: `${colors.grey[200]}`, mt: '10px' }}
					>
						Are you looking to start a business with eye-catching web
						application? Or you want to redesign your previous web application
						with modern technology? If this, you came to the right place. I’m an
						expert with 4 years experience as a React developer as well as a
						Full Stack developer. With my 4 years experience knowledge, combined
						with visulization and talent, we can create together a visual
						solution and user friendly digital web application that deliver
						results for your business and fullfill your business goal.
					</Typography>

					<Box>
						<Button
							variant="contained"
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
							About Me
						</Button>
						<Button
							variant="contained"
							sx={{
								mt: 2,
								fontWeight: 500,
								fontSize: 14,
								fontFamily: 'Poppins',
								padding: '10px 30px',
								ml: 2,
								background: theme.palette.mode === 'light' ? '#141414' : '#fff	',
								color: theme.palette.mode === 'light' ? '#fff' : '#141414',
							}}
						>
							Downlode Resume
						</Button>
					</Box>

					<Box
						mt={7}
						display="flex"
						justifyContent="start"
						gap={3}
						alignItems="center"
					>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://www.linkedin.com/in/md-naimul-islam-shakil/"
						>
							<LinkedInIcon style={{ fontSize: '40px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://github.com/naimulislamshakil"
						>
							<GitHubIcon style={{ fontSize: '40px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://wa.me/8801879212420"
						>
							<WhatsAppIcon style={{ fontSize: '40px' }} />
						</Link>
					</Box>
				</Grid>
				<Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
					<img src={banner} style={{ width: '100%', borderRadius: '10px' }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Banner;
