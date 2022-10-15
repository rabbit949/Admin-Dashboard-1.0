import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeContext } from './context/DarkModeContext';
import { productInputs, userInputs } from './formSource';
import Home from './pages/home/Home';
import ListPage from './pages/list/ListPage';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import './style/dark.scss';

function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? 'app dark' : 'app'}>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='users'>
							<Route index element={<ListPage />} />
							<Route path=':userId' element={<Single />} />
							<Route
								path='new'
								element={<New inputs={userInputs} title='Add New User' />}
							/>
						</Route>
						<Route path='products'>
							<Route index element={<ListPage />} />
							<Route path=':productID' element={<Single />} />
							<Route
								path='new'
								element={<New inputs={productInputs} title='Add New Product' />}
							/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
