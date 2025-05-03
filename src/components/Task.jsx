import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTask } from '../redux/action';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTask({ id: task.id, newDescription: newDesc }));
    setIsEditing(false);
  };

  return (
    <div className="task">
  <div className="task-left">
    <input
      type="checkbox"
      checked={task.isDone}
      onChange={() => dispatch(toggleDone(task.id))}
    />
    {isEditing ? (
      <input
        type="text"
        value={newDesc}
        onChange={e => setNewDesc(e.target.value)}
      />
    ) : (
      <span
        style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
      >
        {task.description}
      </span>
    )}
  </div>
  {isEditing ? (
    <button className="save-btn" onClick={handleSave}>Save</button>
  ) : (
    <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
  )}
    </div>

  );
}
export default Task;
