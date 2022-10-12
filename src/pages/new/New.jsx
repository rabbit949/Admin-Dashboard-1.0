import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './new.scss';

const New = ({ title, inputs }) => {
	return (
		<div className='new'>
			<Sidebar />
			<div className='newContainer'>
				<Navbar />
				<div className='top'>
					<h2 className='title'>{title}</h2>
				</div>
				<div className='bottom'>
					<div className='left'>
						<img
							src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
							alt=''
							className='image'
						/>
					</div>
					<div className='right'>
						<form>
							<div className='formInput'>
								<label htmlFor='file'>
									Upload Image:
									<DriveFolderUploadIcon className='icon' />
								</label>
								<input type='file' id='file' style={{ display: 'none' }} />
							</div>

							{inputs.map((input) => (
								<div className='formInput' key={input.id}>
									<label htmlFor=''>{input.label}</label>
									<input placeholder={input.placeholder} type={input.type} />
								</div>
							))}
							<button>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
