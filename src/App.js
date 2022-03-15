import "./App.css";
// Import Display component
import Header from "./components/Header";
import Display from "./components/Display";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<main>
				<Display />
			</main>
			<Footer />
		</>
	);
}

export default App;
