import { useState, useEffect } from "react";
import CalendarView from "./components/CalendarView";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>⏳ TimeBound</h1>
      <p className="tagline">Plan forward. Stay focused.</p>

      <CalendarView
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <TaskForm addTask={addTask} selectedDate={selectedDate} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default App;