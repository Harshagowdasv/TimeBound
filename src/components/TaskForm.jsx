import { useState } from "react";

function TaskForm({ addTask, selectedDate }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("study");

  const formattedDate = selectedDate.toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    const newTask = {
      id: Date.now(), // safe for Vercel
      title,
      date: formattedDate,
      priority,
      category,
      completed: false,
    };

    addTask(newTask);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="study">Study</option>
        <option value="work">Work</option>
        <option value="health">Health</option>
        <option value="personal">Personal</option>
      </select>

      <button>Add</button>
    </form>
  );
}

export default TaskForm;