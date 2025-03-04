import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashLoader } from 'react-spinners';
import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Suspense
				fallback={
					<HashLoader
						color="#b71c1c"
						style={{ display: 'flex', alignItems: 'center' }}
					/>
				}
			>
				<App />
			</Suspense>
		</BrowserRouter>
	</StrictMode>
);
