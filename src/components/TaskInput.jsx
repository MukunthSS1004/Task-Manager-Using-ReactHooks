import { useRef, useState, useCallback } from 'react';

const TaskInput = ({ addTask }) => {
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const handleAdd = useCallback(() => {
    if (text.trim()) {
      addTask(text);
      setText('');
      inputRef.current.focus(); // Autofocus
    }
  }, [text, addTask]);

  return (
    <div className="input-group">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
