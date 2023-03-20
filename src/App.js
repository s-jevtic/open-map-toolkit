import "./App.css";
import Map from "./Map";
import { MapComponentsProvider } from "@mapcomponents/react-maplibre";

function App() {
  return (
    <div className="App h-full flex flex-col">
      <header className="App-header flex justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50/80 py-3 drop-shadow-2xl z-20 opacity-80">
        <h1>OpenMapToolkit</h1>
      </header>
      <main className="App-main h-full">
        <MapComponentsProvider>
          <Map />
        </MapComponentsProvider>
      </main>
    </div>
  );
}

export default App;
