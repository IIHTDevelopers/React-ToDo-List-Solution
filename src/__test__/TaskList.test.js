import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';

const tasks = [
    { id: 1, title: 'Task 1', priority: 'High', category: 'Work', completed: false },
    { id: 2, title: 'Task 2', priority: 'Low', category: 'Personal', completed: true },
];

const deleteTask = jest.fn();
const setEditTask = jest.fn();

describe('boundary', () => {
    beforeEach(() => {
        render(
            <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                setEditTask={setEditTask}
            />
        );
    });

    test('TaskListComponent boundary displays all tasks', () => {
        tasks.forEach((task) => {
            expect(screen.getAllByText(`Title:`)).toBeTruthy();
            expect(screen.getAllByText(`Priority:`)).toBeTruthy();
            expect(screen.getAllByText(`Category:`)).toBeTruthy();
            expect(screen.getAllByText(`Completed:`)).toBeTruthy();
        });
    });

    test('TaskListComponent boundary it displays the "Edit" button to edit a task', () => {
        const editButtons = screen.getAllByText('Edit');
        expect(editButtons.length).toBe(tasks.length);
    });

    test('TaskListComponent boundary it calls deleteTask when "Delete" button is clicked', () => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
        expect(deleteTask).toHaveBeenCalledWith(tasks[0].id);
    });

    test('TaskListComponent boundary it removes the task after clicking the "Delete" button', () => {
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText(`Title: ${tasks[0].title}`)).toBeNull();
        expect(screen.queryByText(`Priority: ${tasks[0].priority}`)).toBeNull();
        expect(screen.queryByText(`Category: ${tasks[0].category}`)).toBeNull();
        expect(screen.queryByText(`Completed: ${tasks[0].completed ? 'Yes' : 'No'}`)).toBeNull();
    });

    test('TaskListComponent boundary it displays "No tasks found" when there are no tasks', () => {
        render(
            <TaskList tasks={[]} deleteTask={deleteTask} setEditTask={setEditTask} />
        );
        const noTasksMessage = screen.getByText('No Tasks found');
        expect(noTasksMessage).toBeTruthy();
    });
});
