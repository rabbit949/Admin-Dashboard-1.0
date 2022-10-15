import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Person2Icon from '@mui/icons-material/Person2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import './sidebar.scss';

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<aside className='sidebar'>
			<div className='top'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h2 className='brand'>Dashboard</h2>
				</Link>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<p className='title'>Main</p>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<li>
							<DashboardIcon className='icon' />
							<span>Dashboard</span>
						</li>
					</Link>
					<p className='title'>Users & Info</p>
					<Link to='/users' style={{ textDecoration: 'none' }}>
						<li>
							<GroupIcon className='icon' />
							<span>Users</span>
						</li>
					</Link>
					<Link to='/products' style={{ textDecoration: 'none' }}>
						<li>
							<InventoryIcon className='icon' />
							<span>Products</span>
						</li>
					</Link>
					<li>
						<ProductionQuantityLimitsIcon className='icon' />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className='icon' />
						<span>Delivery</span>
					</li>
					<li>
						<QueryStatsIcon className='icon' />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsActiveIcon className='icon' />
						<span>Notifications</span>
					</li>
					<p className='title'>Settings & Profile</p>

					<li>
						<SettingsIcon className='icon' />
						<span>Settings</span>
					</li>
					<li>
						<Person2Icon className='icon' />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className='icon' />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<p className='title'>Theme Options</p>
				<div className='colors'>
					<div
						className='themeOptions'
						onClick={() => dispatch({ type: 'LIGHT' })}
					></div>
					<div
						className='themeOptions'
						onClick={() => dispatch({ type: 'DARK' })}
					></div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
