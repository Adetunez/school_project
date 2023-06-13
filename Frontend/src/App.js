import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import { Homepage, Login, Register, Cart } from './Pages/Public';
import { Dashboard } from './Pages/Private';
import ProtectedPages from './utils/protectedPage';
import { ShopContextProvider } from './Pages/Public/context/ShopContext';
import { ProductProvider } from './Pages/Public/context/CreateProduct';

const AppRoute = () => {
	return (
		<BrowserRouter>
			<ProductProvider>
				<ShopContextProvider>
					<Routes>
						<Route path={ROUTES.HOME} element={<Homepage />} />
						<Route path={ROUTES.LOGIN} element={<Login />} />
						<Route path={ROUTES.REGISTER} element={<Register />} />
						<Route path={ROUTES.CART} element={<Cart />} />
						<Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
						<Route path={ROUTES.PAYMENTS} element={<Dashboard />} />
						<Route path={ROUTES.PROFILE} element={<Dashboard />} />
						<Route element={<ProtectedPages />}>
						</Route>
					</Routes>
				</ShopContextProvider>
			</ProductProvider>
		</BrowserRouter>
	);
};
function App() {
	return <AppRoute />;
}

export default App;
