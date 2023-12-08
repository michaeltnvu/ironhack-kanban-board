const TaskContainer = ({ title, list }) => {
  return (
    <div>
      <h1>{title}</h1>
      {list.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
};

export default TaskContainer;
