import {
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
	useTheme,
} from '@mui/material';
import { tokens } from '../theme';

const Service = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Container maxWidth="xl" sx={{ pt: 5, pb: 5 }}>
			<Typography
				variant="h2"
				fontWeight={700}
				sx={{
					color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
				}}
				textAlign="center"
			>
				Expert Full Stack Developer for Comprehensive Solutions.
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
				I offer a full range of advanced development services designed to help
				businesses achieve long-term visibility, organic growth, and sustainable
				success.
			</Typography>

			<Grid container spacing={2} mt={2}>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={{ px: 2, py: 3, borderRadius: '8px', height: '315px' }}>
						<CardContent>
							<Typography variant="h4" fontWeight={700}>
								1. E-Commerce Website Development
							</Typography>
							<Typography
								sx={{
									color: `${colors.grey[200]}`,
									mt: '10px',
									// textAlign: 'center',
								}}
								fontWeight={400}
								variant="body1"
								fontSize={16}
							>
								Transform your online store into a sales powerhouse with sleek,
								responsive designs and seamless functionality. We specialize in
								creating e-commerce sites that enhance user experience, boost
								conversions, and simplify the shopping journey. With features
								like secure payments and intuitive navigation, we’ll set you up
								for success in the digital marketplace.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={{ px: 2, py: 3, borderRadius: '8px', height: '315px' }}>
						<CardContent>
							<Typography variant="h4" fontWeight={700}>
								2. Custom Web Application Development
							</Typography>
							<Typography
								sx={{
									color: `${colors.grey[200]}`,
									mt: '10px',
									// textAlign: 'center',
								}}
								fontWeight={400}
								variant="body1"
								fontSize={16}
							>
								Unlock the full potential of your business with tailored web
								applications built to meet your unique needs. From user-friendly
								interfaces to cutting-edge functionality, our custom solutions
								are scalable, secure, and designed to grow with your vision.
								Let's create digital experiences that set your brand apart.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={{ px: 2, py: 3, borderRadius: '8px', height: '315px' }}>
						<CardContent>
							<Typography variant="h4" fontWeight={700}>
								3. Booking and Reservation Systems
							</Typography>
							<Typography
								sx={{
									color: `${colors.grey[200]}`,
									mt: '10px',
									// textAlign: 'center',
								}}
								fontWeight={400}
								variant="body1"
								fontSize={16}
							>
								Streamline your booking process with custom-built systems
								designed for efficiency and ease. Whether you manage hotels,
								events, or services, we create user-friendly platforms that
								simplify reservations for your customers. With real-time
								availability and payment integration, you’ll save time and keep
								your business running smoothly.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={{ px: 2, py: 3, borderRadius: '8px', height: '315px' }}>
						<CardContent>
							<Typography variant="h4" fontWeight={700}>
								4. Inventory Management Systems
							</Typography>
							<Typography
								sx={{
									color: `${colors.grey[200]}`,
									mt: '10px',
									// textAlign: 'center',
								}}
								fontWeight={400}
								variant="body1"
								fontSize={16}
							>
								Take control of your stock with our cutting-edge inventory
								management systems. Designed to reduce errors and increase
								efficiency, our solutions offer real-time tracking, automated
								reordering, and detailed analytics. Whether you're managing
								warehouses or retail stores, stay ahead of the game with a
								smarter way to handle inventory.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={{ px: 2, py: 3, borderRadius: '8px', height: '315px' }}>
						<CardContent>
							<Typography variant="h4" fontWeight={700}>
								5. Healthcare Applications
							</Typography>
							<Typography
								sx={{
									color: `${colors.grey[200]}`,
									mt: '10px',
									// textAlign: 'center',
								}}
								fontWeight={400}
								variant="body1"
								fontSize={16}
							>
								Revolutionize patient care with innovative healthcare apps
								tailored to your needs. From appointment scheduling to
								telemedicine and secure patient records, our solutions focus on
								usability and compliance with industry standards. Improve
								healthcare outcomes with tools designed to enhance efficiency
								and accessibility.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={{ px: 2, py: 3, borderRadius: '8px', height: '315px' }}>
						<CardContent>
							<Typography variant="h4" fontWeight={700}>
								6. Startup MVP Development
							</Typography>
							<Typography
								sx={{
									color: `${colors.grey[200]}`,
									mt: '10px',
									// textAlign: 'center',
								}}
								fontWeight={400}
								variant="body1"
								fontSize={16}
							>
								Turn your idea into reality with Minimum Viable Products (MVPs)
								designed for success. We specialize in creating rapid prototypes
								that highlight your startup’s core value while minimizing costs.
								Test your concept, gather feedback, and attract investors with
								robust, scalable solutions that pave the way for growth.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Service;
