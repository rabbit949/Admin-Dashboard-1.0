import EditIcon from '@mui/icons-material/Edit';
import Charts from '../../components/charts/Charts';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import List from '../../components/table/List';
import './single.scss';

const Single = () => {
	return (
		<div className='single'>
			<Sidebar />
			<div className='singleContainer'>
				<Navbar />
				<div className='top'>
					<div className='left'>
						<span className='editButton'>
							<EditIcon className='icon' />
						</span>
						<h2 className='title'>Information</h2>
						<div className='item'>
							<img
								src='https://www.belloflostsouls.net/wp-content/uploads/2022/06/JonSnow.jpg'
								alt='item image'
								className='itemImage'
							/>
							<div className='details'>
								<h3 className='itemName'>Jon Snow</h3>
								<div className='detailItem'>
									<span className='itemKey'>Email: </span>
									<span className='itemValue'>jonsnow@gmail.com</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Phone: </span>
									<span className='itemValue'>+92 3333 33 33</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Address: </span>
									<span className='itemValue'>
										Castle Black Nightfort (historical)
									</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Country: </span>
									<span className='itemValue'>The North</span>
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<Charts aspect={4 / 1} title='User Spendings (Last Six Months)' />
					</div>
				</div>
				<div className='bottom'>
					<h2 className='title'>Last Transactions</h2>
					<List />
				</div>
			</div>
		</div>
	);
};

export default Single;
