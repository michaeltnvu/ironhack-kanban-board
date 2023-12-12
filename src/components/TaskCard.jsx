import { Link } from "react-router-dom";

const TaskCard = ({ task, onDelete }) => {
  const origDate = task.dueDate.split("-");
  const reformattedDate = origDate.slice(1).concat(origDate[0]).join("-");

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <>
      <div>
        <h3>{task.title}</h3>
        <p>due by: {reformattedDate}</p>
      </div>
      <Link to={"/" + task.id}>
        <button>Details</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default TaskCard;
