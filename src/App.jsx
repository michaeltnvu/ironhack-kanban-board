import Footer from "./components/Footer";
import List from "./kanban.json";
import TaskContainer from "./components/TaskContainer";
import {useState} from "react"
import ListWithDeleteButton from "./components/ListWithDeleteButton";
function App() {
  const [toDoList, setToDoList] = useState(List);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  return (
    <div className="App">
   
      <TaskContainer title={"To-Do"} list={toDoList} />
      <TaskContainer title={"In Progress"} list={inProgressList} />
      <TaskContainer title={"Completed"} list={completedList} />
      <Footer/>
    </div>
  );
}