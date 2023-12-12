import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./pages/About";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import KanbanBoard from "./pages/KanbanBoard";
import TaskDetails from "./pages/TaskDetails";
import kanbanList from "./kanban.json"


function App() {
  // VERIFY: Erase comments when verified
  // State to hold tasks
  const [tasks, setTasks] = useState(kanbanList)
  
  // Function to delete task moved into parent container
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    console.log(`new task ${newTask}`)
  }

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => 
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<KanbanBoard tasks={tasks} handleDeleteTask={handleDeleteTask} />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-task" element={<CreateTask addTask={addTask} tasks={tasks} />} />
        <Route path="/:taskId" element={<TaskDetails />} />
        <Route path="/:taskId/edit" element={<EditTask updateTask={updateTask}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
