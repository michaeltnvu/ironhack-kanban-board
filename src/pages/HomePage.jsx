import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TaskContainer from "../components/TaskContainer";
import List from "../kanban.json";

const HomePage = () => {
  const [toDoList, setToDoList] = useState(List);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  return (
    <div className="home-page">
      
      <Navbar />
      <div>
        <TaskContainer title={"To-Do"} list={toDoList} />
        <TaskContainer title={"In Progress"} list={inProgressList} />
        <TaskContainer title={"Completed"} list={completedList} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
