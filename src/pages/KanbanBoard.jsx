import TaskContainer from "../components/TaskContainer";

const KanbanBoard = ({ tasks, handleDeleteTask }) => {
  const toDoList = tasks.filter(task => task.status === "To-Do");
  const inProgressList = tasks.filter(task => task.status === "In-Progress");
  const completedList = tasks.filter(task => task.status === "Completed");

  const handleDelete = (taskId) => {
    handleDeleteTask(taskId)
    }
  

  return (
    <div className="kanbanBoard">
      <TaskContainer
        title={"To-Do"}
        list={toDoList}
        onDelete={handleDelete}
      />
      <TaskContainer
        title={"In-Progress"}
        list={inProgressList}
        onDelete={handleDelete}
      />
      <TaskContainer
        title={"Completed"}
        list={completedList}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default KanbanBoard;
