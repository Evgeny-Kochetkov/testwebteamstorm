/* import { HashRouter, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'; */

import { GlobalStyle } from '../globalStyles'

import { AuthorizationPage } from '../pages/authorizationPage'
import { MainPage } from '../pages/mainPage';

export const App = () => {

	return (
		<>
			<GlobalStyle/>
			
			{/* <AuthorizationPage/>  */} {/* ДЛЯ ОТОБРАЖЕНИЯ ОПРЕДЕЛЕННОЙ СТРАНИЦЫ РАСКОММЕНТИРУЙТЕ ЕЁ, ЗАКОММЕНТИРОВАВ ОСТАЛЬНЫЕ */}
			<MainPage/>
		</>
	);
}