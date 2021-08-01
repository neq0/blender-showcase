import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Gallery from './components/Gallery';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Nav></Nav>
			<main>
				<article>
					<Gallery></Gallery>
				</article>
			</main>
		</div>
	);
}

export default App;
