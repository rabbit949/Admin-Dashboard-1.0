import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import './datatable.scss';

const DataTable = () => {
	// temporary data
	const userColumns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{
			field: 'user',
			headerName: 'User',
			width: 230,
			renderCell: (params) => {
				return (
					<div className='cellWithImage'>
						<img className='cellImg' src={params.row.img} alt='avatar' />
						{params.row.username}
					</div>
				);
			},
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 230,
		},

		{
			field: 'age',
			headerName: 'Age',
			width: 100,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 160,
			renderCell: (params) => {
				return (
					<div className={`cellWithStatus ${params.row.status}`}>
						{params.row.status}
					</div>
				);
			},
		},
	];

	const userRows = [
		{
			id: 1,
			username: 'Jon Snow',
			img: 'https://www.belloflostsouls.net/wp-content/uploads/2022/06/JonSnow.jpg',
			status: 'active',
			email: 'jonsnow@gmail.com',
			age: 26,
		},
		{
			id: 2,
			username: 'Jamie Lannister',
			img: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg',
			email: 'jamielanister@gmail.com',
			status: 'passive',
			age: 40,
		},
		{
			id: 3,
			username: 'Tyrion Lannister',
			img: 'https://i.pinimg.com/736x/4d/95/5e/4d955e0ffdf5791313a7084ebbff9012.jpg',
			email: 'tiryon@gmail.com',
			status: 'pending',
			age: 37,
		},
		{
			id: 4,
			username: 'Ned Stark',
			img: 'https://upload.wikimedia.org/wikipedia/en/5/52/Ned_Stark-Sean_Bean.jpg',
			email: 'nedstark@gmail.com',
			status: 'active',
			age: 48,
		},
		{
			id: 5,
			username: 'Khaleesi',
			img: 'https://i.pinimg.com/originals/dc/24/a0/dc24a0d825547658eaad01a9368d298e.jpg',
			email: 'motherofdragons@gmail.com',
			status: 'passive',
			age: 26,
		},
		{
			id: 6,
			username: 'Sansa Stark',
			img: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/17/32/1502282689-e68346e4a713a0a9558be85255557819650b72a0e3f7498aebcaf70319f541cffe081a3669fb29e8742a54577bd535f9.jpg',
			email: 'sansa@gmail.com',
			status: 'active',
			age: 21,
		},
		{
			id: 7,
			username: 'Brandon Stark',
			img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			email: 'stark47@gmail.com',
			status: 'passive',
			age: 44,
		},
		{
			id: 8,
			username: 'Arya Stark',
			img: 'https://i.pinimg.com/originals/9d/32/b1/9d32b166debae0d5960001291e7faa85.jpg',
			email: 'girlwithnoname@gmail.com',
			status: 'active',
			age: 18,
		},
		{
			id: 9,
			username: 'Rob Stark',
			img: 'https://i.pinimg.com/736x/f1/41/bd/f141bd2c78b53c2b8105e8845b78693b.jpg',
			email: 'wolfinthenorth@gmail.com',
			status: 'pending',
			age: 30,
		},
		{
			id: 10,
			username: 'Night King',
			img: 'https://qph.cf2.quoracdn.net/main-qimg-74cd3c85ae2735a8fe05bcda41775230-lq',
			email: 'whitewalker@gmail.com',
			status: 'active',
			age: 1165,
		},
	];

	const actions = [
		{
			field: 'actions',
			headerName: 'Actions',
			width: 230,
			renderCell: () => {
				return (
					<div className='cellAction'>
						<Link to='/users/jonsnow' style={{ textDecoration: 'none' }}>
							<div className='viewButtton'>View</div>
						</Link>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<div className='deleteButtton'>Delete</div>
						</Link>
					</div>
				);
			},
		},
	];

	return (
		<div className='dataTable'>
			<div className='datatableTitle'>
				Add New User
				<Link to='/users/new' className='link'>
					Add New
				</Link>
			</div>
			<DataGrid
				className='dataGrid'
				rows={userRows}
				columns={userColumns.concat(actions)}
				pageSize={8}
				rowsPerPageOptions={[8]}
				checkboxSelection
			/>
		</div>
	);
};
export default DataTable;
