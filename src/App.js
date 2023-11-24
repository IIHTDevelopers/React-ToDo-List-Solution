import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:4000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const addedTask = await axios.post('http://localhost:4000/tasks', task);
      setTasks([...tasks, addedTask.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:4000/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTask = async (task) => {
    try {
      await axios.put(`http://localhost:4000/tasks/${task.id}`, task);
      setTasks(tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t)));
      setEditTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to your Task Manager</h2>
      <h2>Task Form</h2>
      <TaskForm addTask={addTask} editTask={editTask} updateTask={updateTask} />
      <h2>Task List</h2>
      <TaskList tasks={tasks} deleteTask={deleteTask} setEditTask={setEditTask} />
    </div>
  );
}

export default App;