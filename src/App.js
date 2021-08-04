import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

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
			<Footer></Footer>
		</div>
	);
}

export default App;
