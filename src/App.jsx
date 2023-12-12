import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./pages/About";
import CreateTask from "./pages/CreateTask";
import KanbanBoard from "./pages/KanbanBoard";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
