import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';
import './navbar.scss';

const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='wrapper'>
				<div className='search'>
					<input type='text' placeholder='Search...' />
					<SearchOutlinedIcon className='icon' />
				</div>
				<div className='items'>
					<div className='item itemText'>
						<LanguageOutlinedIcon className='icon' />
						<span className='language'>English</span>
					</div>
					<div className='item'>
						<DarkModeOutlinedIcon className='icon' />
					</div>
					<div className='item'>
						<NotificationsOutlinedIcon className='icon' />
						<div className='counter'>1</div>
					</div>
					<div className='item'>
						<ChatBubbleOutlineOutlinedIcon className='icon' />
						<div className='counter'>2</div>
					</div>
					<div className='item'>
						<img
							src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt='profile image'
							className='profileImage'
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
