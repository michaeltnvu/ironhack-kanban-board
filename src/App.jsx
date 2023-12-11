import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/sidebar/Sidebar"
import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </div>
  );
}

export default App;
