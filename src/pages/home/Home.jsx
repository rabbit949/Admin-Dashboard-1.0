import React from 'react';
import Charts from '../../components/charts/Charts';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import List from '../../components/table/List';
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
				<div className='charts'>
					<Featured />
					<Charts aspect={2 / 1} title='Last 6 Months (Revenue)' />
				</div>
				<div className='listContainer'>
					<div className='listTitle'>Lastest Trasnactions</div>
					<List />
				</div>
			</div>
		</div>
	);
};

export default Home;
