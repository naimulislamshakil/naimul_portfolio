import {
	Button,
	Container,
	Grid,
	Paper,
	Rating,
	useTheme,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { FaQuoteLeft } from 'react-icons/fa';
import { tokens } from '../theme';
import { testimonials } from '../data/Testimonial';
import Male from '../assets/Naimul Islam Shakil testimonial client Male.png';
import Female from '../assets/Naimul Islam Shakil testimonial client female.png';

const Testminial = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	};

	return (
		<Container maxWidth="xl" sx={{ my: 10 }}>
			<Typography
				variant="h2"
				fontWeight={700}
				sx={{
					color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
				}}
				textAlign="center"
			>
				What People Are Saying About My Work.
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
				Real stories from businesses transformed by my tailored strategies and
				innovative digital solutions.
			</Typography>

			<Box
				sx={{
					mt: '10px',
					mx: 'auto',
					textAlign: 'center',
					p: 2,
					gap: 2,
				}}
			>
				<Slider {...settings}>
					{testimonials.map((testimonial, i) => (
						<Card
							key={i}
							sx={{
								width: '100%',
								borderRadius: '10px',
								p: 3,
								background: 'transparent',
								boxShadow: 0,
							}}
						>
							<CardContent>
								<FaQuoteLeft
									style={{
										fontSize: '40px',
										color:
											theme.palette.mode === 'light' ? '#111827' : '#fafafb',
									}}
								/>

								<Typography variant="h4" sx={{ mt: 2 }}>
									Average {testimonial.rating} rating
								</Typography>
								<Rating
									name="size-large"
									defaultValue={testimonial?.rating}
									precision={0.5}
									size="large"
								/>

								<Typography variant="h6" sx={{ mt: 2, fontSize: '18px' }}>
									{testimonial?.testimonial}
								</Typography>

								<Box
									display="flex"
									alignItems="center"
									justifyContent="center"
									sx={{ gap: 2, mt: 2 }}
								>
									<Avatar
										src={testimonial?.grnder === 'Male' ? Male : Female}
										alt={testimonial?.name}
										sx={{ width: 60, height: 60, mt: 2 }}
									/>
									<Box justifyContent="start">
										<Typography
											variant="subtitle1"
											sx={{ mt: 1, fontWeight: 'bold', textAlign: 'start' }}
										>
											{testimonial?.name}
										</Typography>
										<Typography variant="body2" sx={{ mt: '-5px' }}>
											{testimonial?.role}, {testimonial?.companyName}
										</Typography>
									</Box>
								</Box>
							</CardContent>
						</Card>
					))}
				</Slider>
			</Box>
		</Container>
	);
};

export default Testminial;
