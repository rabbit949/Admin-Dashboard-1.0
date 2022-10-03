import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';
import './home.scss';

const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			<div className='home_container'>
				<Navbar />
				<div className='widgetsContainer'>
					<Widgets type='users' />
					<Widgets type='orders' />
					<Widgets type='earnings' />
					<Widgets type='balance' />
				</div>
			</div>
		</div>
	);
};

export default Home;
