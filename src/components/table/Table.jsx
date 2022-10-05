import './table.scss';

const Table = () => {
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
			status: 'Approved',
		},
		{
			id: 3,
			product: 'Iphone 14 pro max',
			img: 'https://www.pakmobizone.pk/wp-content/uploads/2022/10/Apple-iPhone-14-Pro-Deep-Purple-1.jpg',
			customer: 'Smith',
			date: '7 April',
			amount: 900,
			method: 'Cash on Delivery',
			status: 'Approved',
		},
	];
	return <div className='table'>Table</div>;
};

export default Table;
