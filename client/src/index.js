import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { UserStore } from './stores/UserStore';
import { addTouchClass } from './utils/functions';

export const Context = createContext(null);

// add 'touch' class to html element if using a mobile
addTouchClass();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Context.Provider
			value={{
				userStore: new UserStore(),
			}}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Context.Provider>
	</React.StrictMode>
);
