import { Button, Container, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const Testminial = () => {
	const testimonials = [
		{
			name: 'John Doe',
			feedback: 'This service is amazing! Highly recommended.',
			avatar: 'https://i.pravatar.cc/150?img=1',
		},
		{
			name: 'Jane Smith',
			feedback: 'A fantastic experience from start to finish.',
			avatar: 'https://i.pravatar.cc/150?img=2',
		},
		{
			name: 'Alice Johnson',
			feedback: 'Great customer support and excellent quality!',
			avatar: 'https://i.pravatar.cc/150?img=3',
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<Container maxWidth="xl">
			<Box sx={{ maxWidth: 500, mx: 'auto', textAlign: 'center', p: 2 }}>
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<Card key={index} sx={{ p: 3, boxShadow: 3 }}>
							<CardContent>
								<FormatQuote sx={{ fontSize: 40, color: 'primary.main' }} />
								<Typography variant="h6" sx={{ mt: 2 }}>
									{testimonial.feedback}
								</Typography>
								<Avatar
									src={testimonial.avatar}
									alt={testimonial.name}
									sx={{ width: 60, height: 60, mx: 'auto', mt: 2 }}
								/>
								<Typography
									variant="subtitle1"
									sx={{ mt: 1, fontWeight: 'bold' }}
								>
									{testimonial.name}
								</Typography>
							</CardContent>
						</Card>
					))}
				</Slider>
			</Box>
		</Container>
	);
};

export default Testminial;
