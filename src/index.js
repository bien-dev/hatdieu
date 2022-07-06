import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { SidebarProvider } from './context/sidebar_context'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './context/user_context'

// dev - xe7wmcwm.us.auth0.com
// 5OIIE0G04CmbJarqaShVvzNwQAa2CpPu

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Auth0Provider
		domain='dev-xe7wmcwm.us.auth0.com'
		clientId='5OIIE0G04CmbJarqaShVvzNwQAa2CpPu'
		redirectUri={window.location.origin}
		cacheLocation='localstorage'
	>
		<UserProvider>
			<SidebarProvider>
				<ProductsProvider>
					<FilterProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</FilterProvider>
				</ProductsProvider>
			</SidebarProvider>
		</UserProvider>
	</Auth0Provider>
)
