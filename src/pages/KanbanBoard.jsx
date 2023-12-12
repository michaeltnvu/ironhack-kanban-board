import { useState } from "react";
import TaskContainer from "../components/TaskContainer";
import List from "../kanban.json";

const KanbanBoard = () => {
  const [toDoList, setToDoList] = useState(List);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleDelete = (taskId, listType) => {
    let updatedList;
    switch (listType) {
      case "To-Do":
        updatedList = toDoList.filter((task) => task.id !== taskId);
        setToDoList(updatedList);
        break;
      case "In-Progress":
        updatedList = inProgressList.filter((task) => task.id !== taskId);
        setInProgressList(updatedList);
        break;
      case "Completed":
        updatedList = completedList.filter((task) => task.id !== taskId);
        setCompletedList(updatedList);
        break;
    }
  };

  return (
    <div className="kanbanBoard">
      <TaskContainer
        title={"To-Do"}
        list={toDoList}
        onDelete={(taskId) => handleDelete(taskId, "To-Do")}
      />
      <TaskContainer
        title={"In-Progress"}
        list={inProgressList}
        onDelete={(taskId) => handleDelete(taskId, "In-Progress")}
      />
      <TaskContainer
        title={"Completed"}
        list={completedList}
        onDelete={(taskId) => handleDelete(taskId, "Completed")}
      />
    </div>
  );
};

export default KanbanBoard;
