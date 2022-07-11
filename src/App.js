import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
	Home,
	About,
	Cart,
	Error,
	Products,
	SingleProduct,
	Checkout,
	AuthWrapper,
} from './pages'

const App = () => {
	return (
		<AuthWrapper>
			<Router>
				<Navbar />
				<Sidebar />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='cart' element={<Cart />} />
					<Route path='products' element={<Products />} />
					<Route path='products/:id' element={<SingleProduct />} />
					<Route path='checkout/*' element={<Checkout />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</AuthWrapper>
	)
}

export default App
