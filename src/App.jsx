import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import List from "./kanban.json";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
