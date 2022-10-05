import React from 'react';
import Charts from '../../components/charts/Charts';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
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
					<Charts />
				</div>
				<div className='listContainer'>
					<div className='listTitle'>Lastest Trasnactions</div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Home;
