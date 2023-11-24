import React from 'react';

const TaskList = ({ tasks, deleteTask, setEditTask }) => {
    return (
        <div>
            <ul>
                {
                    tasks.length > 0 ? (
                        tasks.map((task) => (
                            <li key={task.id}>
                                <strong>Title:</strong> {task.title}
                                <br />
                                <strong>Priority:</strong> {task.priority}
                                <br />
                                <strong>Category:</strong> {task.category}
                                <br />
                                <strong>Completed:</strong> {task.completed ? 'Yes' : 'No'}
                                <br />
                                <button onClick={() => setEditTask(task)}>Edit</button>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </li>
                        ))
                    ) : (
                        <li>No Tasks found</li>
                    )
                }
            </ul>
        </div>
    );
};

export default TaskList;
