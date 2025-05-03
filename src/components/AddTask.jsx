import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';

function AddTask() {
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (desc.trim()) {
      dispatch(addTask(desc));
      setDesc('');
    }
  };

  return (
    <div className="task-input">
      <input value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
    </div>

  );
}
export default AddTask;
