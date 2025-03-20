import { yupResolver } from '@hookform/resolvers/yup';
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { contactSchema } from '../data/contactus';
import { tokens } from '../theme';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import toast from 'react-hot-toast';

const ContactUs = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'all',
		resolver: yupResolver(contactSchema),
	});

	const submit = async (data) => {
		try {
			await fetch(
				'https://script.google.com/macros/s/AKfycbza1OW3n7WFXPWsCC6w4Hf6oKM5MTBnTkfnG7npZ2tzFfoO7aWAxqMRY8iBK98ta6VcRg/exec',
				{
					method: 'POST',
					mode: 'no-cors',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log({ data });
					toast.success('Form submitted successfully!');
					reset();
				})
				.catch((err) => {
					console.log({ err });
				});
		} catch (error) {
			console.error(error);
			alert('Error submitting the form!');
		}
	};

	return (
		<Container maxWidth="xl" sx={{ py: 5 }}>
			<Grid container spacing={2}>
				<Grid
					item
					xs={12}
					md={6}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="start"
				>
					<Typography
						variant="h2"
						fontWeight={700}
						sx={{
							color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
						}}
						textAlign="start"
					>
						Let’s Collaborate to Create Something Exceptional.
					</Typography>

					<Typography
						fontWeight={400}
						variant="body1"
						fontSize={16}
						sx={{
							color: `${colors.grey[200]}`,
							mt: '10px',
							textAlign: 'start',
						}}
					>
						Reach out today to discuss how I can help your business thrive with
						tailored strategies and innovative digital solutions.
					</Typography>

					<Box
						display="flex"
						alignItems="center"
						justifyContent="center"
						gap={1}
						mt={5}
					>
						<MdEmail style={{ fontSize: '20px' }} />
						<Typography
							variant="h5"
							fontWeight={400}
							sx={{
								color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
							}}
							textAlign="start"
						>
							naimul.islam.shakil55@gmail.com
						</Typography>
					</Box>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="center"
						gap={1}
						mt={1}
					>
						<FaPhoneAlt style={{ fontSize: '20px' }} />
						<Typography
							variant="h5"
							fontWeight={400}
							sx={{
								color: theme.palette.mode === 'light' ? '#1F2937' : '#F3F4F6',
							}}
							textAlign="start"
						>
							(+880) 1879 - 212420
						</Typography>
					</Box>

					<Box
						mt={7}
						display="flex"
						justifyContent="center"
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
							to="https://web.facebook.com/naimul.islam.shakil.156111"
						>
							<FacebookIcon style={{ fontSize: '40px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://x.com/MDNAIMULISLAMS5"
						>
							<XIcon style={{ fontSize: '40px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://www.instagram.com/naimulislam555/"
						>
							<InstagramIcon style={{ fontSize: '40px' }} />
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

				<Grid item xs={12} md={6}>
					<Card sx={{ background: 'transparent', boxShadow: 0 }}>
						<CardContent>
							<form onSubmit={handleSubmit(submit)}>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<TextField
											{...register('firstName')}
											label="First Name"
											fullWidth
											error={!!errors?.firstName}
											helperText={errors?.firstName?.message}
											placeholder="Enter your first name..."
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											{...register('lastName')}
											label="Last Name"
											fullWidth
											error={!!errors?.lastName}
											helperText={errors?.lastName?.message}
											placeholder="Enter your last name..."
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											{...register('email')}
											label="Email"
											fullWidth
											error={!!errors?.email}
											helperText={errors?.email?.message}
											placeholder="Enter your email..."
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											{...register('phoneNo')}
											label="Phone NO."
											fullWidth
											error={!!errors?.phoneNo}
											helperText={errors?.phoneNo?.message}
											placeholder="Enter your phone number..."
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											{...register('message')}
											label="Message"
											fullWidth
											error={!!errors?.message}
											helperText={errors?.message?.message}
											rows={4}
											multiline
											placeholder="Enter your message..."
										/>
									</Grid>
									<Grid item xs={12}>
										<Button
											type="submit"
											variant="contained"
											fullWidth
											// onClick={() => goToAboutMe()}
											sx={{
												mt: 1,
												fontWeight: 500,
												fontSize: 14,
												fontFamily: 'Poppins',
												padding: '10px 30px',
												background:
													theme.palette.mode === 'light' ? '#141414' : '#fff	',
												color:
													theme.palette.mode === 'light' ? '#fff' : '#141414',
											}}
										>
											Let’s Build Something Amazing Together!
										</Button>
									</Grid>
								</Grid>
							</form>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactUs;
