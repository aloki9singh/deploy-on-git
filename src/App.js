import { AllRoutes } from "./AllRoutes";
import "./App.css";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App" style={{ width: "80%", margin: "auto" }}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
