import { useContext, useEffect, useReducer } from 'react';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import { taskReducer } from './reducer/taskReducer';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';

const AppContent = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Tasks (${tasks.length})`;
  }, [tasks]);

  const addTask = (text) => dispatch({ type: 'ADD', payload: text });
  const toggleTask = (id) => dispatch({ type: 'TOGGLE', payload: id });

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <h1>TASK MANAGER</h1>
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <ThemeToggle />
      </div>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
