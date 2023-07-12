/* import { HashRouter, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'; */

import { GlobalStyle } from '../globalStyles'

import { AuthorizationPage } from '../pages/authorizationPage'

export const App = () => {

	return (
		<>
			<GlobalStyle/>
			<AuthorizationPage/>
		</>
	);
}