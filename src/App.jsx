import Footer from "./components/Footer";
import List from "./kanban.json";
import TaskContainer from "./components/TaskContainer";
import {useState} from "react"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
