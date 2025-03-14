import {
	AppBar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
	Button,
	useTheme,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { ColorModeContext, tokens } from '../theme';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];

const Navbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	const [open, setOpen] = useState(false);

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

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
			<AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
				<Toolbar
					sx={{ justifyContent: { xs: 'flex-end', md: 'space-between' } }}
				>
					{/* Logo on the left */}
					<Typography variant="h6" sx={{ flexGrow: { xs: 1, md: 0 } }}>
						My Website
					</Typography>

					{/* Centered Menu for md+ screens */}
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },

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
