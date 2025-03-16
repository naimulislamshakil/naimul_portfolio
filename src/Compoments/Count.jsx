import {
	Box,
	Container,
	Divider,
	Grid,
	Typography,
	useTheme,
} from '@mui/material';
import React from 'react';

const Count = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				background: theme.palette.mode === 'light' ? '#111827' : '#fafafb',
				pt: 5,
				pb: 3,
			}}
		>
			<Container maxWidth="xl">
				<Grid container spacing={2} justifyContent="center" alignItems="center">
					<Grid item xs={12} md={3} p={3} textAlign="center">
						<Box
							sx={{
								borderRight: {
									md:
										theme.palette.mode === 'light'
											? '1px solid #fafafb'
											: '1px solid #111827',
								},
							}}
						>
							<Typography
								variant="h2"
								fontWeight={700}
								sx={{
									color: theme.palette.mode === 'light' ? '#F3F4F6' : '#1F2937',
									fontSize: '50px',
								}}
							>
								20+
							</Typography>
							<Typography
								variant="h4"
								fontWeight={400}
								sx={{
									color: theme.palette.mode === 'light' ? '#F3F4F6' : '#1F2937',
								}}
							>
								Finished Projects
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={3} p={3} textAlign="center">
						<Box
							sx={{
								borderRight: {
									md:
										theme.palette.mode === 'light'
											? '1px solid #fafafb'
											: '1px solid #111827',
								},
							}}
						>
							<Typography
								variant="h2"
								fontWeight={700}
								sx={{
									color: theme.palette.mode === 'light' ? '#F3F4F6' : '#1F2937',
									fontSize: '50px',
								}}
							>
								97%
							</Typography>
							<Typography
								variant="h4"
								fontWeight={400}
								sx={{
									color: theme.palette.mode === 'light' ? '#F3F4F6' : '#1F2937',
								}}
							>
								Client Retention Rate
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={3} p={3} textAlign="center">
						<Box
							sx={{
								borderRight: {
									md:
										theme.palette.mode === 'light'
											? '1px solid #fafafb'
											: '1px solid #111827',
								},
							}}
						>
							<Typography
								variant="h2"
								fontWeight={700}
								sx={{
									color: theme.palette.mode === 'light' ? '#F3F4F6' : '#1F2937',
									fontSize: '50px',
								}}
							>
								18+
							</Typography>
							<Typography
								variant="h4"
								fontWeight={400}
								sx={{
									color: theme.palette.mode === 'light' ? '#F3F4F6' : '#1F2937',
								}}
							>
								Happy Client
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={3} p={3} textAlign="center">
						<Typography
							variant="h2"
							fontWeight={700}
							sx={{
								color: theme.palette.mode === 'light' ? '#F3F4F6' : '#1F2937',
								fontSize: '50px',
							}}
						>
							4+
						</Typography>
						<Typography
							variant="h4"
							fontWeight={400}
							sx={{
								color: theme.palette.mode === 'light' ? '#F3F4F6' : '#1F2937',
							}}
						>
							Industrial Experience
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Count;
