import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateTask = ({ addTask, tasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To-Do");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  function generateUniqueId() {
    return Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
  }

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: generateUniqueId(), // changing comment to commit
      title,
      description,
      assignee,
      status,
      priority,
      createdDate: new Date().toISOString().split("T")[0], // Current date in ISO format
      dueDate,
    };
    addTask(newTask); // Function to add the new task to the list
    navigate("/");
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("To Do");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Assignee:</label>
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To-Do">To-Do</option>
          <option value="In-Progress">In-Progress</option>
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
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default CreateTask;
