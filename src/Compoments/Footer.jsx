import { Box, Container, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Container maxWidth="xl" sx={{ pb: 3 }}>
			<Grid
				container
				spacing={2}
				justifyContent="space-between"
				display="flex"
				alignItems="center"
			>
				<Grid item xs={12} md={6}>
					<Typography variant="h5" mt={8}>
						© All Rights Reserved 2021 - {new Date().getFullYear()} | Naimul
						Islam Shakil.
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} textAlign="end">
					<Box
						mt={7}
						display="flex"
						justifyContent="end"
						gap={3}
						alignItems="center"
					>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://www.linkedin.com/in/md-naimul-islam-shakil/"
						>
							<LinkedInIcon style={{ fontSize: '30px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://github.com/naimulislamshakil"
						>
							<GitHubIcon style={{ fontSize: '30px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://web.facebook.com/naimul.islam.shakil.156111"
						>
							<FacebookIcon style={{ fontSize: '30px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://x.com/MDNAIMULISLAMS5"
						>
							<XIcon style={{ fontSize: '30px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://www.instagram.com/naimulislam555/"
						>
							<InstagramIcon style={{ fontSize: '30px' }} />
						</Link>
						<Link
							target="-"
							style={{ textDecoration: 'none', color: 'inherit' }}
							to="https://wa.me/8801879212420"
						>
							<WhatsAppIcon style={{ fontSize: '30px' }} />
						</Link>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
