import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const TaskDetails = () => {
  const { state } = useLocation();
  const { taskId } = useParams();
  const navigate = useNavigate();

  if (!state) {
    return <p>Task Not Found</p>;
  }

  return (
    <div>
      <h3>{state.title}</h3>
      <p>{state.description}</p>
      <p>Assigned to: {state.assignee}</p>
      <p>Status: {state.status}</p>
      <p>Priority: {state.priority}</p>
      <p>Created on: {state.createdDate}</p>
      <p>Due by: {state.dueDate}</p>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <button onClick={() => navigate(`/${taskId}/edit`, {state})}>Edit Task</button>
    </div>
  );
};

export default TaskDetails;
