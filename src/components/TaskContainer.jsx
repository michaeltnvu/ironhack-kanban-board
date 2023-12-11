import TaskCard from "./TaskCard";

const TaskContainer = ({ title, list, onDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="taskCard">
        {list.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskContainer;
