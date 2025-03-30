import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useTheme,
} from '@mui/material';
import Banner from '../assets/banner.jpg';
import { imgAltText } from '../data/Testimonial';
import { tokens } from '../theme';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const navigate = useNavigate();

	const goToContactPage = () => {
		navigate('/contact_us');
	};
	return (
		<Container maxWidth="xl" sx={{ mt: 2 }}>
			<Typography
				variant="h2"
				fontWeight={700}
				sx={{
					color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
				}}
				textAlign="center"
				textTransform="uppercase"
			>
				About Me
			</Typography>

			<Grid container spacing={3} mt={2}>
				<Grid item xs={12} md={6}>
					<img
						style={{ width: '100%', borderRadius: '10px' }}
						src={Banner}
						alt={imgAltText}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					display="flex"
					alignItems="start"
					justifyContent="center"
					flexDirection="column"
				>
					<Typography
						fontWeight={400}
						variant="body1"
						fontSize={16}
						sx={{
							color: `${colors.grey[200]}`,
							mt: '10px',
							ml: 'auto',
							mr: 'auto',
						}}
					>
						I'm a Full Stack Web Developer passionate about building
						high-performance, accessible, and visually striking digital
						experiences. With a deep love for both design and development, I
						specialize in crafting seamless, pixel-perfect interfaces that are
						as functional as they are beautiful.
						<br />
						<br />
						Currently, I work as a Full stack Engineer at Cloud State
						Techenologies Ltd, focusing on accessibility. I develop and maintain
						UI components that power our frontend, ensuring every interaction
						meets top-tier web accessibility standards for an inclusive user
						experience.
						<br />
						<br /> Over the years, I’ve built software for diverse
						environments—from startups and digital studios to major corporations
						and advertising agencies. I also created a comprehensive video
						course on building a web app using the Spotify API, helping
						developers level up their skills.
						<br />
						<br />
						When I’m not coding, you’ll find me climbing, reading, spending time
						with my wife and two cats, or exploring Hyrule in search of Korok
						seeds.
					</Typography>

					<Button
						variant="contained"
						onClick={() => goToContactPage()}
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
						Let’s Build Something Amazing Together!
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AboutPage;
