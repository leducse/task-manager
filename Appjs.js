import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;
