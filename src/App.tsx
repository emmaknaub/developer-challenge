import "./App.css";
import {Logo} from './components/Logo';
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

function App() {

	return (
		<main>
		<div className="app">
			<Logo/>
			<Card/>
			<Footer/>
		</div>
		</main>
	);
}

export default App;