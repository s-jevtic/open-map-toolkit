import "./App.css";
import Map from "./Map";

function App() {
	function mapReadyCallback(map) {
		console.log(map);
	}
	return (
		<div className="App h-full">
			<header className="App-header flex justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50/80 py-3">
				<h1>OpenMapToolkit</h1>
			</header>
			<main className="App-main h-full">
				<Map mapReadyCallback={mapReadyCallback}/>
			</main>
		</div>
	);
}

export default App;
