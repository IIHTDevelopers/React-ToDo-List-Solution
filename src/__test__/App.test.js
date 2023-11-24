import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Welcome to your Task Manager" h2', () => {
        render(<App />);
        expect(screen.queryByText('Welcome to your Task Manager')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Task Form" h2', () => {
        render(<App />);
        expect(screen.queryByText('Task Form')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Task List" h2', () => {
        render(<App />);
        expect(screen.queryByText('Task List')).toBeInTheDocument();
    });
});
