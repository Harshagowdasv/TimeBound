import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask, selectedDate }) {
  const formattedDate = selectedDate.toISOString().split("T")[0];

  const filteredTasks = tasks.filter(task => task.date === formattedDate);

  if (filteredTasks.length === 0) {
    return <p>No tasks for this day...</p>;
  }

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;