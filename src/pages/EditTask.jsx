import React, { useState, useEffect } from 'react';

const EditTask = ({ updateTask, task }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setAssignee(task.assignee);
            setStatus(task.status);
            setPriority(task.priority);
            setDueDate(task.dueDate);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTask = {
            ...task,
            title,
            description,
            assignee,
            status,
            priority,
            dueDate
        };
        updateTask(updatedTask);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label>Assignee:</label>
                <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div>
                <label>Priority:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div>
                <label>Due Date:</label>
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>
            <button type="submit">Update Task</button>
        </form>
    );
};

export default EditTask;
