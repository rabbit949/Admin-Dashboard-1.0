import DataTable from '../../components/datatable/DataTable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './list.scss';

const ListPage = () => {
	return (
		<div className='list'>
			<Sidebar />
			<div className='listConatiner'>
				<Navbar />
				<DataTable />
			</div>
		</div>
	);
};

export default ListPage;
