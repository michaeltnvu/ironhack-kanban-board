import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskDetails = ({ tasks, deleteTask }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return <div>Task not found</div>; // direct to Santi's not found page, maybe?
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.assignee}</p>
            <p>{task.status}</p>
            <p>{task.priority}</p>
            <p>{task.createdDate}</p>
            <p>{task.dueDate}</p>
            <button onClick={() => navigate(`/${id}`)}>Edit Task</button>
        </div>
    );
};

export default TaskDetails;
