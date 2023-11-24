import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, updateTask }) => {
    const [task, setTask] = useState({ id: '', title: '', priority: '', category: '', completed: false });

    useEffect(() => {
        if (editTask) {
            setTask({ ...editTask });
        } else {
            setTask({ id: '', title: '', priority: '', category: '', completed: false });
        }
    }, [editTask]);

    const isEditForm = !!editTask;

    const isFormIncomplete = !task.title || !task.priority || !task.category;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.title.trim()) {
            alert('Please enter a title for the task.');
            return;
        }
        if (isEditForm) {
            updateTask(task);
        } else {
            addTask({ ...task, id: Date.now() });
        }
        setTask({ id: '', title: '', priority: '', category: '', completed: false });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Task' : 'Add a Task'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Title:
                    <input
                        id="title"
                        type="text"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="priority">
                    Priority:
                    <input
                        id="priority"
                        type="text"
                        value={task.priority}
                        onChange={(e) => setTask({ ...task, priority: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="category">
                    Category:
                    <input
                        id="category"
                        type="text"
                        value={task.category}
                        onChange={(e) => setTask({ ...task, category: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="completed">
                    Completed:
                    <input
                        id="completed"
                        type="checkbox"
                        checked={task.completed}
                        onChange={(e) => setTask({ ...task, completed: e.target.checked })}
                    />
                </label>
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Task' : 'Add Task'}
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
