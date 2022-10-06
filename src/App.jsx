import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListPage from './pages/list/ListPage';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='users'>
							<Route index element={<ListPage />} />
							<Route path=':userId' element={<Single />} />
							<Route path='new' element={<New />} />
						</Route>
						<Route path='products'>
							<Route index element={<ListPage />} />
							<Route path=':productID' element={<Single />} />
							<Route path='new' element={<New />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
