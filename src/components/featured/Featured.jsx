import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss';

const Featured = () => {
	return (
		<div className='featured'>
			<div className='top'>
				<h2 className='title'>Total Revenue</h2>
				<MoreVertOutlinedIcon className='icon' />
			</div>
			<div className='bottom'>
				<div className='featuredChart'>
					<CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
				</div>
				<p className='title'>Total sales made today</p>
				<p className='amount'>$200</p>
				<p className='desc'>
					Previous transactions processing. Last payment may not be inlcuded.
				</p>
				<div className='summary'>
					<div className='item'>
						<div className='itemTitle'>Target</div>
						<div className='itemResult positive'>
							<KeyboardArrowUpOutlinedIcon fontSize='small' />
							<div className='resultAmount'>$14.5k</div>
						</div>
					</div>
					<div className='item'>
						<div className='itemTitle'>Last Week</div>
						<div className='itemResult negative'>
							<KeyboardArrowDownOutlinedIcon fontSize='small' />
							<div className='resultAmount'>$8.9k</div>
						</div>
					</div>
					<div className='item'>
						<div className='itemTitle'>Last Month</div>
						<div className='itemResult positive'>
							<KeyboardArrowUpOutlinedIcon fontSize='small' />
							<div className='resultAmount'>$15.5k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
