function TaskItem({ task, toggleTask, deleteTask }) {
  const getColor = () => {
    if (task.priority === "high") return "#ef4444";
    if (task.priority === "medium") return "#f59e0b";
    return "#22c55e";
  };

  return (
    <div className="task">
      <div>
        <h3
          style={{
            textDecoration: task.completed ? "line-through" : "",
            color: getColor(),
          }}
        >
          {task.title}
        </h3>

        <p>📅 {task.date}</p>
        <p>📂 {task.category}</p>
        <p>⚡ {task.priority}</p>
      </div>

      <div>
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>

        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;