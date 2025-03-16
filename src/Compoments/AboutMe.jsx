import {
	Box,
	Button,
	Chip,
	Container,
	Grid,
	Typography,
	useTheme,
} from '@mui/material';
import Banner from '../assets/banner.jpg';
import { tokens } from '../theme';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const navigate = useNavigate();

	const goToAboutMe = () => {
		navigate('/about_me');
	};

	const skills = [
		'Javascript (ES6)',
		'Typescript',
		'Python',
		'React',
		'API Development',
		'Google Cloud',
		'Web Design',
		'UI/UX Design',
		'Django',
		'PostgreSQL',
		'Git',
		'GitHub',
		'Redux',
		'Bootstrap',
		'Tailwind CSS',
		'Material UI',
		'StoryBook',
		'Node.js',
		'Firebase',
		'Express',
		'MongoDB',
		'GraphQL',
		'AWS',
		'JWT',
	];
	return (
		<Container maxWidth="xl" sx={{ pb: 5 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<img src={Banner} style={{ width: '100%', borderRadius: '10px' }} />
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
						variant="h2"
						fontWeight={700}
						sx={{
							color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
						}}
					>
						Meet MD. Naimul Islam Shakil.
					</Typography>
					<Typography
						variant="h4"
						fontWeight={400}
						textTransform="capitalize"
						sx={{
							color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
						}}
					>
						Full-stack web development Specialist
					</Typography>

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
						I'm MD. Naimul Islam Shakil, a professional web application
						development expert in Bangladesh with 4 years of experience helping
						businesses that deliver results for your business and fulfill your
						business goal.I specialize in creating dynamic web solutions that
						enhance user experience and drive business success. From front-end
						design to back-end development, I focus on delivering seamless,
						scalable, and efficient solutions tailored to your needs. No matter
						your industry, I’m here to help you establish a strong online
						presence with modern, custom-built web applications. Let’s build
						something great together!
						<span
							style={{
								color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
								fontFamily: 'Satisfy',
								marginLeft: '10px',
								fontSize: '20px',
							}}
						>
							MD. Naimul Islam
						</span>
					</Typography>

					<Box
						mt={2}
						flexWrap="wrap-reverse"
						display="flex"
						justifyContent="start"
						alignItems="center"
						gap={1}
					>
						{skills.map((skill, i) => (
							<Chip key={i} label={skill} variant="outlined" />
						))}
					</Box>

					<Button
						variant="contained"
						onClick={() => goToAboutMe()}
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
						Learn More About Me
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AboutMe;
