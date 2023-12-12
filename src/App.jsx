import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./pages/About";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import KanbanBoard from "./pages/KanbanBoard";
import TaskDetails from "./pages/TaskDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/:taskId" element={<TaskDetails />} />
        <Route path="/:taskId/edit" element={<EditTask />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
