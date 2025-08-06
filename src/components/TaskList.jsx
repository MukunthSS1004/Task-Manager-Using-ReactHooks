const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
          onClick={() => deleteTask(index)}
          title="Click to delete this task"
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={e => {
              e.stopPropagation(); // Prevent delete on checkbox click
              toggleTask(index);
            }}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;