import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
	useTheme,
	Drawer,
	List,
	ListItem,
	Avatar,
} from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../theme';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Logo from '../assets/Naimul Islam Shakil testimonial client Male.png';

const Navbar = () => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	const [open, setOpen] = useState(false);

	const toggleDrawer = (isOpen) => () => {
		setOpen(isOpen);
	};

	const menuItems = [
		{
			name: 'Home',
			route: '/',
		},
		{
			name: 'About',
			route: '/about_us',
		},

		{
			name: 'Service',
			route: '/service',
		},
		{
			name: 'Portfolio',
			route: '/portfolio',
		},
		{
			name: 'Contact',
			route: '/contact_us',
		},
		{
			name: 'Blog',
			route: '/blog',
		},
	];

	return (
		<>
			<AppBar
				position="sticky"
				color="transparent"
				sx={{
					boxShadow: 'none',
					// background: theme.palette.mode === 'light' ? '#fafafb' : '#111827',
				}}
			>
				<Toolbar
					sx={{
						justifyContent: { xs: 'flex-end', md: 'space-between' },
						alignItems: 'center',
					}}
				>
					<Box display="flex" alignItems="center" gap={1}>
						<Avatar
							src={Logo}
							alt="Naimul Islam Shakil"
							sx={{ width: 60, height: 60, mt: 2 }}
						/>
						{/* Logo on the left */}
						<Typography
							variant="h4"
							fontWeight={900}
							fontStyle="revert-layer"
							sx={{
								flexGrow: { xs: 1, md: 0 },
								mt: 1,
								fontFamily: 'Dancing Script',
							}}
						>
							Naimul Islam Shakil
						</Typography>
					</Box>

					{/* Centered Menu for md+ screens */}
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							width: '50%',
							gap: 4,
						}}
					>
						{menuItems.map((item, i) => (
							<Link
								style={{
									textDecoration: 'none',
									color: 'inherit',
									fontSize: '16px',
									fontWeight: 600,
								}}
								key={i}
								to={item.route}
							>
								{item.name}
							</Link>
						))}
					</Box>

					{/* Mobile Menu Icon */}
					<IconButton
						edge="end"
						color="inherit"
						aria-label="menu"
						sx={{ display: { xs: 'block', md: 'none' } }}
						onClick={toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>

					{/* Dark/Light Mode Toggle */}
					<Tooltip title="Dark/Light Mode" sx={{ mb: 1, ml: 1 }}>
						<IconButton onClick={colorMode.toggleColorMode}>
							{theme.palette.mode === 'dark' ? (
								<DarkModeOutlinedIcon />
							) : (
								<LightModeOutlinedIcon />
							)}
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>

			{/* Drawer for mobile view */}
			<Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
				<Box sx={{ width: '100%', p: 2 }}>
					{/* Close Icon at Right Corner */}
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						<IconButton onClick={toggleDrawer(false)}>
							<CloseIcon />
						</IconButton>
					</Box>

					{/* Drawer Menu Items */}
					<List>
						{menuItems.map((item, i) => (
							<Link
								style={{
									textDecoration: 'none',
									color: 'inherit',
									fontSize: '16px',
									fontWeight: 600,
								}}
								key={i}
								to={item.route}
							>
								<ListItem button onClick={toggleDrawer(false)}>
									{item.name}
								</ListItem>
							</Link>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default Navbar;
