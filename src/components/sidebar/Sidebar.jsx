import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<div className='top'>
				<h2 className='brand'>Admin Panel</h2>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
				</ul>
			</div>
			<div className='bottom'></div>
		</aside>
	);
};

export default Sidebar;
