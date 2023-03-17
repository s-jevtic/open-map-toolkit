import "./App.css";
import Map from "./Map";

function App() {
	function mapReadyCallback(map) {
		console.log(map);
	}
	return (
		<div className="App h-full flex flex-col">
			<header className="App-header flex justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50/80 py-3 drop-shadow-2xl z-20 opacity-80">
				<h1>OpenMapToolkit</h1>
			</header>
			<main className="App-main z-10 absolute top-0 bottom-0 left-0 right-0">
				<Map mapReadyCallback={mapReadyCallback}/>
			</main>
		</div>
	);
}

export default App;
