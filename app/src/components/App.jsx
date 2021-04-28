import Main from "./Main";
import Provider from './Provider';
import { GlobalStyles } from '../styles/globalStyles';

export default function App() {
	return (
		<Provider>
			<GlobalStyles />
			<Main />
		</Provider>
	);
}
