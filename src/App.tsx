import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Outlet /> {/* This is where routes will render */}
      </main>
    </div>
  );
}

export default App;