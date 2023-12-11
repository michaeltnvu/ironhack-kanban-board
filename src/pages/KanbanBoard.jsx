import { useState } from "react";
import TaskContainer from "../components/TaskContainer";
import List from "../kanban.json";

const KanbanBoard = () => {
  const [toDoList, setToDoList] = useState(List);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  return (
    <div className="home-page">
      <TaskContainer title={"To-Do"} list={toDoList} />
      <TaskContainer title={"In Progress"} list={inProgressList} />
      <TaskContainer title={"Completed"} list={completedList} />
    </div>
  );
};

export default KanbanBoard;
