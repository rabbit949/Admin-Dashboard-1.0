import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import './table.scss';

const List = () => {
	const rows = [
		{
			id: 1,
			product: 'Apple Watch',
			img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FQKW2?wid=1673&hei=1353&fmt=jpeg&qlt=95&.v=1517334319257',
			customer: 'Jhon Doe',
			date: '7 March',
			amount: 700,
			method: 'Cash on Delivery',
			status: 'Approved',
		},
		{
			id: 2,
			product: 'Iphone 14 pro',
			img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617559',
			customer: 'Jena',
			date: '21 March',
			amount: 750,
			method: 'Cash on Delivery',
			status: 'Pending',
		},
		{
			id: 3,
			product: 'Iphone 14 pro max',
			img: 'https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Pro-Deep-Purple-1.jpg',
			customer: 'Smith',
			date: '7 April',
			amount: 900,
			method: 'Cash on Delivery',
			status: 'Pending',
		},
		{
			id: 4,
			product: 'Iphone 15 pro max',
			img: 'https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Pro-Deep-Purple-1.jpg',
			customer: 'Smith',
			date: '7 April',
			amount: 900,
			method: 'Cash on Delivery',
			status: 'Approved',
		},
		{
			id: 5,
			product: 'Iphone 15 pro',
			img: 'https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Pro-Deep-Purple-1.jpg',
			customer: 'Smith',
			date: '7 April',
			amount: 900,
			method: 'Cash on Delivery',
			status: 'Pending',
		},
		{
			id: 6,
			product: 'Iphone 16 pro',
			img: 'https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Pro-Deep-Purple-1.jpg',
			customer: 'Smith',
			date: '7 April',
			amount: 900,
			method: 'Cash on Delivery',
			status: 'Pending',
		},
		{
			id: 7,
			product: 'Iphone 16 pro max',
			img: 'https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Pro-Deep-Purple-1.jpg',
			customer: 'Smith',
			date: '7 April',
			amount: 900,
			method: 'Cash on Delivery',
			status: 'Pending',
		},
	];
	return (
		<TableContainer component={Paper} className='table'>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell className='tableCell'>Traking ID</TableCell>
						<TableCell className='tableCell'>Product</TableCell>
						<TableCell className='tableCell'>Customer</TableCell>
						<TableCell className='tableCell'>Date</TableCell>
						<TableCell className='tableCell'>Amount</TableCell>
						<TableCell className='tableCell'>Payment Method</TableCell>
						<TableCell className='tableCell'>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell className='tableBody'>{row.id}</TableCell>
							<TableCell className='tableBody'>
								<div className='cellWrapper'>
									<img src={row.img} alt='Product Image' className='image' />
									{row.product}
								</div>
							</TableCell>
							<TableCell className='tableBody'>{row.customer}</TableCell>
							<TableCell className='tableBody'>{row.date}</TableCell>
							<TableCell className='tableBody'>{row.amount}</TableCell>
							<TableCell className='tableBody'>{row.method}</TableCell>
							<TableCell className='tableBody'>
								<span className={`status ${row.status}`}>{row.status}</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;
