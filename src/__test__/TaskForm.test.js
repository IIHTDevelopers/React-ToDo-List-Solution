import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskForm from '../components/TaskForm';

const addTaskMock = jest.fn();
const updateTaskMock = jest.fn();

describe('boundary', () => {
    test('TaskFormComponent boundary it is rendered', () => {
        render(<TaskForm addTask={addTaskMock} />);
        expect(screen.getByRole('heading')).toBeTruthy();
    });

    test('TaskFormComponent boundary it has "Add a Task" h2', () => {
        render(<TaskForm addTask={addTaskMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Add a Task');
    });

    test('TaskFormComponent boundary it has "Edit Task" h2 when in edit mode', () => {
        render(<TaskForm editTask={{ title: 'Edit Task' }} updateTask={updateTaskMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Edit Task');
    });

    test('TaskFormComponent boundary it has title input field', () => {
        render(<TaskForm addTask={addTaskMock} />);
        const titleInput = screen.getByLabelText('Title:');
        expect(titleInput).toBeTruthy();
    });

    test('TaskFormComponent boundary it has priority input field', () => {
        render(<TaskForm addTask={addTaskMock} />);
        const priorityInput = screen.getByLabelText('Priority:');
        expect(priorityInput).toBeTruthy();
    });

    test('TaskFormComponent boundary it has category input field', () => {
        render(<TaskForm addTask={addTaskMock} />);
        const categoryInput = screen.getByLabelText('Category:');
        expect(categoryInput).toBeTruthy();
    });

    test('TaskFormComponent boundary it has a checkbox for completed', () => {
        render(<TaskForm addTask={addTaskMock} />);
        const completedCheckbox = screen.getByLabelText('Completed:');
        expect(completedCheckbox).toBeTruthy();
    });

    test('TaskFormComponent boundary it has an "Add Task" button', () => {
        render(<TaskForm addTask={addTaskMock} />);
        const addButton = screen.getByRole('button', { name: 'Add Task' });
        expect(addButton).toBeTruthy();
    });

    test('TaskFormComponent boundary it has an "Update Task" button when in edit mode', () => {
        render(<TaskForm editTask={{ title: 'Edit Task' }} updateTask={updateTaskMock} />);
        const updateButton = screen.getByRole('button', { name: 'Update Task' });
        expect(updateButton).toBeTruthy();
    });
});
